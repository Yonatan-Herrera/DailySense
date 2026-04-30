import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // ADDED

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerRow}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={36} color="#bdbdbd" />
            </View>
            <Text style={styles.greeting}>Hello, Goku's Owner</Text>
          </View>

          {/* MODIFIED: Wrapped content in LinearGradient, removed flat backgroundColor */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.alertCard}
            onPress={() => router.replace("/alerts")}
          >
            <LinearGradient
              colors={["#ff3b30", "#ffb3b3"]}
              style={styles.alertGradient}
            >
              <Ionicons name="warning-outline" size={38} color="#111" />
              <Text style={styles.alertTitle}>Abnormal Heart Rhythm</Text>
              <Text style={styles.alertSubtitle}>Tap for details.</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.grid}>
            {/* MODIFIED: Added LinearGradient absoluteFill, removed flat backgroundColor */}
            <TouchableOpacity
              style={styles.smallCard}
              activeOpacity={0.85}
              onPress={() => router.replace("/activity")}
            >
              <LinearGradient
                colors={["#7ef0ff", "#dffafe"]}
                style={StyleSheet.absoluteFill}
                borderRadius={14}
              />
              <View style={styles.cardTopRow}>
                <Text style={styles.cardTitle}>Activity</Text>
                <View style={styles.iconRow}>
                  <FontAwesome5 name="paw" size={18} color="#111" />
                  <FontAwesome5
                    name="paw"
                    size={16}
                    color="#111"
                    style={{ marginLeft: 4 }}
                  />
                </View>
              </View>
              <View style={styles.cardContent}>
                <MaterialCommunityIcons name="chart-bar" size={70} color="#111" />
                <Text style={styles.cardValue}>2000 steps</Text>
              </View>
            </TouchableOpacity>

            {/* MODIFIED: Added LinearGradient absoluteFill, removed flat backgroundColor */}
            <TouchableOpacity
              style={styles.smallCard}
              activeOpacity={0.85}
              onPress={() => router.replace("/bpm")}
            >
              <LinearGradient
                colors={["#d98aff", "#f3d6ff"]}
                style={StyleSheet.absoluteFill}
                borderRadius={14}
              />
              <View style={styles.cardTopRow}>
                <Text style={styles.cardTitle}>BPM</Text>
                <Ionicons name="heart-outline" size={24} color="#111" />
              </View>
              <View style={styles.cardContent}>
                <MaterialCommunityIcons name="chart-line" size={72} color="#111" />
                <Text style={styles.cardValue}>115 BPM</Text>
              </View>
            </TouchableOpacity>

            {/* MODIFIED: Added LinearGradient absoluteFill, removed flat backgroundColor */}
            <TouchableOpacity
              style={styles.smallCard}
              activeOpacity={0.85}
              onPress={() => router.replace("/temperature")}
            >
              <LinearGradient
                colors={["#a8ff80", "#dfffcf"]}
                style={StyleSheet.absoluteFill}
                borderRadius={14}
              />
              <View style={styles.cardTopRow}>
                <Text style={styles.cardTitle}>Temperature</Text>
                <Feather name="thermometer" size={22} color="#111" />
              </View>
              <View style={styles.cardContent}>
                <MaterialCommunityIcons name="chart-line" size={72} color="#111" />
                <Text style={styles.cardValue}>99.5°F</Text>
              </View>
            </TouchableOpacity>

            {/* MODIFIED: Added LinearGradient absoluteFill, removed flat backgroundColor */}
            <TouchableOpacity
              style={styles.smallCard}
              activeOpacity={0.85}
              onPress={() => router.replace("/food")}
            >
              <LinearGradient
                colors={["#f5c97a", "#faecd4"]}
                style={StyleSheet.absoluteFill}
                borderRadius={14}
              />
              <View style={styles.cardTopRow}>
                <Text style={styles.cardTitle}>Food Intake</Text>
                <FontAwesome6 name="bowl-food" size={24} color="#111" />
              </View>
              <View style={styles.cardContent}>
                <MaterialCommunityIcons name="chart-line" size={72} color="#111" />
                <Text style={styles.cardValue}>415 kcal</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.replace("/activity")} activeOpacity={0.7}>
            <Ionicons name="pulse-outline" size={26} color="#222" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/analytics-motion" as any)}
            activeOpacity={0.7}
          >
            <Ionicons name="stats-chart-outline" size={26} color="#222" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/")} activeOpacity={0.7}>
            <Ionicons name="home" size={26} color="#16a34a" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/alerts")} activeOpacity={0.7}>
            <Ionicons name="warning-outline" size={26} color="#222" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/profile")} activeOpacity={0.7}>
            <Ionicons name="person-outline" size={26} color="#222" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f5f5f5" },
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 110,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 28,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#ececec",
    borderWidth: 1,
    borderColor: "#999",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111",
    textDecorationLine: "underline",
    textDecorationColor: "#35a8ff",
  },
  // MODIFIED: removed backgroundColor, added overflow hidden
  alertCard: {
    width: "100%",
    minHeight: 135,
    borderRadius: 14,
    marginBottom: 28,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  // ADDED: new style for the gradient wrapper inside alertCard
  alertGradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111",
    marginTop: 10,
    textAlign: "center",
  },
  alertSubtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginTop: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 18,
  },
  // MODIFIED: removed backgroundColor, added overflow hidden
  smallCard: {
    width: "47.5%",
    minHeight: 142,
    borderRadius: 14,
    padding: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    justifyContent: "space-between",
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  cardValue: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111",
    marginTop: 2,
  },
  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 82,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 10,
    paddingTop: 8,
  },
});