import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Production backend URL
const BASE_URL = 'https://etrm-master-backend.onrender.com/api/trades/';
const TRADES_STORAGE_KEY = '@pulsetrade_local_trades';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

export interface Trade {
  id?: number;
  company: string;
  counterparty: string;
  product: 'OIL' | 'GAS' | 'POWER';
  start_date: string;
  end_date: string;
  price: number;
  quantity: number;
  unit: 'BBL' | 'MMBTU' | 'MWH';
  status?: 'CAPTURED' | 'APPROVED' | 'SCHEDULED' | 'ACTUALIZED' | 'INVOICED';
  transport_mode?: 'VESSEL' | 'TRAIN' | 'TRUCK';
  vessel_name?: string;
  delivery_hub?: string;
  actual_quantity?: number;
  accrual_amount?: number;
  tolerance_variance?: number;
  invoice_type?: 'AP' | 'AR';
  invoice_number?: string;
  payment_due_date?: string;
  is_settled?: boolean;
  created_at?: string;
  updated_at?: string;
}

// Default initial trades so simulator is functional even offline or during Render cold-start
const INITIAL_TRADES: Trade[] = [
  {
    id: 77561,
    company: 'Shell Energy North America',
    counterparty: 'BP Energy Trading',
    product: 'GAS',
    start_date: '2026-03-01',
    end_date: '2026-03-31',
    price: 3.45,
    quantity: 100000.0,
    unit: 'MMBTU',
    status: 'INVOICED',
    transport_mode: 'TRAIN',
    delivery_hub: 'Henry Hub (LA)',
    actual_quantity: 100450.0,
    tolerance_variance: 0.45,
    accrual_amount: 346552.50,
    invoice_type: 'AP',
    invoice_number: 'INV-77561-291',
    payment_due_date: '2026-04-30',
    is_settled: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 47870,
    company: 'Vitol Supply & Trading',
    counterparty: 'Trafigura Maritime',
    product: 'OIL',
    start_date: '2026-03-10',
    end_date: '2026-04-10',
    price: 76.20,
    quantity: 50000.0,
    unit: 'BBL',
    status: 'SCHEDULED',
    transport_mode: 'VESSEL',
    vessel_name: 'Pacific Voyager',
    delivery_hub: 'Rotterdam ARA Terminal',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 29401,
    company: 'NextEra Power Marketing',
    counterparty: 'Constellation Energy Group',
    product: 'POWER',
    start_date: '2026-03-15',
    end_date: '2026-03-31',
    price: 46.50,
    quantity: 5000.0,
    unit: 'MWH',
    status: 'CAPTURED',
    delivery_hub: 'PJM Western Hub',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
];

// Normalize data coming from backend
const normalizeTrade = (item: any): Trade => ({
  ...item,
  id: Number(item.id),
  price: typeof item.price === 'string' ? parseFloat(item.price) || 0 : Number(item.price) || 0,
  quantity: typeof item.quantity === 'string' ? parseFloat(item.quantity) || 0 : Number(item.quantity) || 0,
  actual_quantity: item.actual_quantity != null 
    ? (typeof item.actual_quantity === 'string' ? parseFloat(item.actual_quantity) || 0 : Number(item.actual_quantity) || 0)
    : undefined,
  accrual_amount: item.accrual_amount != null
    ? (typeof item.accrual_amount === 'string' ? parseFloat(item.accrual_amount) || 0 : Number(item.accrual_amount) || 0)
    : undefined,
  tolerance_variance: item.tolerance_variance != null
    ? (typeof item.tolerance_variance === 'string' ? parseFloat(item.tolerance_variance) || 0 : Number(item.tolerance_variance) || 0)
    : undefined,
});

const getLocalTrades = async (): Promise<Trade[]> => {
  try {
    const raw = await AsyncStorage.getItem(TRADES_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(normalizeTrade);
      }
    }
  } catch (e) {
    console.warn('Error reading local trades:', e);
  }
  return INITIAL_TRADES;
};

const saveLocalTrades = async (trades: Trade[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(TRADES_STORAGE_KEY, JSON.stringify(trades));
  } catch (e) {
    console.warn('Error saving local trades:', e);
  }
};

export const tradeService = {
  getTrades: async (): Promise<Trade[]> => {
    try {
      const response = await api.get('');
      if (Array.isArray(response.data) && response.data.length > 0) {
        const normalized = response.data.map(normalizeTrade);
        await saveLocalTrades(normalized);
        return normalized;
      }
    } catch (error: any) {
      console.log('Backend request fell back to local storage:', error?.message || error);
    }
    // Fall back to local trades
    return await getLocalTrades();
  },

  createTrade: async (trade: Trade): Promise<Trade | null> => {
    const newTradeData: Trade = {
      ...trade,
      status: 'CAPTURED',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Try remote first
    try {
      const response = await api.post('', trade);
      if (response?.data) {
        const created = normalizeTrade(response.data);
        const current = await getLocalTrades();
        await saveLocalTrades([created, ...current]);
        return created;
      }
    } catch (error: any) {
      console.log('Remote trade creation failed, saving locally:', error?.message || error);
    }

    // Local fallback creation
    const localCreated: Trade = {
      ...newTradeData,
      id: Math.floor(10000 + Math.random() * 90000),
    };
    const current = await getLocalTrades();
    await saveLocalTrades([localCreated, ...current]);
    return localCreated;
  },

  updateTrade: async (id: number, updates: Partial<Trade>): Promise<Trade | null> => {
    // Try remote update
    try {
      const response = await api.patch(`${id}/`, updates);
      if (response?.data) {
        const updated = normalizeTrade(response.data);
        const current = await getLocalTrades();
        const updatedList = current.map(t => (t.id === id ? { ...t, ...updated } : t));
        await saveLocalTrades(updatedList);
        return updated;
      }
    } catch (error: any) {
      console.log('Remote trade update failed, updating locally:', error?.message || error);
    }

    // Local fallback update
    const current = await getLocalTrades();
    let updatedTrade: Trade | null = null;
    const updatedList = current.map(t => {
      if (t.id === id) {
        updatedTrade = { ...t, ...updates, updated_at: new Date().toISOString() };
        return updatedTrade;
      }
      return t;
    });

    if (updatedTrade) {
      await saveLocalTrades(updatedList);
      return updatedTrade;
    }
    return null;
  },

  deleteTrade: async (id: number): Promise<boolean> => {
    try {
      await api.delete(`${id}/`);
    } catch (error: any) {
      console.log('Remote delete failed, deleting locally:', error?.message || error);
    }

    // Delete locally regardless
    const current = await getLocalTrades();
    const filtered = current.filter(t => t.id !== id);
    await saveLocalTrades(filtered);
    return true;
  },

  resetDemoTrades: async (): Promise<Trade[]> => {
    await saveLocalTrades(INITIAL_TRADES);
    return INITIAL_TRADES;
  }
};
