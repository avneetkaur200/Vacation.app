import { TouchableOpacity, Text } from "react-native";
import { FC } from "react";

interface IncrementButtonProps {
  increment: () => void;
}

const IncrementButton: FC<IncrementButtonProps> = ({ increment }) => {
  return (
    <TouchableOpacity onPress={increment} style={{ padding: 10, backgroundColor: "green", borderRadius: 5 }}>
      <Text style={{ color: "white" }}>Increment</Text>
    </TouchableOpacity>
  );
};

export default IncrementButton;
