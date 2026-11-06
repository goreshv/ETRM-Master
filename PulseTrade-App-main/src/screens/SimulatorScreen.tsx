import React, { useState, useEffect, useMemo } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  TextInput, 
  Modal, 
  ScrollView, 
  Alert, 
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenContainer from '../components/layout/ScreenContainer';
import { tradeService, Trade } from '../services/tradeService';

const PRODUCTS: { label: string; value: Trade['product'] }[] = [
  { label: 'Crude Oil', value: 'OIL' },
  { label: 'Natural Gas', value: 'GAS' },
  { label: 'Electricity', value: 'POWER' },
];

const UNITS: { label: string; value: Trade['unit'] }[] = [
  { label: 'Barrels (bbl)', value: 'BBL' },
  { label: 'Million BTU (MMBtu)', value: 'MMBTU' },
  { label: 'Megawatt Hours (MWh)', value: 'MWH' },
];

const DELIVERY_HUBS = [
  'Henry Hub (LA)',
  'Cushing Storage (OK)',
  'Houston Ship Channel (TX)',
  'Rotterdam ARA Terminal',
  'PJM Western Hub',
  'ERCOT North Hub (TX)',
  'TTF Virtual Hub (EU)',
  'Mont Belvieu (TX)'
];

const STATUS_STAGES = ['CAPTURED', 'APPROVED', 'SCHEDULED', 'ACTUALIZED', 'INVOICED'];

const STATUS_COLORS: { [key: string]: string } = {
  CAPTURED: '#3B82F6', // Blue
  APPROVED: '#8B5CF6', // Purple
  SCHEDULED: '#F59E0B', // Amber
  ACTUALIZED: '#10B981', // Green
  INVOICED: '#475569', // Slate
};

const TRANSPORT_MODES: { label: string; value: Trade['transport_mode'] }[] = [
  { label: '🚢 Vessel', value: 'VESSEL' },
  { label: '🚂 Train', value: 'TRAIN' },
  { label: '🚚 Pipeline/Truck', value: 'TRUCK' },
];

const INITIAL_MARKET_PRICES = {
  OIL: 75.50,
  GAS: 3.25,
  POWER: 45.00
};

const FILTER_TABS = ['All', 'CAPTURED', 'APPROVED', 'SCHEDULED', 'ACTUALIZED', 'INVOICED'];

