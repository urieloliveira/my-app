import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView, Text, View } from "react-native";
import theme from "../../utils/theme";

const ProfileHeader = () => {
  return (
    <SafeAreaView
      style={{
        borderBottomLeftRadius: theme.spacing[8],
        borderBottomRightRadius: theme.spacing[8],
        backgroundColor: theme.palette.grey[400],
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: theme.spacing[6],
          gap: theme.spacing[2],
        }}
      >
        <Ionicons
          name="ios-person-circle"
          size={theme.icon.large}
          color={theme.palette.grey[800]}
        />
        <View style={{ flex: 1 }}>
          <Text style={theme.typography.subtitle2}>Hi</Text>
          <Text style={theme.typography.subtitle1}>Maicon</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing[3],
          }}
        >
          <Ionicons
            name="ios-notifications"
            size={theme.icon.medium}
            color={theme.palette.grey[800]}
          />
          <Ionicons
            name="ios-chatbox"
            size={theme.icon.medium}
            color={theme.palette.grey[800]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHeader;
