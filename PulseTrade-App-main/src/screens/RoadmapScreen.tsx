import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenContainer from '../components/layout/ScreenContainer';

const RoadmapStep = ({ 
  number, 
  title, 
  subtitle, 
  description, 
  tools, 
  isLast = false 
}: { 
  number: string, 
  title: string, 
  subtitle: string, 
  description: string, 
  tools?: string[], 
  isLast?: boolean 
}) => (
  <View className="flex-row mb-8">
    <View className="items-center mr-4">
      <View className="w-10 h-10 rounded-full bg-primary items-center justify-center z-10">
        <Text className="text-white font-poppins-bold text-lg">{number}</Text>
      </View>
      {!isLast && <View className="w-1 bg-primary/20 flex-1 my-1" />}
    </View>
    
    <View className="flex-1 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
      <Text className="text-xs font-poppins-semibold text-primary uppercase mb-1">{subtitle}</Text>
      <Text className="text-xl font-poppins-bold text-slate-900 mb-2">{title}</Text>
      <Text className="text-slate-600 font-poppins-regular leading-6 mb-3">{description}</Text>
      
      {tools && (
        <View className="flex-row flex-wrap gap-2 mt-2">
          {tools.map((tool, index) => (
            <View key={index} className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              <Text className="text-slate-700 font-poppins-medium text-xs">{tool}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  </View>
);

const RoadmapScreen = () => {
  return (
    <ScreenContainer scrollable={false}>
      <View className="mt-2 mb-4">
        <Text className="text-3xl font-poppins-bold text-slate-900">ETRM Roadmap</Text>
        <Text className="text-slate-500 font-poppins-medium mt-1">Your journey to becoming an ETRM expert</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 130 }}>
        <RoadmapStep 
          number="1"
          subtitle="Phase 1: Foundations"
          title="Market & Lifecycle"
          description="Understand the core commodities (Oil, Gas, Power), the physical supply chain, and the basic trade lifecycle (Capture to Settlement)."
          tools={['Commodity Basics', 'Trade LifeCycle', 'Market Structures']}
        />

        <RoadmapStep 
          number="2"
          subtitle="Phase 2: Functional Core"
          title="Risk & Operations"
          description="Deep dive into Mark-to-Market (MtM), PnL attribution, Value-at-Risk (VaR), and logistics like pipeline nominations and vessel scheduling."
          tools={['Risk Management', 'Logistics', 'Settlement', 'Compliance']}
        />

        <RoadmapStep 
          number="3"
          subtitle="Phase 3: Technical Skills"
          title="Data & Integration"
          description="ETRM systems are data-heavy. Master SQL for reporting, and learn Python or C# for custom extensions and API integrations."
          tools={['SQL Server/Oracle', 'Python/C#', 'Web APIs', 'Data Modeling']}
        />

        <RoadmapStep 
          number="4"
          subtitle="Phase 4: Tool Mastery"
          title="ETRM Platforms"
          description="Become an expert in industry-leading tools. Focus on either the technical side (coding extensions) or functional side (configuration)."
          tools={['OpenLink Endur/Findur', 'Allegro', 'RightAngle', 'Brady']}
        />

        <RoadmapStep 
          number="5"
          subtitle="Phase 5: Expertise"
          title="Architecture & Strategy"
          description="Transition into a Solution Architect or Strategic Risk Manager role. Focus on multi-commodity portfolios and large-scale implementations."
          tools={['Solutions Architecture', 'Project Management', 'Strategic Advisory']}
          isLast={true}
        />

        <View className="bg-blue-50 p-6 rounded-3xl border border-blue-100 mt-4 mb-8">
          <View className="flex-row items-center mb-4">
            <View className="w-10 h-10 bg-primary/10 rounded-xl items-center justify-center mr-3">
              <Ionicons name="bulb" size={24} color="#1E40FF" />
            </View>
            <Text className="text-lg font-poppins-bold text-slate-900">Pro Tip</Text>
          </View>
          <Text className="text-slate-700 font-poppins-medium leading-6">
            Most ETRM careers start in "Support" or "Business Analysis". The key is to pick one commodity (e.g., Power or LNG) and one tool (e.g., Endur or Allegro) and master them completely before diversifying.
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default RoadmapScreen;
