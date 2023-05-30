import React from "react";
import { Text, ScrollView, Image, View } from "react-native";
import theme from "../../../utils/theme";
import { PostStackPropsNav } from "../../../navigation/stack/post-stack";
import { daysAgo, ptBrDateToISO } from "../../../utils/days-ago";
import { Ionicons } from "@expo/vector-icons";

const PostScreen: React.FC<PostStackPropsNav<"Post">> = ({ route }) => {
  const { params } = route;
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: theme.spacing[4],
          gap: theme.spacing[2],
        }}
      >
        <Ionicons
          name="ios-person-circle"
          size={theme.icon.large}
          color={theme.palette.grey[800]}
        />
        <Text style={theme.typography.subtitle1}>
          {params.Post.FirstName} {params.Post.LastName}
        </Text>
      </View>
      {params.Files.FileTop && (
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{
            width: "100%",
            height: 380,
          }}
        />
      )}
      <View style={{ padding: theme.spacing[4], gap: theme.spacing[2] }}>
        <View>
          <Text style={{ fontWeight: "700" }}>{params.Post.Name}</Text>
          <Text>{params.Post.Desc}</Text>
        </View>
        <Text style={{ color: theme.palette.grey[600] }}>
          {daysAgo(ptBrDateToISO(params.Post.DateCreated))}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PostScreen;
