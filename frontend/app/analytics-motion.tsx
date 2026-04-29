import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const activityData = [22, 42, 51, 18, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 4, 35, 31, 45, 0, 0, 0, 0, 39, 6, 4];

export default function AnalyticsMotion() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="menu" size={26} color="#111" />
        </TouchableOpacity>

        <Text style={styles.title}>Analytics</Text>

        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.tabs}>
        <Tab label="Motion" active onPress={() => router.replace("/analytics-motion" as any)} />
        <Tab label="Temp" onPress={() => router.replace("/analytics-temp" as any)} />
        <Tab label="Food" onPress={() => router.replace("/analytics-food" as any)} />
        <Tab label="Other" onPress={() => router.replace("/analytics-other" as any)} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <ActivityCard title="Bedroom Activity" />
        <ActivityCard title="Living Room Activity" />
        <ActivityCard title="Bathroom Visits" />
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

function ActivityCard({ title }: { title: string }) {
  return (
    <View style={styles.largeCard}>
      <Text style={styles.cardTitle}>{title}</Text>

      <View style={styles.chartArea}>
        {activityData.map((value, index) => (
          <View key={index} style={styles.barSlot}>
            <View style={[styles.bar, { height: value }]} />
          </View>
        ))}
      </View>

      <View style={styles.axisRow}>
        <Text style={styles.axisText}>12:00</Text>
        <Text style={styles.axisText}>18:00</Text>
        <Text style={styles.axisText}>24:00</Text>
      </View>
    </View>
  );
}

function Tab({
  label,
  active,
  onPress,
}: {
  label: string;
  active?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.tab, active && styles.activeTab]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.tabText, active && styles.activeTabText]}>{label}</Text>
    </TouchableOpacity>
  );
}

function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        onPress={() => router.push("/activity" as any)}
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons name="pulse" size={28} color="#111" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/analytics-motion" as any)}
        activeOpacity={0.7}
      >
        <Ionicons name="bar-chart" size={26} color="#c81d35" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/" as any)}
        activeOpacity={0.7}
      >
        <Ionicons name="home" size={28} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/alerts" as any)}
        activeOpacity={0.7}
      >
        <Feather name="alert-triangle" size={27} color="#111" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/profile" as any)}
        activeOpacity={0.7}
      >
        <Feather name="user" size={27} color="#111" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 72,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 21,
    fontWeight: "700",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
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
  content: {
    paddingHorizontal: 12,
    paddingBottom: 110,
    gap: 22,
  },
  largeCard: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 9,
    padding: 14,
    height: 150,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 12,
  },
  chartArea: {
    height: 75,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  barSlot: {
    width: 6,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bar: {
    width: 5,
    borderRadius: 4,
    backgroundColor: "#a9c9ff",
  },
  axisRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 3,
  },
  axisText: {
    fontSize: 10,
    color: "#999",
  },
  bottomNav: {
    position: "absolute",
    bottom: 22,
    left: 0,
    right: 0,
    height: 62,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 18,
  },
});