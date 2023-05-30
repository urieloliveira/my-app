import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/profile";
import ProfileHeader from "../components/profile-header";
import theme from "../utils/theme";
import PostStack from "./stack/post-stack";
import { TabIcons } from "../components/tab-icons";

type BottomTabProps = {
  Profile: undefined;
  Posts: undefined;
};

const Tab = createBottomTabNavigator<BottomTabProps>();

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
        component={PostStack}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
