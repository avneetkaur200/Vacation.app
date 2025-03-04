"use client";
import { useState } from "react";
import CallAPI from "../components/callAPI";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Lab5() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 5: API Call</Text>
      <TouchableOpacity
        onPress={() => setShowComponent(!showComponent)} style={styles.button}
        
      >
        <Text style={styles.buttonText}>{showComponent ? "Hide" : "Fetch Data"}</Text>
      </TouchableOpacity>
      {showComponent && <CallAPI />}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f3f4f6",
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#047857",
      marginBottom: 16,
    },
    button: {
      paddingVertical: 12,
      marginBottom: 16,
      paddingHorizontal: 24,
      backgroundColor: "#10b981",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 2, height: 2 },
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
    },
  });