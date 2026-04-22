import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export default function EmptyAlertsScreen() {
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

        <View style={styles.emptyState}>
          <Feather name="bell" size={150} color="#111" />
          <Text style={styles.emptyText}>You Have No New{"\n"}Alerts 😁</Text>
        </View>

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
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    paddingTop: 18,
    paddingBottom: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
  },
  topBar: {
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  clearButton: {
    alignSelf: "flex-start",
    backgroundColor: "#111",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  emptyText: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: "800",
    color: "#111",
    textAlign: "center",
    lineHeight: 32,
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