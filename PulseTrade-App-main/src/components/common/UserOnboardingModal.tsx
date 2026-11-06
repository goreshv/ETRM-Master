import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userService, UserProfile } from '../../services/userService';

interface UserOnboardingModalProps {
  visible?: boolean;
  onUserSaved?: (user: UserProfile) => void;
  onClose?: () => void;
}

const ROLES = [
  'Junior Trader',
  'Risk Analyst',
  'Operations Specialist',
  'ETRM Consultant',
  'Energy Student',
  'Portfolio Manager'
];

const UserOnboardingModal: React.FC<UserOnboardingModalProps> = ({
  visible: propVisible,
  onUserSaved,
  onClose,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState(ROLES[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (propVisible !== undefined) {
      setModalVisible(propVisible);
      return;
    }

    // Check if user has already entered their name on startup
    const checkUser = async () => {
      const user = await userService.getLocalUser();
      if (!user || !user.name || !user.name.trim()) {
        setModalVisible(true);
      }
    };

    checkUser();
  }, [propVisible]);

  const handleSubmit = async () => {
    if (!name.trim()) {
      Alert.alert('Name Required', 'Please enter your name to proceed.');
      return;
    }

    setLoading(true);
    try {
      const user = await userService.registerUser(name.trim(), selectedRole);
      setModalVisible(false);
      if (onUserSaved) {
        onUserSaved(user);
      }
      if (onClose) {
        onClose();
      }
    } catch (e) {
      console.warn('Error during user registration:', e);
      setModalVisible(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Ionicons name="person-add" size={32} color="#1E40FF" />
          </View>

          <Text style={styles.title}>Welcome to ETRM Master ⚡️</Text>
          <Text style={styles.subtitle}>
            Enter your name to personalize your learning journey and connect with the energy trading community.
          </Text>

          {/* Name Input */}
          <Text style={styles.inputLabel}>YOUR FULL NAME</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. Alex Morgan"
            placeholderTextColor="#94A3B8"
            value={name}
            onChangeText={setName}
            autoFocus={true}
          />

          {/* Role Picker */}
          <Text style={styles.inputLabel}>YOUR ROLE / INTEREST</Text>
          <View style={styles.roleContainer}>
            {ROLES.map((r) => {
              const isSelected = selectedRole === r;
              return (
                <TouchableOpacity
                  key={r}
                  onPress={() => setSelectedRole(r)}
                  style={[
                    styles.roleChip,
                    isSelected && styles.roleChipActive
                  ]}
                >
                  <Text
                    style={[
                      styles.roleChipText,
                      isSelected && styles.roleChipTextActive
                    ]}
                  >
                    {r}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            style={styles.submitBtn}
            activeOpacity={0.85}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.submitBtnText}>
              {loading ? 'Registering...' : 'Start Learning & Simulating'}
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" style={{ marginLeft: 6 }} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 8,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: '#94A3B8',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  roleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 20,
    width: '100%',
  },
  roleChip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  roleChipActive: {
    backgroundColor: '#1E40FF',
    borderColor: '#1E40FF',
  },
  roleChipText: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#475569',
  },
  roleChipTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
  },
  submitBtn: {
    flexDirection: 'row',
    backgroundColor: '#1E40FF',
    borderRadius: 16,
    paddingVertical: 14,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1E40FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
});

export default UserOnboardingModal;
