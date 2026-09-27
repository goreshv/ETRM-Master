import React, { useState, useEffect } from 'react';
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
import { LinearGradient } from 'expo-linear-gradient';

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

const STATUS_COLORS = {
  CAPTURED: '#3B82F6', // Blue
  APPROVED: '#8B5CF6', // Purple
  SCHEDULED: '#F59E0B', // Amber
  ACTUALIZED: '#10B981', // Green
  INVOICED: '#6B7280', // Gray
};

const TRANSPORT_MODES: { label: string; value: Trade['transport_mode'] }[] = [
  { label: '🚢 Vessel', value: 'VESSEL' },
  { label: '🚂 Train', value: 'TRAIN' },
  { label: '🚚 Truck', value: 'TRUCK' },
];

// Initial mock market prices
const INITIAL_MARKET_PRICES = {
  OIL: 75.50,
  GAS: 3.25,
  POWER: 45.00
};

const SimulatorScreen = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [lifecycleModalVisible, setLifecycleModalVisible] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);
  const [editingTrade, setEditingTrade] = useState<Trade | null>(null);
  const [marketPrices, setMarketPrices] = useState(INITIAL_MARKET_PRICES);

  // Form states
  const [company, setCompany] = useState('');
  const [counterparty, setCounterparty] = useState('');
  const [product, setProduct] = useState<Trade['product']>('OIL');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState<Trade['unit']>('BBL');

  // Lifecycle states
  const [transportMode, setTransportMode] = useState<Trade['transport_mode']>('TRUCK');
  const [vesselName, setVesselName] = useState('');
  const [actualQuantity, setActualQuantity] = useState('');

  useEffect(() => {
    loadTrades();
  }, []);

  const simulatePriceMovement = () => {
    setMarketPrices({
      OIL: INITIAL_MARKET_PRICES.OIL + (Math.random() * 10 - 5),
      GAS: INITIAL_MARKET_PRICES.GAS + (Math.random() * 0.5 - 0.25),
      POWER: INITIAL_MARKET_PRICES.POWER + (Math.random() * 8 - 4)
    });
  };

  const calculatePnL = (trade: Trade) => {
    const tradePrice = Number(trade.price) || 0;
    const tradeQty = Number(trade.quantity) || 0;
    const currentPrice = marketPrices[trade.product] || tradePrice;
    const isBuyer = !trade.company.toLowerCase().includes('sell');
    
    // For unrealized PnL (Open trades)
    if (['CAPTURED', 'APPROVED', 'SCHEDULED'].includes(trade.status || '')) {
      const priceDiff = isBuyer ? (currentPrice - tradePrice) : (tradePrice - currentPrice);
      return {
        type: 'Unrealized',
        value: priceDiff * tradeQty
      };
    }
    
    // For realized PnL (Closed trades)
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
    setStartDate(new Date().toISOString().split('T')[0]);
    setEndDate(new Date().toISOString().split('T')[0]);
    setPrice('');
    setQuantity('');
    setUnit('BBL');
    setEditingTrade(null);
  };

  const handleSaveTrade = async () => {
    if (!company.trim() || !counterparty.trim() || !price || !quantity) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    const parsedPrice = parseFloat(price);
    const parsedQuantity = parseFloat(quantity);

    if (isNaN(parsedPrice) || parsedPrice <= 0 || isNaN(parsedQuantity) || parsedQuantity <= 0) {
      Alert.alert('Error', 'Please enter a valid positive price and quantity');
      return;
    }

    const tradeData: Trade = {
      company: company.trim(),
      counterparty: counterparty.trim(),
      product,
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
      Alert.alert('Success', `Trade ${editingTrade ? 'updated' : 'captured'} successfully! Status: ${result.status || 'CAPTURED'}`);
    } else {
      Alert.alert('Error', 'Failed to save trade.');
    }
  };

  const handleApprove = async (trade: Trade) => {
    if (!trade.id) return;
    const result = await tradeService.updateTrade(trade.id, { status: 'APPROVED' });
    if (result) {
      Alert.alert('Trade Approved', 'The trade has been approved by the Middle Office.');
      loadTrades(false);
      setLifecycleModalVisible(false);
    }
  };

  const handleSchedule = async (trade: Trade) => {
    if (!trade.id) return;
    if (transportMode === 'VESSEL' && !vesselName.trim()) {
      Alert.alert('Error', 'Please provide a vessel name.');
      return;
    }
    const result = await tradeService.updateTrade(trade.id, { 
      status: 'SCHEDULED',
      transport_mode: transportMode,
      vessel_name: transportMode === 'VESSEL' ? vesselName.trim() : ''
    });
    if (result) {
      Alert.alert('Scheduled', `Trade scheduled via ${transportMode}. Position updated.`);
      loadTrades(false);
      setLifecycleModalVisible(false);
    }
  };

  const handleActualize = async (trade: Trade) => {
    if (!trade.id) return;
    const qty = parseFloat(actualQuantity);
    if (isNaN(qty) || qty <= 0) {
      Alert.alert('Error', 'Please enter a valid positive actual quantity.');
      return;
    }
    const tradePrice = Number(trade.price) || 0;
    const accrual = qty * tradePrice;
    const result = await tradeService.updateTrade(trade.id, { 
      status: 'ACTUALIZED',
      actual_quantity: qty,
      accrual_amount: accrual
    });
    if (result) {
      Alert.alert('Actualized', `Actuals captured: ${qty} ${trade.unit}. Accrual: $${accrual.toFixed(2)}`);
      loadTrades(false);
      setLifecycleModalVisible(false);
    }
  };

  const handleInvoice = async (trade: Trade) => {
    if (!trade.id) return;
    const invType = trade.company.toLowerCase().includes('sell') ? 'AR' : 'AP';
    const invNum = `INV-${trade.id}-${Math.floor(100 + Math.random() * 900)}`;
    const result = await tradeService.updateTrade(trade.id, { 
      status: 'INVOICED',
      invoice_type: invType,
      invoice_number: invNum
    });
    if (result) {
      Alert.alert('Invoiced', `Final invoice generated: ${invNum} (${invType})`);
      loadTrades(false);
      setLifecycleModalVisible(false);
    }
  };

  const handleOpenLifecycle = (trade: Trade) => {
    setSelectedTrade(trade);
    setVesselName(trade.vessel_name || '');
    setTransportMode(trade.transport_mode || 'TRUCK');
    setActualQuantity((trade.actual_quantity ?? trade.quantity ?? '').toString());
    setLifecycleModalVisible(true);
  };

  const handleEdit = (trade: Trade) => {
    setEditingTrade(trade);
    setCompany(trade.company);
    setCounterparty(trade.counterparty);
    setProduct(trade.product);
    setStartDate(trade.start_date);
    setEndDate(trade.end_date);
    setPrice(trade.price.toString());
    setQuantity(trade.quantity.toString());
    setUnit(trade.unit);
    setModalVisible(true);
  };

  const handleDelete = (id: number) => {
    Alert.alert(
      'Delete Trade',
      'Are you sure you want to delete this trade?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: async () => {
            const success = await tradeService.deleteTrade(id);
            if (success) loadTrades();
          }
        }
      ]
    );
  };

  const renderTradeItem = ({ item }: { item: Trade }) => {
    const pnl = calculatePnL(item);
    const pnlColor = pnl.value >= 0 ? 'text-emerald-600' : 'text-rose-600';
    const pnlBg = pnl.value >= 0 ? 'bg-emerald-50' : 'bg-rose-50';

    return (
      <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-slate-100">
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center">
            <View 
              className="w-10 h-10 rounded-full items-center justify-center mr-3"
              style={{ backgroundColor: `${STATUS_COLORS[item.status || 'CAPTURED']}20` }}
            >
              <Ionicons 
                name={item.product === 'OIL' ? 'water' : item.product === 'GAS' ? 'flame' : 'flash'} 
                size={20} 
                color={STATUS_COLORS[item.status || 'CAPTURED']} 
              />
            </View>
            <View>
              <Text className="text-slate-900 font-poppins-bold text-base">{item.product} Trade</Text>
              <Text className="text-slate-400 font-poppins-medium text-xs">ID: #{item.id}</Text>
            </View>
          </View>
          <View className="items-end">
            <View 
              className="px-3 py-1 rounded-full mb-1"
              style={{ backgroundColor: `${STATUS_COLORS[item.status || 'CAPTURED']}20` }}
            >
              <Text 
                className="text-[10px] font-poppins-bold"
                style={{ color: STATUS_COLORS[item.status || 'CAPTURED'] }}
              >
                {item.status}
              </Text>
            </View>
            <View className={`${pnlBg} px-2 py-0.5 rounded-lg`}>
              <Text className={`${pnlColor} text-[10px] font-poppins-bold`}>
                {pnl.type}: ${Math.abs(pnl.value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between mb-4">
          <View>
            <Text className="text-slate-400 text-[10px] font-poppins-medium uppercase">Buyer (Company)</Text>
            <Text className="text-slate-900 font-poppins-semibold">{item.company}</Text>
          </View>
          <View className="items-end">
            <Text className="text-slate-400 text-[10px] font-poppins-medium uppercase">Seller (Counterparty)</Text>
            <Text className="text-slate-900 font-poppins-semibold">{item.counterparty}</Text>
          </View>
        </View>

        <View className="flex-row justify-between mb-4 bg-slate-50 p-3 rounded-xl">
          <View>
            <Text className="text-slate-400 text-[10px] font-poppins-medium uppercase">Price</Text>
            <Text className="text-primary font-poppins-bold text-lg">${Number(item.price).toFixed(2)}/{item.unit}</Text>
          </View>
          <View className="items-end">
            <Text className="text-slate-400 text-[10px] font-poppins-medium uppercase">Quantity</Text>
            <Text className="text-slate-900 font-poppins-bold text-lg">{Number(item.quantity).toLocaleString()} {item.unit}</Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center border-t border-slate-50 pt-3">
          <TouchableOpacity 
            onPress={() => handleOpenLifecycle(item)}
            className="bg-blue-50 px-3 py-2 rounded-xl flex-row items-center"
          >
            <Ionicons name="refresh-circle" size={18} color="#1E40FF" />
            <Text className="text-primary font-poppins-bold text-xs ml-1">Manage Lifecycle</Text>
          </TouchableOpacity>
          <View className="flex-row">
            <TouchableOpacity onPress={() => handleEdit(item)} className="mr-3">
              <Ionicons name="create-outline" size={20} color="#3B82F6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => item.id && handleDelete(item.id)}>
              <Ionicons name="trash-outline" size={20} color="#EF4444" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const { totalUnrealized, totalRealized } = getPortfolioSummary();

  return (
    <ScreenContainer scrollable={false}>
      <View className="flex-row items-center justify-between mt-2 mb-4">
        <View>
          <Text className="text-3xl font-poppins-bold text-slate-900">Trade Simulator</Text>
          <Text className="text-slate-400 font-poppins-medium text-sm">Practice ETRM Trade Lifecycle</Text>
        </View>
        <TouchableOpacity 
          onPress={() => { resetForm(); setModalVisible(true); }}
          className="w-12 h-12 bg-primary rounded-20 items-center justify-center shadow-lg shadow-primary/30"
        >
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Portfolio Summary Card */}
      <View className="bg-slate-900 p-5 rounded-3xl mb-6 shadow-xl shadow-slate-900/20">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white font-poppins-bold text-lg">Portfolio Summary</Text>
          <TouchableOpacity 
            onPress={simulatePriceMovement}
            className="bg-white/10 px-3 py-1.5 rounded-xl flex-row items-center"
          >
            <Ionicons name="refresh" size={16} color="white" />
            <Text className="text-white font-poppins-semibold text-[10px] ml-1">Market Move</Text>
          </TouchableOpacity>
        </View>
        
        <View className="flex-row justify-between">
          <View>
            <Text className="text-slate-400 text-[10px] font-poppins-semibold uppercase mb-1">Total Unrealized PnL</Text>
            <Text className={`text-xl font-poppins-bold ${totalUnrealized >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${totalUnrealized.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Text>
          </View>
          <View className="items-end">
            <Text className="text-slate-400 text-[10px] font-poppins-semibold uppercase mb-1">Total Realized PnL</Text>
            <Text className={`text-xl font-poppins-bold ${totalRealized >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${totalRealized.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Text>
          </View>
        </View>
      </View>

      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#1E40FF" />
          <Text className="mt-4 text-slate-400 font-poppins-medium">Loading trades...</Text>
        </View>
      ) : (
        <FlatList
          data={trades}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          renderItem={renderTradeItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <View className="flex-1 items-center justify-center mt-20 px-10">
              <View className="w-20 h-20 bg-slate-100 rounded-full items-center justify-center mb-4">
                <Ionicons name="document-text-outline" size={40} color="#CBD5E1" />
              </View>
              <Text className="text-slate-900 font-poppins-bold text-lg text-center">No trades yet</Text>
              <Text className="text-slate-400 font-poppins-medium text-center mt-2">
                Click the + button to create your first energy trade and practice the ETRM lifecycle.
              </Text>
            </View>
          )}
          refreshing={loading}
          onRefresh={() => loadTrades(true)}
        />
      )}

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
          <View className="flex-1 justify-end bg-black/50">
            <View className="bg-white rounded-t-3xl h-[85%] p-6">
              <View className="flex-row justify-between items-center mb-6">
                <Text className="text-2xl font-poppins-bold text-slate-900">
                  {editingTrade ? 'Edit Trade' : 'New Trade'}
                </Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Ionicons name="close" size={24} color="#64748B" />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                <Text className="text-slate-400 text-xs font-poppins-bold uppercase mb-2">Company (Buyer)</Text>
                <TextInput
                  className="bg-slate-50 p-4 rounded-xl font-poppins-medium mb-4 border border-slate-100"
                  placeholder="e.g. Shell Energy"
                  value={company}
                  onChangeText={setCompany}
                />

                <Text className="text-slate-400 text-xs font-poppins-bold uppercase mb-2">Counterparty (Seller)</Text>
                <TextInput
                  className="bg-slate-50 p-4 rounded-xl font-poppins-medium mb-4 border border-slate-100"
                  placeholder="e.g. BP Trading"
                  value={counterparty}
                  onChangeText={setCounterparty}
                />

                <Text className="text-slate-400 text-xs font-poppins-bold uppercase mb-2">Product</Text>
                <View className="flex-row mb-4">
                  {PRODUCTS.map((p) => (
                    <TouchableOpacity
                      key={p.value}
                      onPress={() => setProduct(p.value)}
                      className={`flex-1 p-3 rounded-xl mr-2 items-center border ${
                        product === p.value ? 'bg-primary border-primary' : 'bg-white border-slate-200'
                      }`}
                    >
                      <Text className={`text-[10px] font-poppins-bold ${product === p.value ? 'text-white' : 'text-slate-500'}`}>
                        {p.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View className="flex-row justify-between">
                  <View className="flex-1 mr-2">
                    <Text className="text-slate-400 text-xs font-poppins-bold uppercase mb-2">Start Date</Text>
                    <TextInput
                      className="bg-slate-50 p-4 rounded-xl font-poppins-medium mb-4 border border-slate-100"
                      placeholder="YYYY-MM-DD"
                      value={startDate}
                      onChangeText={setStartDate}
                    />
                  </View>
                  <View className="flex-1 ml-2">
                    <Text className="text-slate-400 text-xs font-poppins-bold uppercase mb-2">End Date</Text>
                    <TextInput
                      className="bg-slate-50 p-4 rounded-xl font-poppins-medium mb-4 border border-slate-100"
                      placeholder="YYYY-MM-DD"
                      value={endDate}
                      onChangeText={setEndDate}
                    />
                  </View>
                </View>

                <View className="flex-row justify-between">
                  <View className="flex-1 mr-2">
                    <Text className="text-slate-400 text-xs font-poppins-bold uppercase mb-2">Price ($)</Text>
                    <TextInput
                      className="bg-slate-50 p-4 rounded-xl font-poppins-medium mb-4 border border-slate-100"
                      placeholder="0.00"
                      keyboardType="numeric"
                      value={price}
                      onChangeText={setPrice}
                    />
                  </View>
                  <View className="flex-1 ml-2">
                    <Text className="text-slate-400 text-xs font-poppins-bold uppercase mb-2">Quantity</Text>
                    <TextInput
                      className="bg-slate-50 p-4 rounded-xl font-poppins-medium mb-4 border border-slate-100"
                      placeholder="0.00"
                      keyboardType="numeric"
                      value={quantity}
                      onChangeText={setQuantity}
                    />
                  </View>
                </View>

                <Text className="text-slate-400 text-xs font-poppins-bold uppercase mb-2">Unit</Text>
                <View className="flex-row mb-6">
                  {UNITS.map((u) => (
                    <TouchableOpacity
                      key={u.value}
                      onPress={() => setUnit(u.value)}
                      className={`flex-1 p-3 rounded-xl mr-2 items-center border ${
                        unit === u.value ? 'bg-primary border-primary' : 'bg-white border-slate-200'
                      }`}
                    >
                      <Text className={`text-[10px] font-poppins-bold ${unit === u.value ? 'text-white' : 'text-slate-500'}`}>
                        {u.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <TouchableOpacity 
                  onPress={handleSaveTrade}
                  className="bg-primary p-5 rounded-2xl items-center shadow-lg shadow-primary/30 mb-10"
                >
                  <Text className="text-white font-poppins-bold text-lg">
                    {editingTrade ? 'Update Trade' : 'Confirm & Capture Trade'}
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
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl h-[70%] p-6">
            <View className="flex-row justify-between items-center mb-6">
              <View>
                <Text className="text-2xl font-poppins-bold text-slate-900">Trade Lifecycle</Text>
                <Text className="text-slate-400 font-poppins-medium text-sm">Next Step: {
                  selectedTrade?.status === 'CAPTURED' ? 'Approval' :
                  selectedTrade?.status === 'APPROVED' ? 'Scheduling' :
                  selectedTrade?.status === 'SCHEDULED' ? 'Actualization' :
                  selectedTrade?.status === 'ACTUALIZED' ? 'Invoicing' : 'Complete'
                }</Text>
              </View>
              <TouchableOpacity onPress={() => setLifecycleModalVisible(false)}>
                <Ionicons name="close" size={24} color="#64748B" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Step 1: Approval */}
              <View className={`mb-6 p-4 rounded-2xl border ${selectedTrade?.status !== 'CAPTURED' ? 'bg-slate-50 border-slate-100' : 'bg-white border-primary'}`}>
                <View className="flex-row items-center mb-2">
                  <View className={`w-6 h-6 rounded-full items-center justify-center mr-2 ${selectedTrade?.status !== 'CAPTURED' ? 'bg-green-500' : 'bg-primary'}`}>
                    <Ionicons name={selectedTrade?.status !== 'CAPTURED' ? 'checkmark' : 'lock-open-outline'} size={14} color="white" />
                  </View>
                  <Text className="text-slate-900 font-poppins-bold">1. Trade Approval</Text>
                </View>
                <Text className="text-slate-500 text-xs font-poppins-medium mb-3">Middle Office verifies the trade details and risk limits.</Text>
                {selectedTrade?.status === 'CAPTURED' && (
                  <TouchableOpacity 
                    onPress={() => selectedTrade && handleApprove(selectedTrade)}
                    className="bg-primary py-3 rounded-xl items-center"
                  >
                    <Text className="text-white font-poppins-bold text-xs">Approve Trade</Text>
                  </TouchableOpacity>
                )}
              </View>

              {/* Step 2: Scheduling */}
              <View className={`mb-6 p-4 rounded-2xl border ${
                ['CAPTURED', 'APPROVED'].includes(selectedTrade?.status || '') ? 'bg-white border-slate-100' : 
                selectedTrade?.status === 'SCHEDULED' ? 'bg-white border-primary' : 'bg-slate-50 border-slate-100'
              }`}>
                <View className="flex-row items-center mb-2">
                  <View className={`w-6 h-6 rounded-full items-center justify-center mr-2 ${
                    ['CAPTURED', 'APPROVED'].includes(selectedTrade?.status || '') ? 'bg-slate-200' : 
                    selectedTrade?.status === 'SCHEDULED' ? 'bg-amber-500' : 'bg-green-500'
                  }`}>
                    <Ionicons name={['CAPTURED', 'APPROVED', 'SCHEDULED'].includes(selectedTrade?.status || '') ? 'bus-outline' : 'checkmark'} size={14} color="white" />
                  </View>
                  <Text className="text-slate-900 font-poppins-bold">2. Scheduling & Logistics</Text>
                </View>
                <Text className="text-slate-500 text-xs font-poppins-medium mb-3">Nominate transportation mode and logistics details.</Text>
                
                {selectedTrade?.status === 'APPROVED' && (
                  <View>
                    <View className="flex-row mb-3">
                      {TRANSPORT_MODES.map((m) => (
                        <TouchableOpacity
                          key={m.value}
                          onPress={() => setTransportMode(m.value)}
                          className={`flex-1 p-2 rounded-xl mr-2 items-center border ${
                            transportMode === m.value ? 'bg-amber-500 border-amber-500' : 'bg-white border-slate-200'
                          }`}
                        >
                          <Text className={`text-[10px] font-poppins-bold ${transportMode === m.value ? 'text-white' : 'text-slate-500'}`}>
                            {m.label}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    {transportMode === 'VESSEL' && (
                      <TextInput
                        className="bg-slate-50 p-3 rounded-xl font-poppins-medium mb-3 border border-slate-100"
                        placeholder="Vessel Name (e.g. Energy Star)"
                        value={vesselName}
                        onChangeText={setVesselName}
                      />
                    )}
                    <TouchableOpacity 
                      onPress={() => selectedTrade && handleSchedule(selectedTrade)}
                      className="bg-amber-500 py-3 rounded-xl items-center"
                    >
                      <Text className="text-white font-poppins-bold text-xs">Confirm Schedule</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {['SCHEDULED', 'ACTUALIZED', 'INVOICED'].includes(selectedTrade?.status || '') && (
                  <Text className="text-primary font-poppins-bold text-xs">Transport: {selectedTrade?.transport_mode} {selectedTrade?.vessel_name ? `(${selectedTrade.vessel_name})` : ''}</Text>
                )}
              </View>

              {/* Step 3: Actuals & Accruals */}
              <View className={`mb-6 p-4 rounded-2xl border ${
                ['CAPTURED', 'APPROVED', 'SCHEDULED'].includes(selectedTrade?.status || '') ? 'bg-white border-slate-100' : 
                selectedTrade?.status === 'ACTUALIZED' ? 'bg-white border-primary' : 'bg-slate-50 border-slate-100'
              }`}>
                <View className="flex-row items-center mb-2">
                  <View className={`w-6 h-6 rounded-full items-center justify-center mr-2 ${
                    ['CAPTURED', 'APPROVED', 'SCHEDULED'].includes(selectedTrade?.status || '') ? 'bg-slate-200' : 
                    selectedTrade?.status === 'ACTUALIZED' ? 'bg-emerald-500' : 'bg-green-500'
                  }`}>
                    <Ionicons name={['ACTUALIZED', 'INVOICED'].includes(selectedTrade?.status || '') ? 'checkmark' : 'calculator-outline'} size={14} color="white" />
                  </View>
                  <Text className="text-slate-900 font-poppins-bold">3. Actuals & Accruals</Text>
                </View>
                <Text className="text-slate-500 text-xs font-poppins-medium mb-3">Capture real flow volumes and calculate estimated P&L.</Text>
                
                {selectedTrade?.status === 'SCHEDULED' && (
                  <View>
                    <TextInput
                      className="bg-slate-50 p-3 rounded-xl font-poppins-medium mb-3 border border-slate-100"
                      placeholder="Actual Quantity Delivered"
                      keyboardType="numeric"
                      value={actualQuantity}
                      onChangeText={setActualQuantity}
                    />
                    <TouchableOpacity 
                      onPress={() => selectedTrade && handleActualize(selectedTrade)}
                      className="bg-emerald-500 py-3 rounded-xl items-center"
                    >
                      <Text className="text-white font-poppins-bold text-xs">Capture Actuals</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {['ACTUALIZED', 'INVOICED'].includes(selectedTrade?.status || '') && (
                  <View>
                    <Text className="text-primary font-poppins-bold text-xs">
                      Actual Qty: {Number(selectedTrade?.actual_quantity ?? selectedTrade?.quantity).toLocaleString()} {selectedTrade?.unit}
                    </Text>
                    <Text className="text-emerald-600 font-poppins-bold text-xs">
                      Accrual: ${Number(selectedTrade?.accrual_amount || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Text>
                  </View>
                )}
              </View>

              {/* Step 4: Invoicing */}
              <View className={`mb-10 p-4 rounded-2xl border ${
                selectedTrade?.status === 'INVOICED' ? 'bg-slate-50 border-slate-100' : 
                selectedTrade?.status === 'ACTUALIZED' ? 'bg-white border-primary' : 'bg-white border-slate-100'
              }`}>
                <View className="flex-row items-center mb-2">
                  <View className={`w-6 h-6 rounded-full items-center justify-center mr-2 ${
                    selectedTrade?.status === 'INVOICED' ? 'bg-green-500' : 'bg-slate-200'
                  }`}>
                    <Ionicons name={selectedTrade?.status === 'INVOICED' ? 'checkmark' : 'receipt-outline'} size={14} color="white" />
                  </View>
                  <Text className="text-slate-900 font-poppins-bold">4. Final Invoicing (AP/AR)</Text>
                </View>
                <Text className="text-slate-500 text-xs font-poppins-medium mb-3">Generate final financial documents for settlement.</Text>
                
                {selectedTrade?.status === 'ACTUALIZED' && (
                  <TouchableOpacity 
                    onPress={() => selectedTrade && handleInvoice(selectedTrade)}
                    className="bg-slate-900 py-3 rounded-xl items-center"
                  >
                    <Text className="text-white font-poppins-bold text-xs">Generate Invoice</Text>
                  </TouchableOpacity>
                )}
                {selectedTrade?.status === 'INVOICED' && (
                  <View>
                    <Text className="text-primary font-poppins-bold text-xs">Invoice: {selectedTrade?.invoice_number}</Text>
                    <Text className="text-slate-600 font-poppins-bold text-xs">Type: {selectedTrade?.invoice_type === 'AP' ? 'Accounts Payable' : 'Accounts Receivable'}</Text>
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
