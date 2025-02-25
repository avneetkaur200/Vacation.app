import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import vacationDestinations, { VacationDestination } from "./constants/list_items";

const Lab4 = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedDestinations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id) // Deselect
        : [...prevSelected, id] // Select
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: VacationDestination }) => (
          <TouchableOpacity style={styles.item} onPress={() => toggleSelection(item.id)}>
            <Text style={styles.destinationText}>
              {item.location} - ${item.price} - {item.average_yearly_temperature}
            </Text>
            <Text style={styles.checkmark}>
              {selectedDestinations.includes(item.id) ? "✅" : ""}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  destinationText: {
    fontSize: 16,
  },
  checkmark: {
    fontSize: 20,
  },
});

export default Lab4;
