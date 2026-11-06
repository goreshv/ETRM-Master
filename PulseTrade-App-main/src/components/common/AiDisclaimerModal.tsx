import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AI_DISCLAIMER_KEY = '@etrm_ai_disclaimer_acknowledged';

interface AiDisclaimerModalProps {
  visible?: boolean;
  onClose?: () => void;
  forceShow?: boolean;
}

const AiDisclaimerModal: React.FC<AiDisclaimerModalProps> = ({
  visible: propVisible,
  onClose: propOnClose,
  forceShow = false,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    if (forceShow) {
      setModalVisible(true);
      return;
    }

    if (propVisible !== undefined) {
      setModalVisible(propVisible);
      return;
    }

    // Check if acknowledged on startup
    const checkAcknowledgement = async () => {
      try {
        const acknowledged = await AsyncStorage.getItem(AI_DISCLAIMER_KEY);
        if (!acknowledged) {
          setModalVisible(true);
        }
      } catch (e) {
        setModalVisible(true);
      }
    };

    checkAcknowledgement();
  }, [forceShow, propVisible]);

  const handleAcknowledge = async () => {
    try {
      if (dontShowAgain || !forceShow) {
        await AsyncStorage.setItem(AI_DISCLAIMER_KEY, 'true');
      }
    } catch (e) {
      console.warn('Could not save disclaimer preference:', e);
    }
    setModalVisible(false);
    if (propOnClose) {
      propOnClose();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleAcknowledge}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header Icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="shield-checkmark" size={36} color="#1E40FF" />
          </View>

          {/* Title */}
          <Text style={styles.title}>Important Notice</Text>
          <Text style={styles.subtitle}>Educational AI-Generated Content</Text>

          {/* Scrollable content */}
          <ScrollView
            style={styles.scrollArea}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.highlightBox}>
              <Ionicons name="sparkles" size={20} color="#1E40FF" style={{ marginRight: 8, marginTop: 2 }} />
              <Text style={styles.highlightText}>
                All learning materials, curriculum lessons, market scenarios, quizzes, and simulation data in this app are entirely <Text style={styles.boldText}>AI-generated</Text> for educational, training, and simulation purposes.
              </Text>
            </View>

            <View style={styles.section}>
              <View style={styles.bulletRow}>
                <Ionicons name="checkmark-circle" size={18} color="#10B981" style={styles.bulletIcon} />
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>No Organisation Data:</Text> We have not used, accessed, or reproduced any proprietary, private, or confidential data from any company, trading firm, or organization.
                </Text>
              </View>

              <View style={styles.bulletRow}>
                <Ionicons name="checkmark-circle" size={18} color="#10B981" style={styles.bulletIcon} />
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Fictional Simulations:</Text> All counterparty names, trade volumes, prices, pipeline nominations, and settlement invoices in the Trade Simulator are synthetic scenarios designed to teach real-world ETRM workflows.
                </Text>
              </View>

              <View style={styles.bulletRow}>
                <Ionicons name="checkmark-circle" size={18} color="#10B981" style={styles.bulletIcon} />
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Purely Academic:</Text> This application is built solely as an interactive career and educational guide for energy trading, risk management, and market operations.
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* Toggle checkbox */}
          <TouchableOpacity
            style={styles.checkboxRow}
            activeOpacity={0.7}
            onPress={() => setDontShowAgain(!dontShowAgain)}
          >
            <View style={[styles.checkbox, dontShowAgain && styles.checkboxActive]}>
              {dontShowAgain && <Ionicons name="checkmark" size={14} color="#FFFFFF" />}
            </View>
            <Text style={styles.checkboxLabel}>Do not show this notice on startup</Text>
          </TouchableOpacity>

          {/* Action button */}
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.85}
            onPress={handleAcknowledge}
          >
            <Text style={styles.confirmButtonText}>I Understand & Proceed</Text>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" style={{ marginLeft: 6 }} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 24,
    width: '100%',
    maxHeight: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 10,
    alignItems: 'center',
  },
  iconContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#0F172A',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#64748B',
    marginBottom: 16,
    textAlign: 'center',
  },
  scrollArea: {
    width: '100%',
    marginVertical: 4,
  },
  highlightBox: {
    flexDirection: 'row',
    backgroundColor: '#F0F7FF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  highlightText: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#1E3A8A',
    lineHeight: 20,
  },
  section: {
    marginBottom: 12,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bulletIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 12.5,
    fontFamily: 'Poppins-Regular',
    color: '#334155',
    lineHeight: 19,
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    color: '#0F172A',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
    paddingHorizontal: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#94A3B8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#F8FAFC',
  },
  checkboxActive: {
    backgroundColor: '#1E40FF',
    borderColor: '#1E40FF',
  },
  checkboxLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#475569',
  },
  confirmButton: {
    flexDirection: 'row',
    backgroundColor: '#1E40FF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 18,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1E40FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});

export default AiDisclaimerModal;
