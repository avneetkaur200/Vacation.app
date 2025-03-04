"use client";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CallAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error) return <Text style={styles.errorText}>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.body}>{data?.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderWidth: 1,
      borderColor: "#d1d5db",
      borderRadius: 8,
      backgroundColor: "#ffffff",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 2 },
      width: "90%",
    },
    title: {
      fontSize: 20,
      padding:10,
      fontWeight: "bold",
      color: "#374151",
    },
    body: {
      fontSize: 16,
      color: "#6b7280",
      
      marginTop: 8,
      lineHeight: 22,
    },
    loadingText: {
      fontSize: 18,
      color: "#6b7280",
    },
    errorText: {
      fontSize: 18,
      color: "#dc2626",
    },
  });