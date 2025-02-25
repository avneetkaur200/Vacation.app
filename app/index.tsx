import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Welcome to My App
      </Text>
      <Link href="/lab_3" asChild>
        <Text style={{ fontSize: 18, color: "blue" }}>Go to Lab 3</Text>
      </Link>
      <Link href="/lab_4" asChild>
        <Text style={{ fontSize: 18, color: "blue" }}>Go to Lab 4</Text>
      </Link>

    </View>
  );
}
