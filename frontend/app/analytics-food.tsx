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

export default function AnalyticsFood() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.tabs}>
        <Tab label="Motion" onPress={() => router.replace("/analytics-motion" as any)} />
        <Tab label="Temp" onPress={() => router.replace("/analytics-temp" as any)} />
        <Tab label="Food" active onPress={() => router.replace("/analytics-food" as any)} />
        <Tab label="Other" onPress={() => router.replace("/analytics-other" as any)} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Distress Trigger Log</Text>

        <View style={styles.tableHeader}>
          <Text style={styles.underlined}>Time</Text>
          <Text style={styles.underlined}>Event Trigger</Text>
          <Text style={styles.underlined}>Audio Analysis</Text>
          <Text style={styles.underlined}>Status</Text>
        </View>

        <LogRow time="8:14 AM" trigger="Sound Det." audio="Clawing at Door" status="Resolved" />
        <LogRow time="10:45 AM" trigger="High Decibel" audio="Object Dropped" status="Resolved" />
        <LogRow time="2:30 PM" trigger="Sound Det." audio="Bark" status="Active" />
        <LogRow time="2:40 PM" trigger="High Decibel" audio="Yelp" status="Active" />

        <View style={styles.twoColumn}>
          <SmallLineCard title="Dog Bark Indicators" labels={["+30%", "+20%", "0%", "-20%", "-40%"]} />
          <SmallLineCard title="Ambient Noise Level" labels={["5", "4", "3", "2", "1"]} />
        </View>
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.7}>
        <Ionicons name="menu" size={26} color="#111" />
      </TouchableOpacity>
      <Text style={styles.title}>Analytics</Text>
      <Image source={{ uri: "https://i.pravatar.cc/100" }} style={styles.avatar} />
    </View>
  );
}

function LogRow({
  time,
  trigger,
  audio,
  status,
}: {
  time: string;
  trigger: string;
  audio: string;
  status: string;
}) {
  return (
    <View style={styles.logRow}>
      <Text style={styles.timeText}>{time}</Text>
      <Text style={styles.triggerText}>{trigger}</Text>
      <Text style={styles.audioText}>{audio}</Text>
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );
}

function SmallLineCard({ title, labels }: { title: string; labels: string[] }) {
  return (
    <View style={styles.smallCard}>
      <Text style={styles.cardTitle}>{title}</Text>

      <View style={styles.graphBox}>
        {labels.map((label, index) => (
          <View key={index} style={styles.gridRow}>
            <Text style={styles.yLabel}>{label}</Text>
            <View style={styles.gridLine} />
          </View>
        ))}

        <View style={styles.fakeLine} />
        <View style={styles.endDot} />
      </View>

      <View style={styles.axisRow}>
        <Text style={styles.axisText}>Nov 1</Text>
        <Text style={styles.axisText}>15</Text>
        <Text style={styles.axisText}>25</Text>
        <Text style={styles.axisText}>26</Text>
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
    <TouchableOpacity style={[styles.tab, active && styles.activeTab]} onPress={onPress}>
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
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 72,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontSize: 21, fontWeight: "700" },
  avatar: { width: 28, height: 28, borderRadius: 14 },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 22,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: "#f4f4f4",
    borderRadius: 18,
  },
  activeTab: { backgroundColor: "#191919" },
  tabText: { fontSize: 14, color: "#111", fontWeight: "500" },
  activeTabText: { color: "#fff" },
  content: {
    paddingHorizontal: 12,
    paddingBottom: 110,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: "row",
    marginBottom: 12,
  },
  underlined: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    color: "#777",
    textDecorationLine: "underline",
  },
  logRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  timeText: {
    flex: 0.8,
    fontSize: 14,
    fontWeight: "700",
  },
  triggerText: {
    flex: 1,
    fontSize: 13,
    color: "#888",
    fontWeight: "600",
  },
  audioText: {
    flex: 1.2,
    fontSize: 13,
    fontWeight: "700",
  },
  statusText: {
    flex: 0.75,
    fontSize: 13,
    color: "#888",
    fontWeight: "700",
  },
  twoColumn: {
    marginTop: 18,
    flexDirection: "row",
    gap: 12,
  },
  smallCard: {
    width: 164,
    height: 235,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 9,
    padding: 12,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 18,
  },
  graphBox: {
    height: 150,
    position: "relative",
  },
  gridRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 29,
  },
  yLabel: {
    width: 42,
    fontSize: 10,
    color: "#999",
  },
  gridLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#eeeeee",
  },
  fakeLine: {
    position: "absolute",
    left: 43,
    right: 3,
    top: 48,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#2f74ff",
    transform: [{ rotate: "6deg" }],
  },
  endDot: {
    position: "absolute",
    right: 1,
    top: 82,
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#2f74ff",
  },
  axisRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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