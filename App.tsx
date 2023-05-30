import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, View } from "react-native";
import RootTabNavigator from "./src/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
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
