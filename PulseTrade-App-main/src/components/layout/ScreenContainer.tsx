import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

interface ScreenContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  padding?: boolean;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ 
  children, 
  scrollable = true, 
  padding = true 
}) => {
  const content = (
    <View className={`flex-1 ${padding ? 'px-4' : ''}`}>
      {children}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar style="dark" />
      {scrollable ? (
        <ScrollView 
          className="flex-1" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 130 }}
        >
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
};

export default ScreenContainer;
