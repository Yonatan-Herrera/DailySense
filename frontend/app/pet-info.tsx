import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

function Field({
  label,
  value,
  icon,
  secure = false,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  secure?: boolean;
}) {
  return (
    <View style={styles.fieldBlock}>
      <View style={styles.fieldRow}>
        <View style={styles.fieldIcon}>{icon}</View>
        <View style={styles.fieldContent}>
          <Text style={styles.fieldLabel}>{label}</Text>
          <TextInput
            value={value}
            editable={false}
            secureTextEntry={secure}
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
}

export default function PetInfoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/profile")}>
            <Ionicons name="chevron-back" size={30} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pet Information</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.avatarWrap}>
            <Ionicons name="person-circle" size={120} color="#d4d4d4" />
            <TouchableOpacity style={styles.editButton} activeOpacity={0.8}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>General Information</Text>

            <Field
              label="Name"
              value="Goku"
              icon={<Ionicons name="person" size={28} color="#6b7280" />}
            />
            <Field
              label="Owner’s Phone Number"
              value="(###)-###-####"
              icon={<MaterialIcons name="mail-outline" size={28} color="#6b7280" />}
            />
            <Field
              label="Birthdate"
              value="••••••••••••••"
              icon={<Feather name="lock" size={28} color="#6b7280" />}
              secure
            />
            <Field
              label="Primary Vet"
              value="Member: (###)-###-####"
              icon={<MaterialIcons name="local-hospital" size={28} color="#6b7280" />}
            />
            <Field
              label="Insurance Provider"
              value="Member: (###)-###-####"
              icon={<MaterialIcons name="local-hospital" size={28} color="#6b7280" />}
            />

            <Text style={styles.memberSinceLabel}>Member Since</Text>
            <View style={styles.memberSinceBox}>
              <Text style={styles.memberSinceText}>March 2026</Text>
            </View>

            <TouchableOpacity style={styles.signOutButton} activeOpacity={0.8}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
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
  header: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  backButton: {
    position: "absolute",
    left: 14,
    top: 18,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 120,
  },
  avatarWrap: {
    alignItems: "center",
    marginVertical: 8,
  },
  editButton: {
    marginTop: 8,
    backgroundColor: "#d9d9d9",
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 30,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  infoCard: {
    marginTop: 14,
    backgroundColor: "#ececec",
    borderRadius: 22,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  infoTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 10,
    color: "#111",
  },
  fieldBlock: {
    marginBottom: 10,
  },
  fieldRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  fieldIcon: {
    width: 36,
    alignItems: "center",
    marginTop: 28,
    marginRight: 10,
  },
  fieldContent: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111",
    marginBottom: 6,
  },
  input: {
    height: 44,
    borderWidth: 1.5,
    borderColor: "#222",
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#111",
  },
  memberSinceLabel: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800",
    color: "#111",
    marginTop: 8,
    marginBottom: 8,
  },
  memberSinceBox: {
    backgroundColor: "#cdeac2",
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 22,
  },
  memberSinceText: {
    fontSize: 16,
    fontWeight: "800",
    textDecorationLine: "underline",
    color: "#111",
  },
  signOutButton: {
    backgroundColor: "#eea1a1",
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#111",
  },
  signOutText: {
    fontSize: 18,
    fontWeight: "800",
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