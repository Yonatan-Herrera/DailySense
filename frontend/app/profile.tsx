import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";

function MenuRow({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.menuRow} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.menuLeft}>
        {icon}
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#111" />
    </TouchableOpacity>
  );
}

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>

          <View style={styles.avatarWrap}>
            <Ionicons name="person-circle" size={130} color="#d4d4d4" />
            <Text style={styles.editPhoto}>Edit photo</Text>
          </View>

          <Text style={styles.sectionTitle}>Basic Info</Text>
          <View style={styles.groupCard}>
            <MenuRow
                icon={<Ionicons name="information-circle-outline" size={28} color="#222" />}
                label="Goku’s Information"
                onPress={() => router.replace("/pet-info")}
            />
            <MenuRow
              icon={<Ionicons name="settings-outline" size={28} color="#222" />}
              label="Settings"
            />
            <MenuRow
              icon={<Feather name="bell" size={28} color="#222" />}
              label="Notifications"
            />
          </View>

          <Text style={styles.sectionTitle}>Patient Information</Text>
          <View style={styles.groupCard}>
            <MenuRow
              icon={<Ionicons name="person-outline" size={28} color="#222" />}
              label="Pet Information"
              onPress={() => router.replace("/pet-info")}
            />
            <MenuRow
              icon={<MaterialIcons name="credit-card" size={28} color="#222" />}
              label="Care Plan & Insurance"
            />
            <MenuRow
              icon={<Feather name="thermometer" size={28} color="#222" />}
              label="Medications & Allergies"
            />
            <MenuRow
              icon={<Ionicons name="heart-outline" size={28} color="#222" />}
              label="Medical History"
            />
          </View>
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
            <Ionicons name="warning-outline" size={28} color="#111" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/profile")} activeOpacity={0.7}>
            <Ionicons name="person-outline" size={28} color="#c89b00" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f7f7f7" },
  container: { flex: 1, backgroundColor: "#f7f7f7" },
  scrollContent: { paddingHorizontal: 14, paddingTop: 10, paddingBottom: 110 },
  header: { alignItems: "center", marginBottom: 8 },
  headerTitle: { fontSize: 28, fontWeight: "800", color: "#111" },
  avatarWrap: { alignItems: "center", marginBottom: 24 },
  editPhoto: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "700",
    color: "#0087a5",
  },
  sectionTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
    marginLeft: 8,
  },
  groupCard: {
    backgroundColor: "#ececec",
    borderRadius: 20,
    paddingVertical: 6,
    marginBottom: 26,
  },
  menuRow: {
    minHeight: 64,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  menuLabel: {
    fontSize: 18,
    color: "#222",
    fontWeight: "500",
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