const SimulatorScreen = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [lifecycleModalVisible, setLifecycleModalVisible] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);
  const [editingTrade, setEditingTrade] = useState<Trade | null>(null);
  const [marketPrices, setMarketPrices] = useState(INITIAL_MARKET_PRICES);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Form states
  const [company, setCompany] = useState('');
  const [counterparty, setCounterparty] = useState('');
  const [product, setProduct] = useState<Trade['product']>('OIL');
  const [deliveryHub, setDeliveryHub] = useState(DELIVERY_HUBS[0]);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState<Trade['unit']>('BBL');

  // Lifecycle states
  const [transportMode, setTransportMode] = useState<Trade['transport_mode']>('TRUCK');
  const [vesselName, setVesselName] = useState('');
  const [selectedHub, setSelectedHub] = useState('');
  const [actualQuantity, setActualQuantity] = useState('');

  useEffect(() => {
    loadTrades();
  }, []);

  const simulatePriceMovement = () => {
    setMarketPrices({
      OIL: +(INITIAL_MARKET_PRICES.OIL + (Math.random() * 10 - 5)).toFixed(2),
      GAS: +(INITIAL_MARKET_PRICES.GAS + (Math.random() * 0.6 - 0.3)).toFixed(2),
      POWER: +(INITIAL_MARKET_PRICES.POWER + (Math.random() * 8 - 4)).toFixed(2)
    });
  };

  const calculatePnL = (trade: Trade) => {
    const tradePrice = Number(trade.price) || 0;
    const tradeQty = Number(trade.quantity) || 0;
    const currentPrice = marketPrices[trade.product] || tradePrice;
    const isBuyer = !(trade.company || '').toLowerCase().includes('sell');
    
    // For unrealized PnL (Open trades)
    if (['CAPTURED', 'APPROVED', 'SCHEDULED'].includes(trade.status || '')) {
      const priceDiff = isBuyer ? (currentPrice - tradePrice) : (tradePrice - currentPrice);
      return {
        type: 'Unrealized',
        value: priceDiff * tradeQty
      };
    }
    
    // For realized PnL (Actualized or Invoiced trades)
    const actualQty = Number(trade.actual_quantity) || tradeQty;
    const accrual = Number(trade.accrual_amount) || (actualQty * tradePrice);
    return {
      type: 'Realized',
      value: accrual * 0.05
    };
  };

  const getPortfolioSummary = () => {
    let totalUnrealized = 0;
    let totalRealized = 0;
    
    trades.forEach(t => {
      const pnl = calculatePnL(t);
      if (pnl.type === 'Unrealized') totalUnrealized += pnl.value;
      else totalRealized += pnl.value;
    });
    
    return { totalUnrealized, totalRealized };
  };

  const loadTrades = async (showSpinner = true) => {
    if (showSpinner) setLoading(true);
    const data = await tradeService.getTrades();
    setTrades(data);
    if (showSpinner) setLoading(false);
  };

  const resetForm = () => {
    setCompany('');
    setCounterparty('');
    setProduct('OIL');
    setDeliveryHub(DELIVERY_HUBS[0]);
    setStartDate(new Date().toISOString().split('T')[0]);
    setEndDate(new Date().toISOString().split('T')[0]);
    setPrice('');
    setQuantity('');
    setUnit('BBL');
    setEditingTrade(null);
  };

  const handleSaveTrade = async () => {
    if (!company.trim() || !counterparty.trim() || !price || !quantity) {
      Alert.alert('Incomplete Deal Ticket', 'Please fill in Company, Counterparty, Price, and Quantity.');
      return;
    }

    const parsedPrice = parseFloat(price);
    const parsedQuantity = parseFloat(quantity);

    if (isNaN(parsedPrice) || parsedPrice <= 0 || isNaN(parsedQuantity) || parsedQuantity <= 0) {
      Alert.alert('Invalid Numbers', 'Please enter a valid positive price and quantity.');
      return;
    }

    const tradeData: Trade = {
      company: company.trim(),
      counterparty: counterparty.trim(),
      product,
      delivery_hub: deliveryHub,
      start_date: startDate,
      end_date: endDate,
      price: parsedPrice,
      quantity: parsedQuantity,
      unit,
    };

    let result;
    if (editingTrade?.id) {
      result = await tradeService.updateTrade(editingTrade.id, tradeData);
    } else {
      result = await tradeService.createTrade(tradeData);
    }

    if (result) {
      setModalVisible(false);
      resetForm();
      loadTrades(false);
      Alert.alert('Trade Booked 📈', `Deal #${result.id} captured into trading blotter.`);
    } else {
      Alert.alert('Error', 'Failed to save trade deal.');
    }
  };

  const handleApprove = async (trade: Trade) => {
    if (!trade.id) return;
    const result = await tradeService.updateTrade(trade.id, { status: 'APPROVED' });
    if (result) {
      Alert.alert('Risk Approved ✓', 'Middle Office credit check passed and risk limits approved.');
      loadTrades(false);
      setSelectedTrade(result);
      setLifecycleModalVisible(false);
    }
  };

  const handleSchedule = async (trade: Trade) => {
    if (!trade.id) return;
    if (transportMode === 'VESSEL' && !vesselName.trim()) {
      Alert.alert('Missing Vessel', 'Please provide a nominated vessel name.');
      return;
    }
    const result = await tradeService.updateTrade(trade.id, { 
      status: 'SCHEDULED',
      transport_mode: transportMode,
      vessel_name: transportMode === 'VESSEL' ? vesselName.trim() : '',
      delivery_hub: selectedHub || trade.delivery_hub || DELIVERY_HUBS[0]
    });
    if (result) {
      Alert.alert('Scheduled & Nominated 🚢', `Nominated via ${transportMode} to ${result.delivery_hub}.`);
      loadTrades(false);
      setSelectedTrade(result);
      setLifecycleModalVisible(false);
    }
  };

  const handleActualize = async (trade: Trade) => {
    if (!trade.id) return;
    const qty = parseFloat(actualQuantity);
    if (isNaN(qty) || qty <= 0) {
      Alert.alert('Invalid Volume', 'Please enter a valid actual meter flow quantity.');
      return;
    }
    const scheduledQty = Number(trade.quantity) || qty;
    const variancePercent = +(((qty - scheduledQty) / scheduledQty) * 100).toFixed(2);
    const tradePrice = Number(trade.price) || 0;
    const accrual = qty * tradePrice;

    const result = await tradeService.updateTrade(trade.id, { 
      status: 'ACTUALIZED',
      actual_quantity: qty,
      tolerance_variance: variancePercent,
      accrual_amount: accrual
    });
    if (result) {
      Alert.alert('Actuals Verified 📊', `Flow volume: ${qty.toLocaleString()} ${trade.unit} (Variance: ${variancePercent > 0 ? '+' : ''}${variancePercent}%). Accrual: $${accrual.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}.`);
      loadTrades(false);
      setSelectedTrade(result);
      setLifecycleModalVisible(false);
    }
  };

  const handleInvoice = async (trade: Trade) => {
    if (!trade.id) return;
    const isSell = (trade.company || '').toLowerCase().includes('sell');
    const invType = isSell ? 'AR' : 'AP';
    const invNum = `INV-${trade.id}-${Math.floor(100 + Math.random() * 900)}`;
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30);
    const dueDateStr = dueDate.toISOString().split('T')[0];

    const result = await tradeService.updateTrade(trade.id, { 
      status: 'INVOICED',
      invoice_type: invType,
      invoice_number: invNum,
      payment_due_date: dueDateStr,
      is_settled: true,
    });
    if (result) {
      Alert.alert('Commercial Invoice Generated 🧾', `${invNum} (${invType}) issued. Payment terms: Net 30 (${dueDateStr}).`);
      loadTrades(false);
      setSelectedTrade(result);
      setLifecycleModalVisible(false);
    }
  };

  const handleOpenLifecycle = (trade: Trade) => {
    setSelectedTrade(trade);
    setVesselName(trade.vessel_name || '');
    setTransportMode(trade.transport_mode || 'TRUCK');
    setSelectedHub(trade.delivery_hub || DELIVERY_HUBS[0]);
    setActualQuantity((trade.actual_quantity ?? trade.quantity ?? '').toString());
    setLifecycleModalVisible(true);
  };

  const handleEdit = (trade: Trade) => {
    setEditingTrade(trade);
    setCompany(trade.company);
    setCounterparty(trade.counterparty);
    setProduct(trade.product);
    setDeliveryHub(trade.delivery_hub || DELIVERY_HUBS[0]);
    setStartDate(trade.start_date);
    setEndDate(trade.end_date);
    setPrice(trade.price.toString());
    setQuantity(trade.quantity.toString());
    setUnit(trade.unit);
    setModalVisible(true);
  };

  const handleDelete = (id: number) => {
    Alert.alert(
      'Delete Trade Deal',
      'Are you sure you want to delete this simulated transaction from the blotter?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: async () => {
            const success = await tradeService.deleteTrade(id);
            if (success) loadTrades(false);
          }
        }
      ]
    );
  };

  const handleResetDemoBook = () => {
    Alert.alert(
      'Reset Trading Book',
      'This will restore the standard demonstration deals across Oil, Natural Gas, and Electricity.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Reset Portfolio', 
          onPress: async () => {
            await tradeService.resetDemoTrades();
            loadTrades(false);
          }
        }
      ]
    );
  };

  const filteredTrades = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return trades.filter(t => {
      const matchesFilter = activeFilter === 'All' || t.status === activeFilter;
      if (!matchesFilter) return false;

      if (!q) return true;
      const comp = (t.company || '').toLowerCase();
      const cp = (t.counterparty || '').toLowerCase();
      const hub = (t.delivery_hub || '').toLowerCase();
      const id = String(t.id || '');
      return comp.includes(q) || cp.includes(q) || hub.includes(q) || id.includes(q);
    });
  }, [trades, activeFilter, searchQuery]);

  const { totalUnrealized, totalRealized } = getPortfolioSummary();

  // Render 5-stage visual stepper on each trade card
  const renderStepper = (currentStatus?: string) => {
    const statusIndex = STATUS_STAGES.indexOf(currentStatus || 'CAPTURED');

    return (
      <View className="flex-row items-center justify-between my-3 px-1">
        {STATUS_STAGES.map((st, i) => {
          const isDone = i <= statusIndex;
          const isCurrent = i === statusIndex;
          const stageColor = isDone ? STATUS_COLORS[st] : '#CBD5E1';

          return (
            <React.Fragment key={st}>
              <View className="items-center">
                <View 
                  style={{
                    width: isCurrent ? 22 : 18,
                    height: isCurrent ? 22 : 18,
                    borderRadius: 11,
                    backgroundColor: isDone ? stageColor : '#F1F5F9',
                    borderColor: isCurrent ? '#1E40FF' : isDone ? stageColor : '#CBD5E1',
                    borderWidth: isCurrent ? 2 : 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {isDone ? (
                    <Ionicons name="checkmark" size={10} color="#FFFFFF" />
                  ) : (
                    <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#94A3B8' }} />
                  )}
                </View>
                <Text 
                  style={{
                    fontSize: 8,
                    fontFamily: isCurrent ? 'Poppins-Bold' : 'Poppins-Medium',
                    color: isCurrent ? '#0F172A' : '#94A3B8',
                    marginTop: 2
                  }}
                >
                  {st === 'CAPTURED' ? 'Booked' : st === 'APPROVED' ? 'Approved' : st === 'SCHEDULED' ? 'Scheduled' : st === 'ACTUALIZED' ? 'Actuals' : 'Invoiced'}
                </Text>
              </View>
              {i < STATUS_STAGES.length - 1 && (
                <View 
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor: i < statusIndex ? '#10B981' : '#E2E8F0',
                    marginHorizontal: 3,
                    marginBottom: 10
                  }} 
                />
              )}
            </React.Fragment>
          );
        })}
      </View>
    );
  };

  const renderTradeItem = ({ item }: { item: Trade }) => {
    const pnl = calculatePnL(item);
    const pnlColor = pnl.value >= 0 ? 'text-emerald-600' : 'text-rose-600';
    const pnlBg = pnl.value >= 0 ? 'bg-emerald-50' : 'bg-rose-50';
    const statusColor = STATUS_COLORS[item.status || 'CAPTURED'] || '#3B82F6';

    return (
      <View className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-slate-100">
        {/* Deal Header */}
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center flex-1 mr-2">
            <View 
              className="w-10 h-10 rounded-2xl items-center justify-center mr-3"
              style={{ backgroundColor: `${statusColor}18` }}
            >
              <Ionicons 
                name={item.product === 'OIL' ? 'water' : item.product === 'GAS' ? 'flame' : 'flash'} 
                size={20} 
                color={statusColor} 
              />
            </View>
            <View className="flex-1">
              <View className="flex-row items-center">
                <Text className="text-slate-900 font-poppins-bold text-sm">{item.product} Contract</Text>
                <Text className="text-slate-400 font-poppins-medium text-[10px] ml-2">#{item.id}</Text>
              </View>
              <Text className="text-slate-500 font-poppins-medium text-[10px]" numberOfLines={1}>
                📍 {item.delivery_hub || 'Henry Hub'} • {item.transport_mode || 'Pipeline'}
              </Text>
            </View>
          </View>
          <View className="items-end">
            <View 
              className="px-2.5 py-0.5 rounded-full mb-1"
              style={{ backgroundColor: `${statusColor}18` }}
            >
              <Text 
                className="text-[9px] font-poppins-bold uppercase tracking-wider"
                style={{ color: statusColor }}
              >
                {item.status || 'CAPTURED'}
              </Text>
            </View>
            <View className={`${pnlBg} px-2 py-0.5 rounded-lg`}>
              <Text className={`${pnlColor} text-[10px] font-poppins-bold`}>
                {pnl.type}: ${Math.abs(pnl.value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Text>
            </View>
          </View>
        </View>

        {/* Counterparty Overview */}
        <View className="flex-row justify-between mb-2 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
          <View className="flex-1 mr-2">
            <Text className="text-slate-400 text-[9px] font-poppins-bold uppercase">Buyer Desk</Text>
            <Text className="text-slate-800 font-poppins-semibold text-xs" numberOfLines={1}>{item.company}</Text>
          </View>
          <View className="flex-1 items-end">
            <Text className="text-slate-400 text-[9px] font-poppins-bold uppercase">Seller Counterparty</Text>
            <Text className="text-slate-800 font-poppins-semibold text-xs" numberOfLines={1}>{item.counterparty}</Text>
          </View>
        </View>

        {/* Commercial Volume & Price */}
        <View className="flex-row justify-between mb-2">
          <View>
            <Text className="text-slate-400 text-[9px] font-poppins-bold uppercase">Contract Price</Text>
            <Text className="text-primary font-poppins-bold text-base">${Number(item.price).toFixed(2)}/{item.unit}</Text>
          </View>
          <View className="items-end">
            <Text className="text-slate-400 text-[9px] font-poppins-bold uppercase">Contract Volume</Text>
            <Text className="text-slate-900 font-poppins-bold text-base">{Number(item.quantity).toLocaleString()} {item.unit}</Text>
          </View>
        </View>

        {/* Visual 5-Stage Stepper */}
        {renderStepper(item.status)}

        {/* Actions & Lifecycle Button */}
        <View className="flex-row justify-between items-center border-t border-slate-100 pt-3">
          <TouchableOpacity 
            onPress={() => handleOpenLifecycle(item)}
            className="bg-blue-50 px-3.5 py-1.5 rounded-xl flex-row items-center border border-blue-100"
          >
            <Ionicons name="git-network-outline" size={15} color="#1E40FF" />
            <Text className="text-primary font-poppins-bold text-xs ml-1.5">
              {item.status === 'CAPTURED' ? 'Advance ➔ Approval' :
               item.status === 'APPROVED' ? 'Advance ➔ Logistics' :
               item.status === 'SCHEDULED' ? 'Advance ➔ Actuals' :
               item.status === 'ACTUALIZED' ? 'Advance ➔ Invoicing' : 'View Settlement Invoice'}
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => handleEdit(item)} className="p-2 mr-1">
              <Ionicons name="create-outline" size={18} color="#3B82F6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => item.id && handleDelete(item.id)} className="p-2">
              <Ionicons name="trash-outline" size={18} color="#EF4444" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScreenContainer scrollable={false}>
      {/* Header */}
      <View className="flex-row items-center justify-between mt-2 mb-2">
        <View>
          <Text className="text-3xl font-poppins-bold text-slate-900">Trade Simulator</Text>
          <Text className="text-slate-400 font-poppins-medium text-xs">Deal Capture ➔ Risk ➔ Actuals ➔ Settlement</Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <TouchableOpacity 
            onPress={handleResetDemoBook}
            className="w-10 h-10 bg-white rounded-2xl items-center justify-center border border-slate-100 mr-2 shadow-sm"
            accessibilityLabel="Reset Standard Book"
          >
            <Ionicons name="refresh-outline" size={18} color="#64748B" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => { resetForm(); setModalVisible(true); }}
            className="w-10 h-10 bg-primary rounded-2xl items-center justify-center shadow-md shadow-primary/30"
            accessibilityLabel="Capture New Deal"
          >
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Portfolio Valuation Header */}
      <View className="bg-slate-900 p-4 rounded-3xl mb-3 shadow-md shadow-slate-900/20">
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center">
            <Ionicons name="analytics" size={18} color="#60A5FA" />
            <Text className="text-white font-poppins-bold text-sm ml-2">Simulated Portfolio</Text>
          </View>
          <TouchableOpacity 
            onPress={simulatePriceMovement}
            className="bg-white/10 px-2.5 py-1 rounded-xl flex-row items-center"
          >
            <Ionicons name="pulse" size={13} color="#60A5FA" />
            <Text className="text-blue-100 font-poppins-semibold text-[10px] ml-1">Simulate Curve</Text>
          </TouchableOpacity>
        </View>
        
        <View className="flex-row justify-between pt-2 border-t border-slate-800">
          <View>
            <Text className="text-slate-400 text-[9px] font-poppins-semibold uppercase mb-0.5">Unrealized MTM</Text>
            <Text className={`text-base font-poppins-bold ${totalUnrealized >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${totalUnrealized.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Text>
          </View>
          <View className="items-end">
            <Text className="text-slate-400 text-[9px] font-poppins-semibold uppercase mb-0.5">Realized Accounting PnL</Text>
            <Text className={`text-base font-poppins-bold ${totalRealized >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${totalRealized.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Text>
          </View>
        </View>
      </View>

      {/* Status Filter Tabs */}
      <View style={{ height: 42, marginBottom: 6 }}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={{ alignItems: 'center' }}
        >
          {FILTER_TABS.map(tab => {
            const isActive = activeFilter === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveFilter(tab)}
                style={{
                  height: 32,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 12,
                  borderRadius: 16,
                  marginRight: 6,
                  backgroundColor: isActive ? '#1E40FF' : '#FFFFFF',
                  borderColor: isActive ? '#1E40FF' : '#E2E8F0',
                  borderWidth: 1,
                }}
              >
                <Text className={`text-[11px] font-poppins-semibold ${isActive ? 'text-white' : 'text-slate-600'}`}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#1E40FF" />
          <Text className="mt-3 text-slate-400 font-poppins-medium text-xs">Loading trading book...</Text>
        </View>
      ) : (
        <FlatList
          data={filteredTrades}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          renderItem={renderTradeItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
          ListEmptyComponent={() => (
            <View className="flex-1 items-center justify-center mt-12 px-6">
              <View className="w-16 h-16 bg-slate-100 rounded-full items-center justify-center mb-3">
                <Ionicons name="document-text-outline" size={32} color="#94A3B8" />
              </View>
              <Text className="text-slate-800 font-poppins-bold text-base text-center">
                {activeFilter === 'All' ? 'No trades in portfolio' : `No ${activeFilter} trades`}
              </Text>
              <Text className="text-slate-400 font-poppins-medium text-center text-xs mt-1">
                Tap the + button to book a simulated trade deal or click Reset.
              </Text>
            </View>
          )}
          refreshing={loading}
          onRefresh={() => loadTrades(true)}
        />
      )}

      {/* Trade Capture Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <View className="flex-1 justify-end bg-black/60">
            <View className="bg-white rounded-t-3xl h-[88%] p-6">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-xl font-poppins-bold text-slate-900">
                  {editingTrade ? 'Edit Trade Ticket' : 'Capture Energy Deal'}
                </Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Ionicons name="close" size={24} color="#64748B" />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                <Text className="text-slate-400 text-[10px] font-poppins-bold uppercase mb-1">Buyer Desk (Company)</Text>
                <TextInput
                  className="bg-slate-50 p-3 rounded-xl font-poppins-medium text-xs mb-3 border border-slate-100"
                  placeholder="e.g. Shell Energy North America"
                  placeholderTextColor="#94A3B8"
                  value={company}
                  onChangeText={setCompany}
                />

                <Text className="text-slate-400 text-[10px] font-poppins-bold uppercase mb-1">Seller Desk (Counterparty)</Text>
                <TextInput
                  className="bg-slate-50 p-3 rounded-xl font-poppins-medium text-xs mb-3 border border-slate-100"
                  placeholder="e.g. BP Energy Trading"
                  placeholderTextColor="#94A3B8"
                  value={counterparty}
                  onChangeText={setCounterparty}
                />

                <Text className="text-slate-400 text-[10px] font-poppins-bold uppercase mb-1">Commodity Product</Text>
                <View className="flex-row mb-3">
                  {PRODUCTS.map((p) => (
                    <TouchableOpacity
                      key={p.value}
                      onPress={() => setProduct(p.value)}
                      className={`flex-1 p-2 rounded-xl mr-2 items-center border ${
                        product === p.value ? 'bg-primary border-primary' : 'bg-white border-slate-200'
                      }`}
                    >
                      <Text className={`text-[10px] font-poppins-bold ${product === p.value ? 'text-white' : 'text-slate-600'}`}>
                        {p.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <Text className="text-slate-400 text-[10px] font-poppins-bold uppercase mb-1">Delivery Hub / Location</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-3">
                  {DELIVERY_HUBS.map(hub => (
                    <TouchableOpacity
                      key={hub}
                      onPress={() => setDeliveryHub(hub)}
                      className={`px-3 py-1.5 rounded-xl mr-2 border ${
                        deliveryHub === hub ? 'bg-primary border-primary' : 'bg-white border-slate-200'
                      }`}
                    >
                      <Text className={`text-[10px] font-poppins-semibold ${deliveryHub === hub ? 'text-white' : 'text-slate-600'}`}>
                        {hub}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

                <View className="flex-row justify-between">
                  <View className="flex-1 mr-2">
                    <Text className="text-slate-400 text-[10px] font-poppins-bold uppercase mb-1">Start Date</Text>
                    <TextInput
                      className="bg-slate-50 p-3 rounded-xl font-poppins-medium text-xs mb-3 border border-slate-100"
                      placeholder="YYYY-MM-DD"
                      placeholderTextColor="#94A3B8"
                      value={startDate}
                      onChangeText={setStartDate}
                    />
                  </View>
                  <View className="flex-1 ml-2">
                    <Text className="text-slate-400 text-[10px] font-poppins-bold uppercase mb-1">End Date</Text>
                    <TextInput
                      className="bg-slate-50 p-3 rounded-xl font-poppins-medium text-xs mb-3 border border-slate-100"
                      placeholder="YYYY-MM-DD"
                      placeholderTextColor="#94A3B8"
                      value={endDate}
                      onChangeText={setEndDate}
                    />
                  </View>
                </View>

                <View className="flex-row justify-between">
                  <View className="flex-1 mr-2">
                    <Text className="text-slate-400 text-[10px] font-poppins-bold uppercase mb-1">Contract Price ($)</Text>
                    <TextInput
                      className="bg-slate-50 p-3 rounded-xl font-poppins-medium text-xs mb-3 border border-slate-100"
                      placeholder="e.g. 75.50"
                      placeholderTextColor="#94A3B8"
                      keyboardType="numeric"
                      value={price}
                      onChangeText={setPrice}
                    />
                  </View>
                  <View className="flex-1 ml-2">
                    <Text className="text-slate-400 text-[10px] font-poppins-bold uppercase mb-1">Volume Quantity</Text>
                    <TextInput
                      className="bg-slate-50 p-3 rounded-xl font-poppins-medium text-xs mb-3 border border-slate-100"
                      placeholder="e.g. 50000"
                      placeholderTextColor="#94A3B8"
                      keyboardType="numeric"
                      value={quantity}
                      onChangeText={setQuantity}
                    />
                  </View>
                </View>

                <Text className="text-slate-400 text-[10px] font-poppins-bold uppercase mb-1">Contract Unit</Text>
                <View className="flex-row mb-6">
                  {UNITS.map((u) => (
                    <TouchableOpacity
                      key={u.value}
                      onPress={() => setUnit(u.value)}
                      className={`flex-1 p-2 rounded-xl mr-2 items-center border ${
                        unit === u.value ? 'bg-primary border-primary' : 'bg-white border-slate-200'
                      }`}
                    >
                      <Text className={`text-[10px] font-poppins-bold ${unit === u.value ? 'text-white' : 'text-slate-600'}`}>
                        {u.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <TouchableOpacity 
                  onPress={handleSaveTrade}
                  activeOpacity={0.85}
                  className="bg-primary p-4 rounded-2xl items-center shadow-md shadow-primary/30 mb-8"
                >
                  <Text className="text-white font-poppins-bold text-base">
                    {editingTrade ? 'Update Trade Deal' : 'Book & Capture Trade Deal'}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Lifecycle Management Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={lifecycleModalVisible}
        onRequestClose={() => setLifecycleModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/60">
          <View className="bg-white rounded-t-3xl h-[80%] p-6">
            <View className="flex-row justify-between items-center mb-3">
              <View>
                <Text className="text-xl font-poppins-bold text-slate-900">ETRM Lifecycle Engine</Text>
                <Text className="text-slate-400 font-poppins-medium text-xs">Deal #{selectedTrade?.id} • {selectedTrade?.product}</Text>
              </View>
              <TouchableOpacity onPress={() => setLifecycleModalVisible(false)}>
                <Ionicons name="close" size={24} color="#64748B" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Step 1: Risk & Credit Approval */}
              <View className={`mb-4 p-4 rounded-2xl border ${selectedTrade?.status !== 'CAPTURED' ? 'bg-slate-50 border-slate-100' : 'bg-white border-primary shadow-sm'}`}>
                <View className="flex-row items-center mb-1">
                  <View className={`w-6 h-6 rounded-full items-center justify-center mr-2 ${selectedTrade?.status !== 'CAPTURED' ? 'bg-emerald-500' : 'bg-primary'}`}>
                    <Ionicons name={selectedTrade?.status !== 'CAPTURED' ? 'checkmark' : 'shield-checkmark'} size={14} color="white" />
                  </View>
                  <Text className="text-slate-900 font-poppins-bold text-sm">1. Middle Office Credit & Risk Check</Text>
                </View>
                <Text className="text-slate-500 text-xs font-poppins-medium mb-2.5">
                  Counterparty Rating: <Text className="font-poppins-bold text-slate-800">AA- (Investment Grade)</Text> • Credit Line: <Text className="font-poppins-bold text-slate-800">$5,000,000</Text>
                </Text>
                {selectedTrade?.status === 'CAPTURED' && (
                  <TouchableOpacity 
                    onPress={() => selectedTrade && handleApprove(selectedTrade)}
                    className="bg-primary py-2.5 rounded-xl items-center"
                  >
                    <Text className="text-white font-poppins-bold text-xs">Approve Credit & Limits</Text>
                  </TouchableOpacity>
                )}
                {selectedTrade?.status !== 'CAPTURED' && (
                  <Text className="text-emerald-700 font-poppins-semibold text-xs">✓ Risk Approved by Middle Office</Text>
                )}
              </View>

              {/* Step 2: Scheduling & Logistics */}
              <View className={`mb-4 p-4 rounded-2xl border ${
                ['CAPTURED', 'APPROVED'].includes(selectedTrade?.status || '') ? 'bg-white border-slate-100' : 
                selectedTrade?.status === 'SCHEDULED' ? 'bg-white border-amber-500 shadow-sm' : 'bg-slate-50 border-slate-100'
              }`}>
                <View className="flex-row items-center mb-1">
                  <View className={`w-6 h-6 rounded-full items-center justify-center mr-2 ${
                    ['CAPTURED', 'APPROVED'].includes(selectedTrade?.status || '') ? 'bg-slate-200' : 
                    selectedTrade?.status === 'SCHEDULED' ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}>
                    <Ionicons name={['CAPTURED', 'APPROVED', 'SCHEDULED'].includes(selectedTrade?.status || '') ? 'navigate' : 'checkmark'} size={14} color="white" />
                  </View>
                  <Text className="text-slate-900 font-poppins-bold text-sm">2. Logistics & Delivery Hub Nomination</Text>
                </View>
                <Text className="text-slate-500 text-xs font-poppins-medium mb-2.5">
                  Nominate transport method and primary pipeline or marine delivery hub.
                </Text>
                
                {selectedTrade?.status === 'APPROVED' && (
                  <View>
                    <View className="flex-row mb-2.5">
                      {TRANSPORT_MODES.map((m) => (
                        <TouchableOpacity
                          key={m.value}
                          onPress={() => setTransportMode(m.value)}
                          className={`flex-1 p-2 rounded-xl mr-2 items-center border ${
                            transportMode === m.value ? 'bg-amber-500 border-amber-500' : 'bg-white border-slate-200'
                          }`}
                        >
                          <Text className={`text-[10px] font-poppins-bold ${transportMode === m.value ? 'text-white' : 'text-slate-600'}`}>
                            {m.label}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    {transportMode === 'VESSEL' && (
                      <TextInput
                        className="bg-slate-50 p-2 rounded-xl font-poppins-medium text-xs mb-2.5 border border-slate-100"
                        placeholder="Vessel Name (e.g. Pacific Voyager)"
                        placeholderTextColor="#94A3B8"
                        value={vesselName}
                        onChangeText={setVesselName}
                      />
                    )}
                    <TouchableOpacity 
                      onPress={() => selectedTrade && handleSchedule(selectedTrade)}
                      className="bg-amber-500 py-2.5 rounded-xl items-center"
                    >
                      <Text className="text-white font-poppins-bold text-xs">Confirm Logistics Schedule</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {['SCHEDULED', 'ACTUALIZED', 'INVOICED'].includes(selectedTrade?.status || '') && (
                  <Text className="text-slate-800 font-poppins-semibold text-xs">
                    Nominated: <Text className="font-poppins-bold text-primary">{selectedTrade?.transport_mode}</Text> at <Text className="font-poppins-bold">{selectedTrade?.delivery_hub}</Text> {selectedTrade?.vessel_name ? `(${selectedTrade.vessel_name})` : ''}
                  </Text>
                )}
              </View>

              {/* Step 3: Actuals & Tolerance Calculation */}
              <View className={`mb-4 p-4 rounded-2xl border ${
                ['CAPTURED', 'APPROVED', 'SCHEDULED'].includes(selectedTrade?.status || '') ? 'bg-white border-slate-100' : 
                selectedTrade?.status === 'ACTUALIZED' ? 'bg-white border-emerald-500 shadow-sm' : 'bg-slate-50 border-slate-100'
              }`}>
                <View className="flex-row items-center mb-1">
                  <View className={`w-6 h-6 rounded-full items-center justify-center mr-2 ${
                    ['CAPTURED', 'APPROVED', 'SCHEDULED'].includes(selectedTrade?.status || '') ? 'bg-slate-200' : 
                    selectedTrade?.status === 'ACTUALIZED' ? 'bg-emerald-500' : 'bg-emerald-500'
                  }`}>
                    <Ionicons name={['ACTUALIZED', 'INVOICED'].includes(selectedTrade?.status || '') ? 'checkmark' : 'calculator'} size={14} color="white" />
                  </View>
                  <Text className="text-slate-900 font-poppins-bold text-sm">3. Actualization & Volume Variance Tolerance</Text>
                </View>
                <Text className="text-slate-500 text-xs font-poppins-medium mb-2.5">
                  Verify meter tickets against contracted volume and calculate accruals.
                </Text>
                
                {selectedTrade?.status === 'SCHEDULED' && (
                  <View>
                    <TextInput
                      className="bg-slate-50 p-2.5 rounded-xl font-poppins-medium text-xs mb-2.5 border border-slate-100"
                      placeholder={`Actual Volume Delivered (${selectedTrade.unit})`}
                      placeholderTextColor="#94A3B8"
                      keyboardType="numeric"
                      value={actualQuantity}
                      onChangeText={setActualQuantity}
                    />
                    <TouchableOpacity 
                      onPress={() => selectedTrade && handleActualize(selectedTrade)}
                      className="bg-emerald-600 py-2.5 rounded-xl items-center"
                    >
                      <Text className="text-white font-poppins-bold text-xs">Capture Meter Actuals & Accrual</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {['ACTUALIZED', 'INVOICED'].includes(selectedTrade?.status || '') && (
                  <View className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                    <Text className="text-slate-800 font-poppins-bold text-xs">
                      Delivered Meter: {Number(selectedTrade?.actual_quantity ?? selectedTrade?.quantity).toLocaleString()} {selectedTrade?.unit}
                    </Text>
                    <Text className="text-emerald-700 font-poppins-semibold text-xs mt-0.5">
                      Tolerance Variance: {selectedTrade?.tolerance_variance ?? 0}% (Within Operational Limits ✓)
                    </Text>
                    <Text className="text-slate-700 font-poppins-bold text-xs mt-0.5">
                      Accrual Valuation: ${Number(selectedTrade?.accrual_amount || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Text>
                  </View>
                )}
              </View>

              {/* Step 4: Settlement & Commercial Invoice */}
              <View className={`mb-8 p-4 rounded-2xl border ${
                selectedTrade?.status === 'INVOICED' ? 'bg-slate-50 border-slate-100' : 
                selectedTrade?.status === 'ACTUALIZED' ? 'bg-white border-slate-900 shadow-sm' : 'bg-white border-slate-100'
              }`}>
                <View className="flex-row items-center mb-1">
                  <View className={`w-6 h-6 rounded-full items-center justify-center mr-2 ${
                    selectedTrade?.status === 'INVOICED' ? 'bg-emerald-500' : 'bg-slate-200'
                  }`}>
                    <Ionicons name={selectedTrade?.status === 'INVOICED' ? 'checkmark' : 'receipt'} size={14} color="white" />
                  </View>
                  <Text className="text-slate-900 font-poppins-bold text-sm">4. Back Office Settlement & Invoicing</Text>
                </View>
                <Text className="text-slate-500 text-xs font-poppins-medium mb-2.5">
                  Issue final AP/AR document, generate netting entries, and reconcile ledger.
                </Text>
                
                {selectedTrade?.status === 'ACTUALIZED' && (
                  <TouchableOpacity 
                    onPress={() => selectedTrade && handleInvoice(selectedTrade)}
                    className="bg-slate-900 py-2.5 rounded-xl items-center"
                  >
                    <Text className="text-white font-poppins-bold text-xs">Issue Final Commercial Invoice</Text>
                  </TouchableOpacity>
                )}
                {selectedTrade?.status === 'INVOICED' && (
                  <View className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                    <View className="flex-row justify-between items-center mb-2">
                      <Text className="text-white font-poppins-bold text-sm">COMMERCIAL INVOICE</Text>
                      <View className="bg-emerald-500 px-2 py-0.5 rounded-full">
                        <Text className="text-white text-[9px] font-poppins-bold uppercase">SETTLED ✓</Text>
                      </View>
                    </View>
                    <Text className="text-slate-300 font-poppins-medium text-xs">Invoice Ref: {selectedTrade?.invoice_number}</Text>
                    <Text className="text-slate-300 font-poppins-medium text-xs">Account: {selectedTrade?.invoice_type === 'AP' ? 'Accounts Payable (AP)' : 'Accounts Receivable (AR)'}</Text>
                    <Text className="text-slate-300 font-poppins-medium text-xs">Payment Terms: Net 30 Days (Due: {selectedTrade?.payment_due_date || 'Net 30'})</Text>
                    <View className="pt-2 mt-2 border-t border-slate-800 flex-row justify-between items-center">
                      <Text className="text-slate-400 font-poppins-medium text-xs">Total Settlement Cashflow</Text>
                      <Text className="text-emerald-400 font-poppins-bold text-sm">
                        ${Number(selectedTrade?.accrual_amount || (Number(selectedTrade?.quantity) * Number(selectedTrade?.price))).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default SimulatorScreen;
