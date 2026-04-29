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

const heatData = [20, 20, 21, 23, 24, 26, 28, 31, 29, 35, 32, 42];
const tempData = [55, 55, 56, 58, 57, 59, 61, 60, 63, 62, 67, 68];

export default function AnalyticsTemp() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.tabs}>
        <Tab label="Motion" onPress={() => router.replace("/analytics-motion" as any)} />
        <Tab label="Temp" active onPress={() => router.replace("/analytics-temp" as any)} />
        <Tab label="Food" onPress={() => router.replace("/analytics-food" as any)} />
        <Tab label="Other" onPress={() => router.replace("/analytics-other" as any)} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.emptyCard}>
            <Text style={styles.cardTitle}>Weight Distribution</Text>
          </View>

          <View style={styles.emptyCard}>
            <Text style={styles.smallChartTitle}>Blood Pressure</Text>
            <View style={styles.miniGraph}>
              <View style={styles.redLine} />
              <View style={styles.blueLine} />
            </View>
          </View>
        </View>

        <View style={styles.twoColumn}>
          <LineCard
            title="Resting Heat Level"
            labels={["High", "Elevated", "Normal", "Cool"]}
            data={heatData}
          />

          <LineCard
            title="Environment Temperature"
            labels={["80°", "70°", "60°", "50°"]}
            data={tempData}
          />
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

function LineCard({
  title,
  labels,
  data,
}: {
  title: string;
  labels: string[];
  data: number[];
}) {
  return (
    <View style={styles.lineCard}>
      <Text style={styles.cardTitle}>{title}</Text>

      <View style={styles.graphBox}>
        {labels.map((label, index) => (
          <View key={index} style={styles.gridRow}>
            <Text style={styles.yLabel}>{label}</Text>
            <View style={styles.gridLine} />
          </View>
        ))}

        <View style={styles.lineArea}>
          {data.map((value, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  left: index * 10,
                  bottom: value - 10,
                },
              ]}
            />
          ))}
        </View>
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
    marginBottom: 55,
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
    paddingHorizontal: 10,
    paddingBottom: 110,
  },
  topRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 28,
  },
  emptyCard: {
    width: 150,
    height: 112,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 14,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  smallChartTitle: {
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  miniGraph: {
    height: 60,
    justifyContent: "space-around",
  },
  redLine: {
    height: 2,
    backgroundColor: "#ff9b9b",
    transform: [{ rotate: "1deg" }],
  },
  blueLine: {
    height: 2,
    backgroundColor: "#7aa7ff",
    transform: [{ rotate: "-6deg" }],
  },
  twoColumn: {
    flexDirection: "row",
    gap: 16,
  },
  lineCard: {
    width: 150,
    height: 230,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 9,
    padding: 12,
    backgroundColor: "#fff",
  },
  graphBox: {
    marginTop: 16,
    height: 155,
    position: "relative",
  },
  gridRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 34,
  },
  yLabel: {
    width: 55,
    fontSize: 10,
    color: "#999",
  },
  gridLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#eeeeee",
  },
  lineArea: {
    position: "absolute",
    left: 54,
    right: 0,
    top: 0,
    bottom: 0,
  },
  dot: {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: 4,
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