import { useState } from "react";
import { View, Text } from "react-native";
import IncrementButton from "../components/IncrementButton";
import DecrementButton from "../components/DecrementButton";

const Lab3 = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Counter: {count}</Text>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
        <IncrementButton increment={() => setCount(count + 1)} />
        <DecrementButton decrement={() => setCount(count - 1)} />
      </View>
    </View>
  );
};

export default Lab3;
