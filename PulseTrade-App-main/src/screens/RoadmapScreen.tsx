import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenContainer from '../components/layout/ScreenContainer';
import AiDisclaimerModal from '../components/common/AiDisclaimerModal';

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
  <View className="flex-row mb-6">
    <View className="items-center mr-3.5">
      <View className="w-9 h-9 rounded-2xl bg-primary items-center justify-center z-10 shadow-sm shadow-primary/30">
        <Text className="text-white font-poppins-bold text-base">{number}</Text>
      </View>
      {!isLast && <View className="w-0.5 bg-primary/20 flex-1 my-1" />}
    </View>
    
    <View className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
      <Text className="text-[10px] font-poppins-bold text-primary uppercase tracking-wider mb-1">{subtitle}</Text>
      <Text className="text-base font-poppins-bold text-slate-900 mb-1.5">{title}</Text>
      <Text className="text-slate-600 font-poppins-regular text-xs leading-5 mb-3">{description}</Text>
      
      {tools && (
        <View className="flex-row flex-wrap gap-1.5">
          {tools.map((tool, index) => (
            <View key={index} className="bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-100">
              <Text className="text-slate-700 font-poppins-medium text-[10px]">{tool}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  </View>
);

const RoadmapScreen = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <ScreenContainer scrollable={false}>
      <View className="mt-2 mb-3 flex-row justify-between items-center">
        <View>
          <Text className="text-3xl font-poppins-bold text-slate-900">ETRM Career</Text>
          <Text className="text-slate-400 font-poppins-medium text-xs">Curated Progression Roadmap</Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowDisclaimer(true)}
          className="w-10 h-10 bg-blue-50 rounded-2xl items-center justify-center border border-blue-100"
          accessibilityLabel="About & Disclaimer"
        >
          <Ionicons name="information-circle-outline" size={22} color="#1E40FF" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 130 }}>
        <RoadmapStep 
          number="1"
          subtitle="Phase 1: Foundations"
          title="Market & Deal Lifecycle"
          description="Understand physical vs financial energy contracts, primary commodities (Crude Oil, Gas, LNG, Power), pipeline logistics, and the deal capture workflow."
          tools={['Commodity Basics', 'Trade Lifecycle', 'Incoterms', 'Nominations']}
        />

        <RoadmapStep 
          number="2"
          subtitle="Phase 2: Functional Core"
          title="Risk & Logistics Operations"
          description="Master Mark-to-Market (MTM) calculations, P&L attribution, Value-at-Risk (VaR), storage injection/withdrawal, pipeline cycles, and vessel demurrage."
          tools={['Risk Management', 'VaR & MTM', 'Logistics', 'Settlement AP/AR']}
        />

        <RoadmapStep 
          number="3"
          subtitle="Phase 3: Technical Skills"
          title="Data Modeling & Integration"
          description="Energy trading desks rely heavily on automated data pipelines. Master SQL queries for trade blotters, Python for forward curve modeling, and REST/SOAP APIs."
          tools={['SQL Server/Postgres', 'Python for Finance', 'Web APIs', 'Data Architecture']}
        />

        <RoadmapStep 
          number="4"
          subtitle="Phase 4: Tool Mastery"
          title="Industry ETRM Platforms"
          description="Become proficient in enterprise platforms. Specialize in either functional system configuration or custom software extensions (Java/C#/.NET/OpenComponents)."
          tools={['OpenLink Endur/Findur', 'Allegro', 'RightAngle', 'Brady / Enuit']}
        />

        <RoadmapStep 
          number="5"
          subtitle="Phase 5: Executive Advisory"
          title="Architecture & Multi-Commodity"
          description="Lead enterprise trading transformation programs as a Senior Solution Architect, Chief Risk Officer (CRO), or Trading Desk Lead."
          tools={['Solutions Architecture', 'Strategic Hedging', 'Cloud Migration']}
          isLast={true}
        />

        <View className="bg-blue-50/70 p-5 rounded-3xl border border-blue-100 mt-2 mb-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="bulb" size={20} color="#1E40FF" />
            <Text className="text-sm font-poppins-bold text-slate-900 ml-2">Career Strategy Tip</Text>
          </View>
          <Text className="text-slate-600 font-poppins-medium text-xs leading-5">
            Most energy trading careers start in Middle Office Support or Junior Business Analysis. Specializing deeply in one physical commodity (such as LNG or Power Spark Spreads) creates a tremendous competitive advantage.
          </Text>
        </View>

        {/* Disclaimer Footer Link */}
        <TouchableOpacity
          onPress={() => setShowDisclaimer(true)}
          className="bg-white p-4 rounded-2xl border border-slate-100 items-center mb-4 flex-row justify-center shadow-sm"
        >
          <Ionicons name="shield-checkmark-outline" size={16} color="#64748B" />
          <Text className="text-slate-500 font-poppins-medium text-xs ml-2">
            AI Content Disclosure & Academic Notice
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <AiDisclaimerModal
        visible={showDisclaimer}
        forceShow={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
      />
    </ScreenContainer>
  );
};

export default RoadmapScreen;
