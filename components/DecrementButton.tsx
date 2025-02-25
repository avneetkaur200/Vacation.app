import { TouchableOpacity, Text } from "react-native";

const DecrementButton = ({ decrement }: { decrement: () => void }) => {
  return (
    <TouchableOpacity onPress={decrement} style={{ padding: 10, backgroundColor: "red", borderRadius: 5 }}>
      <Text style={{ color: "white" }}>Decrement</Text>
    </TouchableOpacity>
  );
};

export default DecrementButton;
