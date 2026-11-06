import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenContainer from '../components/layout/ScreenContainer';
import { quizService, QuizQuestion } from '../services/quizService';

const { width } = Dimensions.get('window');

const QuizScreen = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryStatus, setCategoryStatus] = useState<{[key: string]: {unlocked: boolean, highScore: number, prevCategory: string | null}}>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadCategoryStatus();
  }, []);

  const loadCategoryStatus = async () => {
    const cats = quizService.getCategories();
    setCategories(cats);
    
    const status: {[key: string]: {unlocked: boolean, highScore: number, prevCategory: string | null}} = {};
    for (let i = 0; i < cats.length; i++) {
      const cat = cats[i];
      const unlocked = await quizService.isCategoryUnlocked(cat);
      const highScore = await quizService.getCategoryProgress(cat);
      const prevCategory = i > 0 ? cats[i - 1] : null;
      status[cat] = { unlocked, highScore, prevCategory };
    }
    setCategoryStatus(status);
  };

  useEffect(() => {
    if (quizStarted && selectedCategory) {
      setQuestions(quizService.getRandomQuestions(selectedCategory, 10));
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowResult(false);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  }, [quizStarted, selectedCategory]);

  useEffect(() => {
    if (questions.length > 0) {
      Animated.timing(progressAnim, {
        toValue: (currentQuestionIndex + 1) / questions.length,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [currentQuestionIndex, questions]);

  const handleOptionPress = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    const correct = index === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      const finalPercentage = Math.round((score / questions.length) * 100);
      if (selectedCategory) {
        await quizService.saveCategoryScore(selectedCategory, finalPercentage);
        await loadCategoryStatus(); // Refresh status to unlock next category if applicable
      }
      setShowResult(true);
    }
  };

  const resetQuiz = async () => {
    setQuizStarted(false);
    setSelectedCategory(null);
    setSelectedOption(null);
    setIsCorrect(null);
    await loadCategoryStatus();
  };

  const startQuizForCategory = (category: string) => {
    if (categoryStatus[category]?.unlocked) {
      setSelectedCategory(category);
      setQuizStarted(true);
    }
  };

  const handleResetProgress = () => {
    Alert.alert(
      'Reset All Quiz Progress?',
      'This will reset your scores back to 0% and lock subsequent sections until you score ≥60% on the prerequisite.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Reset Progress', 
          style: 'destructive', 
          onPress: async () => {
            await quizService.resetAllProgress();
            await loadCategoryStatus();
          } 
        }
      ]
    );
  };

  if (!quizStarted) {
    const unlockedCount = categories.filter(c => categoryStatus[c]?.unlocked).length;

    return (
      <ScreenContainer scrollable={false}>
        <View className="mt-2 mb-3 flex-row items-center justify-between">
          <View className="flex-1 mr-2">
            <Text className="text-3xl font-poppins-bold text-slate-900">Quiz Center</Text>
            <Text className="text-slate-400 font-poppins-medium text-xs">
              Sequential Mastery Gating (Score ≥60% to Unlock)
            </Text>
          </View>
          <TouchableOpacity 
            onPress={handleResetProgress}
            className="w-10 h-10 rounded-2xl bg-white border border-slate-100 items-center justify-center shadow-sm"
            accessibilityLabel="Reset Progress"
          >
            <Ionicons name="refresh-outline" size={18} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Progress Overview Bar */}
        <View className="bg-white p-4 rounded-3xl border border-slate-100 mb-4 flex-row items-center justify-between shadow-sm">
          <View className="flex-row items-center">
            <View className="w-10 h-10 rounded-2xl bg-primary/10 items-center justify-center mr-3">
              <Ionicons name="ribbon-outline" size={20} color="#1E40FF" />
            </View>
            <View>
              <Text className="text-[10px] font-poppins-bold text-slate-400 uppercase tracking-wider">Mastery Status</Text>
              <Text className="text-xs font-poppins-bold text-slate-800">
                {unlockedCount} of {categories.length} Sections Unlocked
              </Text>
            </View>
          </View>
          <View className="bg-primary/10 px-3 py-1 rounded-full">
            <Text className="text-primary font-poppins-bold text-xs">
              {Math.round((unlockedCount / (categories.length || 1)) * 100)}%
            </Text>
          </View>
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 130 }}
        >
          <View className="gap-2.5">
            {categories.map((cat) => {
              const status = categoryStatus[cat];
              const isUnlocked = status?.unlocked;
              const highScore = status?.highScore || 0;
              const prevCategory = status?.prevCategory;
              const isPassed = highScore >= 60;

              return (
                <TouchableOpacity 
                  key={cat}
                  onPress={() => startQuizForCategory(cat)}
                  disabled={!isUnlocked}
                  activeOpacity={0.7}
                  className={`bg-white p-4 rounded-2xl shadow-sm border ${
                    isUnlocked 
                      ? isPassed 
                        ? 'border-emerald-200 bg-emerald-50/20' 
                        : 'border-slate-100' 
                      : 'border-slate-100 opacity-60 bg-slate-50/50'
                  } flex-row items-center justify-between`}
                >
                  <View className="flex-row items-center flex-1 mr-2">
                    <View className={`w-10 h-10 ${
                      !isUnlocked 
                        ? 'bg-slate-100' 
                        : isPassed 
                        ? 'bg-emerald-100' 
                        : 'bg-primary/10'
                    } rounded-xl items-center justify-center mr-3.5`}>
                      <Ionicons 
                        name={!isUnlocked ? 'lock-closed' : (isPassed ? 'checkmark-circle' : 'book')} 
                        size={20} 
                        color={!isUnlocked ? '#94A3B8' : (isPassed ? '#10B981' : '#1E40FF')} 
                      />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row items-center flex-wrap">
                        <Text className={`text-base font-poppins-bold ${isUnlocked ? 'text-slate-900' : 'text-slate-400'}`}>
                          {cat}
                        </Text>
                        {isPassed && (
                          <View className="ml-2 bg-emerald-100 px-1.5 py-0.5 rounded">
                            <Text className="text-emerald-700 font-poppins-bold text-[9px]">PASSED</Text>
                          </View>
                        )}
                      </View>

                      {isUnlocked ? (
                        <View className="flex-row items-center mt-1 flex-wrap">
                          <View className={`${isPassed ? 'bg-emerald-100' : highScore > 0 ? 'bg-amber-100' : 'bg-blue-50'} px-2 py-0.5 rounded mr-2`}>
                            <Text className={`${isPassed ? 'text-emerald-800' : highScore > 0 ? 'text-amber-800' : 'text-blue-700'} font-poppins-bold text-[10px]`}>
                              {highScore > 0 ? `Best: ${highScore}%` : 'Not Attempted'}
                            </Text>
                          </View>
                          <Text className="text-slate-400 font-poppins-medium text-[10px]">
                            {isPassed ? 'Next section unlocked ✓' : '10 Questions (Need ≥60%)'}
                          </Text>
                        </View>
                      ) : (
                        <View className="flex-row items-center mt-1">
                          <Ionicons name="lock-closed" size={10} color="#94A3B8" />
                          <Text className="text-slate-400 font-poppins-medium text-[10px] ml-1">
                            Locked • Score ≥60% in {prevCategory} to unlock
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                  {isUnlocked && <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />}
                </TouchableOpacity>
              );
            })}
          </View>

          <View className="bg-blue-50/70 p-5 rounded-3xl border border-blue-100 mt-6 mb-4">
            <View className="flex-row items-center mb-1.5">
              <Ionicons name="sparkles" size={18} color="#1E40FF" />
              <Text className="text-primary font-poppins-bold ml-2 text-sm">Educational Quiz Engine</Text>
            </View>
            <Text className="text-slate-600 font-poppins-medium text-xs leading-5">
              Each attempt pulls 10 randomized, AI-generated questions with shuffled answer choices. Score 60% or higher to unlock subsequent energy domains.
            </Text>
          </View>
        </ScrollView>
      </ScreenContainer>
    );
  }

  if (showResult) {
    const finalPercentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
    const isPassed = finalPercentage >= 60;
    const nextCategory = selectedCategory ? quizService.getNextCategory(selectedCategory) : null;

    return (
      <ScreenContainer>
        <View className="flex-1 items-center justify-center px-4 py-8">
          <View className={`w-20 h-20 ${isPassed ? 'bg-emerald-100' : 'bg-amber-100'} rounded-3xl items-center justify-center mb-4`}>
            <Ionicons 
              name={isPassed ? "trophy" : "alert-circle"} 
              size={40} 
              color={isPassed ? "#10B981" : "#F59E0B"} 
            />
          </View>

          <Text className="text-2xl font-poppins-bold text-slate-900 text-center mb-1">
            {isPassed ? "Section Passed! 🎉" : "Needs 60% to Pass"}
          </Text>

          <Text className="text-slate-500 font-poppins-semibold text-center mb-2 text-xs">
            {selectedCategory}
          </Text>

          <View className="flex-row items-center justify-center my-2">
            <View className={`px-5 py-2 rounded-full ${isPassed ? 'bg-emerald-500' : 'bg-amber-500'}`}>
              <Text className="text-white font-poppins-bold text-lg">
                {finalPercentage}% ({score}/{questions.length})
              </Text>
            </View>
          </View>

          <View className={`p-4 rounded-2xl w-full mb-6 border ${isPassed ? 'bg-emerald-50/70 border-emerald-200' : 'bg-amber-50/70 border-amber-200'}`}>
            <Text className={`font-poppins-medium text-center leading-6 text-xs ${isPassed ? 'text-emerald-900' : 'text-amber-900'}`}>
              {isPassed 
                ? (nextCategory 
                    ? `Great job! You scored ${finalPercentage}% and unlocked the next domain: "${nextCategory}"!`
                    : `Incredible achievement! You scored ${finalPercentage}% and mastered every section in the curriculum!`
                  )
                : `You scored ${finalPercentage}%. You need at least 60% (6/10) to unlock ${nextCategory ? `"${nextCategory}"` : 'the next section'}. Review the reading material in the Learn tab and try again!`
              }
            </Text>
          </View>

          {isPassed && nextCategory && (
            <TouchableOpacity 
              onPress={() => startQuizForCategory(nextCategory)}
              className="bg-emerald-600 w-full py-3.5 rounded-2xl items-center mb-3 shadow-md shadow-emerald-600/30 flex-row justify-center"
            >
              <Text className="text-white font-poppins-bold text-sm mr-2">Play Next: {nextCategory}</Text>
              <Ionicons name="arrow-forward" size={16} color="white" />
            </TouchableOpacity>
          )}

          {!isPassed && (
            <TouchableOpacity 
              onPress={() => selectedCategory && startQuizForCategory(selectedCategory)}
              className="bg-amber-500 w-full py-3.5 rounded-2xl items-center mb-3 shadow-md shadow-amber-500/30 flex-row justify-center"
            >
              <Ionicons name="refresh" size={16} color="white" />
              <Text className="text-white font-poppins-bold text-sm ml-2">Try Again (Need 60%)</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity 
            onPress={resetQuiz}
            className="bg-white border border-slate-200 w-full py-3 rounded-2xl items-center"
          >
            <Text className="text-slate-700 font-poppins-semibold text-sm">Back to Quiz Center</Text>
          </TouchableOpacity>
        </View>
      </ScreenContainer>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ScreenContainer>
      <View className="mt-2 mb-6">
        <View className="flex-row justify-between items-center mb-4">
          <View>
            <Text className="text-slate-400 font-poppins-bold uppercase text-[9px] tracking-wider">
              {selectedCategory} Domain
            </Text>
            <Text className="text-slate-600 font-poppins-semibold text-xs">
              Question {currentQuestionIndex + 1} of {questions.length}
            </Text>
          </View>
          <TouchableOpacity onPress={resetQuiz}>
            <Ionicons name="close" size={24} color="#94A3B8" />
          </TouchableOpacity>
        </View>
        
        {/* Progress Bar */}
        <View className="h-2 bg-slate-100 rounded-full overflow-hidden mb-6">
          <Animated.View 
            style={{ 
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%']
              }),
              backgroundColor: '#1E40FF'
            }} 
            className="h-full rounded-full"
          />
        </View>

        <Text className="text-lg font-poppins-bold text-slate-900 leading-7 mb-6">
          {currentQuestion?.question}
        </Text>

        <View className="gap-3">
          {currentQuestion?.options.map((option, index) => {
            let bgColor = 'bg-white';
            let borderColor = 'border-slate-100';
            let textColor = 'text-slate-700';
            let iconName: any = null;

            if (selectedOption === index) {
              if (index === currentQuestion.correctAnswer) {
                bgColor = 'bg-green-50';
                borderColor = 'border-green-300';
                textColor = 'text-green-800';
                iconName = 'checkmark-circle';
              } else {
                bgColor = 'bg-red-50';
                borderColor = 'border-red-300';
                textColor = 'text-red-800';
                iconName = 'close-circle';
              }
            } else if (selectedOption !== null && index === currentQuestion.correctAnswer) {
              bgColor = 'bg-green-50';
              borderColor = 'border-green-300';
              textColor = 'text-green-800';
              iconName = 'checkmark-circle';
            }

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleOptionPress(index)}
                disabled={selectedOption !== null}
                className={`${bgColor} p-4 rounded-2xl border ${borderColor} flex-row items-center justify-between shadow-sm`}
              >
                <Text className={`flex-1 font-poppins-medium ${textColor} text-xs leading-5`}>
                  {option}
                </Text>
                {iconName && (
                  <Ionicons 
                    name={iconName} 
                    size={20} 
                    color={iconName === 'checkmark-circle' ? '#10B981' : '#EF4444'} 
                    style={{ marginLeft: 8 }}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {selectedOption !== null && (
          <View>
            <View className="mt-6 bg-blue-50/70 p-4 rounded-2xl border border-blue-100">
              <Text className="text-primary font-poppins-bold text-xs mb-1">Explanation & Context</Text>
              <Text className="text-slate-700 font-poppins-regular text-xs leading-5">
                {currentQuestion.explanation}
              </Text>
            </View>
            
            <TouchableOpacity 
              onPress={handleNextQuestion}
              activeOpacity={0.85}
              className="bg-primary w-full py-4 rounded-2xl items-center mt-6 shadow-md shadow-primary/30"
            >
              <Text className="text-white font-poppins-bold text-base">
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScreenContainer>
  );
};

export default QuizScreen;
