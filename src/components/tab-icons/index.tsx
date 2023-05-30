import { Ionicons } from "@expo/vector-icons";

export const TabIcons = ({ focused, color, size }) => {
  return {
    Profile: (
      <Ionicons
        name={focused ? "ios-person" : "ios-person-outline"}
        size={size}
        color={color}
      />
    ),
    Posts: (
      <Ionicons
        name={focused ? "apps" : "apps-outline"}
        size={size}
        color={color}
      />
    ),
  };
};
