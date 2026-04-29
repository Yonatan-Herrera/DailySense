import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const alerts = [
  {
    id: "1",
    time: "5:30 AM",
    text: "Extremely High/Low BPM",
    bg: "#ff6b6b",
    icon: <Ionicons name="warning-outline" size={34} color="#111" />,
  },
  {
    id: "2",
    time: "3:00 AM",
    text: "Medication Overdue",
    bg: "#f68b4b",
    icon: <Feather name="clock" size={34} color="#111" />,
  },
  {
    id: "3",
    time: "11:00 PM",
    text: "Very Low Activity Today",
    bg: "#e9a046",
    icon: <Feather name="clock" size={34} color="#111" />,
  },
  {
    id: "4",
    time: "10:30 PM",
    text: "Bedtime",
    bg: "#f3b15c",
    icon: <Feather name="clock" size={34} color="#111" />,
  },
  {
    id: "5",
    time: "10:00 PM",
    text: "Medication Due Soon",
    bg: "#d9ef59",
    icon: <Feather name="bell" size={34} color="#111" />,
  },
  {
    id: "6",
    time: "7:00 PM",
    text: "Take Goku For a Walk",
    bg: "#64ef57",
    icon: <MaterialCommunityIcons name="leaf" size={36} color="#111" />,
  },
  {
    id: "7",
    time: "6:30 PM",
    text: "Feed Goku",
    bg: "#64ef57",
    icon: <MaterialCommunityIcons name="leaf" size={36} color="#111" />,
  },
];

export default function AlertsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Alerts</Text>
        </View>

        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.clearButton}
            activeOpacity={0.8}
            onPress={() => router.replace("/empty-alerts")}
          >
            <Text style={styles.clearButtonText}>Clear All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {alerts.map((item) => (
            <View key={item.id} style={[styles.alertCard, { backgroundColor: item.bg }]}>
              <View style={styles.alertIcon}>{item.icon}</View>
              <Text style={styles.alertText}>
                {item.time} {item.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.replace("/activity")} activeOpacity={0.7}>
            <Ionicons name="pulse-outline" size={28} color="#222" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="stats-chart-outline" size={28} color="#222" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/")} activeOpacity={0.7}>
            <Ionicons name="home" size={28} color="#111" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/alerts")} activeOpacity={0.7}>
            <Ionicons name="warning-outline" size={28} color="#3b82f6" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/profile")} activeOpacity={0.7}>
            <Ionicons name="person-outline" size={28} color="#111" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f7f7f7" },
  container: { flex: 1, backgroundColor: "#f7f7f7" },
  header: { paddingTop: 18, paddingBottom: 20, alignItems: "center" },
  headerTitle: { fontSize: 28, fontWeight: "800", color: "#111" },
  topBar: { paddingHorizontal: 20, marginBottom: 18 },
  clearButton: {
    alignSelf: "flex-start",
    backgroundColor: "#111",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
  },
  clearButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  scrollContent: { paddingHorizontal: 12, paddingBottom: 120 },
  alertCard: {
    minHeight: 92,
    borderRadius: 16,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  alertIcon: {
    width: 54,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  alertText: {
    flex: 1,
    fontSize: 17,
    fontWeight: "500",
    color: "#111",
  },
  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 88,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
  },
});