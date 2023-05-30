import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileScreen from "../screens/profile";
import PostsScreen from "../screens/posts";
import { SafeAreaView, Text, View } from "react-native";
import ProfileHeader from "../components/profile-header";
import theme from "../utils/theme";

type ButtomTabProps = {
  Profile: undefined;
  Posts: undefined;
};

const Tab = createBottomTabNavigator<ButtomTabProps>();

const BottomTab = (): React.ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: (props) => TabIcons(props)[route.name],
        tabBarActiveTintColor: theme.palette.grey[800],
        tabBarInactiveTintColor: theme.palette.grey[500],
      })}
    >
      <Tab.Screen
        options={{ header: ProfileHeader }}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Posts"
        component={PostsScreen}
      />
    </Tab.Navigator>
  );
};

const TabIcons = ({ focused, color, size }) => {
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
        name={focused ? "ios-list" : "ios-list-outline"}
        size={size}
        color={color}
      />
    ),
  };
};

export default BottomTab;
