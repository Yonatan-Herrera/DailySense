import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable, Image} from "react-native";

export default function Index() {
  const [input, setInput] = useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        paddingTop: 80,
        paddingHorizontal: 30,
      }}>
      <Text style={{ 
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 40,
        color: "#000",}}>SIGN IN</Text>
      
      <Image
        source={require("../assets/images/Dailysense_logo.png")}
        style={{
          width: 300,
          height: 210,
          marginBottom: 20,}}
        resizeMode="contain"/>

      <View style={{
        flexDirection: "row",
        marginBottom: 35,}}>
        <Text style={{
          fontSize: 48,
          fontWeight: "600",
          color: "#c8102e",}}>Dog</Text>
        <Text style={{
          fontSize: 48,
          fontWeight: "600",
          color: "#1f5fbf",}}>Sense</Text>
        </View>
    </View>
  );
}
