import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function SignIn() {
  const [value, setValue] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.signInLabel}>SIGN IN</Text>

        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/Dailysense_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.brandName}>
          <Text style={styles.brandDog}>Dog</Text>
          <Text style={styles.brandSense}>Sense</Text>
        </Text>

        <Text style={styles.subtitle}>
          Enter your email or phone number to sign in
        </Text>

        <TextInput
          style={styles.input}
          placeholder="###########"
          placeholderTextColor="#bbb"
          value={value}
          onChangeText={setValue}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.85}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By clicking continue, you agree to our{" "}
          <Text style={styles.termsLink}>Terms of Service</Text>
          {"\n"}and <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingTop: 16,
  },
  signInLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
    letterSpacing: 1.5,
    marginBottom: 32,
    alignSelf: "center",
  },
  logoContainer: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 160,
    height: 160,
  },
  brandName: {
    fontSize: 38,
    fontWeight: "800",
    marginBottom: 16,
    textAlign: "center",
  },
  brandDog: {
    color: "#cc1f1f",
  },
  brandSense: {
    color: "#1a56cc",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 22,
  },
  input: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#111",
    backgroundColor: "#fff",
    marginBottom: 14,
  },
  continueButton: {
    width: "100%",
    height: 58,
    borderRadius: 14,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  continueText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
  },
  termsText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    lineHeight: 20,
  },
  termsLink: {
    color: "#111",
    fontWeight: "700",
  },
});