import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const activities = [
  { id: "1", time: "9:00am", event: "Wakes Up" },
  { id: "2", time: "9:45am", event: "Let Goku out for the toilet" },
  { id: "3", time: "10:02am", event: "Morning food" },
  { id: "4", time: "10:54am", event: "Morning short stroll" },
  { id: "5", time: "11:20am", event: "Goku’s shower" },
  { id: "6", time: "12:13pm", event: "Resting" },
  { id: "7", time: "2:12pm", event: "Wakes up" },
  { id: "8", time: "2:28pm", event: "Napping" },
  { id: "9", time: "4:06pm", event: "Drive Goku to nearby park" },
  { id: "10", time: "4:37pm", event: "Goku playtime at park" },
  { id: "11", time: "4:41pm", event: "Evening meal" },
  { id: "12", time: "5:29pm", event: "Let Goku out for the toilet" },
];

export default function ActivityScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Activity</Text>
        </View>

        <FlatList
          data={activities}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.event}>{item.event}</Text>
            </View>
          )}
        />

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.replace("/activity")} activeOpacity={0.7}>
            <Ionicons name="pulse" size={28} color="#7c3aed" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="stats-chart-outline" size={28} color="#111" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/")} activeOpacity={0.7}>
            <Ionicons name="home" size={28} color="#111" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/alerts")} activeOpacity={0.7}>
            <Ionicons name="warning-outline" size={28} color="#111" />
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
  header: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    backgroundColor: "#f7f7f7",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
  },
  listContent: {
    paddingBottom: 110,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 70,
    paddingHorizontal: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#e8e8e8",
    backgroundColor: "#f7f7f7",
  },
  time: {
    width: 105,
    fontSize: 18,
    fontWeight: "500",
    color: "#111",
  },
  event: {
    flex: 1,
    fontSize: 18,
    color: "#7a7a7a",
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