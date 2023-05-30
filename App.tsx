import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import RootTabNavigator from "./src/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootTabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
