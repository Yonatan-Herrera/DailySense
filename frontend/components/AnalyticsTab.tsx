import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

type AnalyticsTab = "Motion" | "Temp" | "Food" | "Other";

type Props = {
  activeTab: AnalyticsTab;
};

export default function AnalyticsTabs({ activeTab }: Props) {
  const tabs: { label: AnalyticsTab; route: string }[] = [
    { label: "Motion", route: "/analytics-motion" },
    { label: "Temp", route: "/analytics-temp" },
    { label: "Food", route: "/analytics-food" },
    { label: "Other", route: "/analytics-other" },
  ];

  return (
    <View style={styles.tabs}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;

        return (
          <TouchableOpacity
            key={tab.label}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => router.replace(tab.route as any)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: "#f4f4f4",
    borderRadius: 18,
  },
  activeTab: {
    backgroundColor: "#191919",
  },
  tabText: {
    fontSize: 14,
    color: "#111",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#fff",
  },
});