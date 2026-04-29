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

export default function AnalyticsOther() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.tabs}>
        <Tab label="Motion" onPress={() => router.replace("/analytics-motion" as any)} />
        <Tab label="Temp" onPress={() => router.replace("/analytics-temp" as any)} />
        <Tab label="Food" onPress={() => router.replace("/analytics-food" as any)} />
        <Tab label="Other" active onPress={() => router.replace("/analytics-other" as any)} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topSection}>
          <View style={styles.leftStats}>
            <InfoCard>
              <Text style={styles.boldText}>
                <Text style={styles.greenText}>+10%</Text> daily steps over the past month
              </Text>
            </InfoCard>

            <InfoCard>
              <Text style={styles.boldText}>
                O2 Level: <Text style={styles.greenText}>96%</Text> (9AM)
              </Text>
            </InfoCard>

            <InfoCard>
              <Text style={styles.boldText}>Weight: 16 lbs</Text>
            </InfoCard>
          </View>

          <View style={styles.foodCard}>
            <Text style={styles.cardTitle}>Food Tracking</Text>

            <Text style={styles.foodText}>
              kcal Increase: +300{"\n"}
              <Text style={styles.yellowText}>(+12% vs. 7-day average)</Text>
            </Text>

            <Text style={styles.foodText}>
              Eating Behavior: peak activity between 2:00 PM and 4:00 PM
            </Text>

            <Text style={styles.foodText}>
              11:00 AM Food Intake Detected{" "}
              <Text style={styles.redText}>(94% Confidence)</Text>
            </Text>

            <Text style={styles.foodText}>
              9:00 AM Food Intake Detected{" "}
              <Text style={styles.yellowText}>(50% Confidence)</Text>
            </Text>
          </View>
        </View>

        <View style={styles.twoColumn}>
          <LineCard title="Activity" labels={["10,000", "8,000", "6,000", "4,000", "2,000"]} />
          <LineCard title="BPM" labels={["100", "90", "80", "70", "60"]} />
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

function InfoCard({ children }: { children: React.ReactNode }) {
  return <View style={styles.infoCard}>{children}</View>;
}

function LineCard({ title, labels }: { title: string; labels: string[] }) {
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
    marginBottom: 10,
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
  topSection: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 22,
  },
  leftStats: {
    width: 156,
    gap: 7,
  },
  infoCard: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    minHeight: 63,
    padding: 13,
    justifyContent: "center",
  },
  foodCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 14,
    padding: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 12,
  },
  boldText: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  greenText: {
    color: "#04c766",
    fontWeight: "800",
  },
  yellowText: {
    color: "#d99a00",
    fontWeight: "700",
  },
  redText: {
    color: "#d62828",
    fontWeight: "700",
  },
  foodText: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 17,
    marginBottom: 7,
  },
  twoColumn: {
    flexDirection: "row",
    gap: 12,
  },
  lineCard: {
    width: 164,
    height: 235,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 9,
    padding: 12,
    backgroundColor: "#fff",
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
    width: 46,
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
    left: 48,
    right: 3,
    top: 84,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#2f74ff",
    transform: [{ rotate: "-8deg" }],
  },
  endDot: {
    position: "absolute",
    right: 1,
    top: 80,
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