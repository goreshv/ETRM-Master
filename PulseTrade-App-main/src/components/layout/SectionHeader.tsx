import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, onSeeAll }) => {
  return (
    <View className="flex-row justify-between items-center my-4">
      <Text className="text-xl font-poppins-bold text-slate-800">{title}</Text>
      {onSeeAll && (
        <TouchableOpacity onPress={onSeeAll}>
          <Text className="text-primary font-poppins-medium">See All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
