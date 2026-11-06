import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { communityService, CommunityConcept } from '../../services/communityService';
import { userService } from '../../services/userService';

const CATEGORIES = [
  'Oil',
  'Natural Gas',
  'Power',
  'LNG',
  'Foundations',
  'Risk,Valuations & PnL',
  'Physical Markets',
  'Post Trade & Settlement',
  'Operations',
  'Compliance',
  'Master Data'
];

interface SubmitConceptModalProps {
  visible: boolean;
  onClose: () => void;
  onConceptSubmitted?: (concept: CommunityConcept) => void;
}

const SubmitConceptModal: React.FC<SubmitConceptModalProps> = ({
  visible,
  onClose,
  onConceptSubmitted,
}) => {
  const [authorName, setAuthorName] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [title, setTitle] = useState('');
  const [answer, setAnswer] = useState('');
  const [keyTakeaways, setKeyTakeaways] = useState('');
  const [example, setExample] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (visible) {
      // Pre-fill author name from stored profile
      userService.getLocalUser().then((user) => {
        if (user?.name) {
          setAuthorName(user.name);
        }
      });
    }
  }, [visible]);

  const resetForm = () => {
    setTitle('');
    setAnswer('');
    setKeyTakeaways('');
    setExample('');
  };

  const handleSubmit = async () => {
    if (!authorName.trim()) {
      Alert.alert('Name Required', 'Please provide your name so other users can see who contributed this content.');
      return;
    }
    if (!title.trim() || !answer.trim()) {
      Alert.alert('Incomplete Form', 'Please enter both the Question/Title and the Answer/Explanation.');
      return;
    }

    setSubmitting(true);
    try {
      const created = await communityService.submitConcept({
        author_name: authorName.trim(),
        category,
        title: title.trim(),
        answer: answer.trim(),
        key_takeaways: keyTakeaways.trim(),
        example: example.trim(),
        is_approved: true,
      });

      Alert.alert(
        'Concept Published! 🎉',
        `Thank you ${authorName.trim()}! Your topic "${title.trim()}" has been recorded in the community database and added directly to the Learning Center.`
      );

      resetForm();
      if (onConceptSubmitted) {
        onConceptSubmitted(created);
      }
      onClose();
    } catch (e: any) {
      Alert.alert('Submission Error', e?.message || 'Could not save concept.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        <View style={styles.sheet}>
          {/* Header */}
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.sheetTitle}>Share Knowledge & Q&A</Text>
              <Text style={styles.sheetSubtitle}>Collaborate and add your topic to the community curriculum</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={24} color="#64748B" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
            {/* Author Name */}
            <Text style={styles.label}>YOUR NAME (VISIBLE ON TOPIC CARD)</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Sarah Jenkins (Junior Gas Trader)"
              placeholderTextColor="#94A3B8"
              value={authorName}
              onChangeText={setAuthorName}
            />

            {/* Category Dropdown/Selector */}
            <Text style={styles.label}>SELECT COMMODITY OR DOMAIN</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
              {CATEGORIES.map((cat) => {
                const isSelected = category === cat;
                return (
                  <TouchableOpacity
                    key={cat}
                    onPress={() => setCategory(cat)}
                    style={[
                      styles.categoryChip,
                      isSelected && styles.categoryChipActive
                    ]}
                  >
                    <Text
                      style={[
                        styles.categoryChipText,
                        isSelected && styles.categoryChipTextActive
                      ]}
                    >
                      {cat}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Question / Title */}
            <Text style={styles.label}>CONCEPT QUESTION OR TOPIC TITLE</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. What is Spark Spread and Heat Rate in Power Trading?"
              placeholderTextColor="#94A3B8"
              value={title}
              onChangeText={setTitle}
            />

            {/* Detailed Answer */}
            <Text style={styles.label}>DETAILED ANSWER & EXPLANATION</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Explain the concept clearly, including market mechanisms, pricing formulas, or operational steps..."
              placeholderTextColor="#94A3B8"
              value={answer}
              onChangeText={setAnswer}
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
            />

            {/* Key Takeaways */}
            <Text style={styles.label}>KEY TAKEAWAYS / BULLET POINTS (OPTIONAL)</Text>
            <TextInput
              style={[styles.input, styles.textAreaSmall]}
              placeholder="• Point 1: Spark spread = Power Price - (Gas Price * Heat Rate)&#10;• Point 2: Measures gas-fired generation margin"
              placeholderTextColor="#94A3B8"
              value={keyTakeaways}
              onChangeText={setKeyTakeaways}
              multiline={true}
              numberOfLines={3}
              textAlignVertical="top"
            />

            {/* Example Scenario */}
            <Text style={styles.label}>PRACTICAL / REAL-WORLD EXAMPLE (OPTIONAL)</Text>
            <TextInput
              style={[styles.input, styles.textAreaSmall]}
              placeholder="A 500 MW combined-cycle plant running in PJM calculates a spark spread of $18/MWh..."
              placeholderTextColor="#94A3B8"
              value={example}
              onChangeText={setExample}
              multiline={true}
              numberOfLines={3}
              textAlignVertical="top"
            />

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.publishBtn}
              activeOpacity={0.85}
              onPress={handleSubmit}
              disabled={submitting}
            >
              {submitting ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="cloud-upload-outline" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
                  <Text style={styles.publishBtnText}>Publish to Learning Center</Text>
                </>
              )}
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '90%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  sheetTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#0F172A',
  },
  sheetSubtitle: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#64748B',
    marginTop: 1,
  },
  closeBtn: {
    padding: 6,
  },
  label: {
    fontSize: 9.5,
    fontFamily: 'Poppins-Bold',
    color: '#94A3B8',
    letterSpacing: 0.5,
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  textArea: {
    height: 110,
    paddingTop: 10,
  },
  textAreaSmall: {
    height: 75,
    paddingTop: 10,
  },
  categoryScroll: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  categoryChip: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: '#1E40FF',
    borderColor: '#1E40FF',
  },
  categoryChipText: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#475569',
  },
  categoryChipTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
  },
  publishBtn: {
    flexDirection: 'row',
    backgroundColor: '#1E40FF',
    borderRadius: 16,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#1E40FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  publishBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
});

export default SubmitConceptModal;
