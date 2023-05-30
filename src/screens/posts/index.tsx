import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import theme from "../../utils/theme";
import { useGetPosts } from "../../hook/use-get-posts";
import { useNavigation } from "@react-navigation/native";
import { PostStackProps } from "../../navigation/stack/post-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { daysAgo, ptBrDateToISO } from "../../utils/days-ago";

const PostsScreen: React.FC = () => {
  const { data, loading } = useGetPosts();
  const navigation = useNavigation<StackNavigationProp<PostStackProps>>();
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: theme.spacing[4] }}>
        {loading && (
          <ActivityIndicator size="large" color={theme.palette.grey[400]} />
        )}
        {data?.map((post) => (
          <TouchableOpacity
            key={post.Post.PostId}
            style={{
              marginBottom: theme.spacing[6],
              gap: theme.spacing[2],
            }}
            onPress={() => {
              navigation.navigate("Post", post);
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: theme.spacing[2],
              }}
            >
              <Ionicons
                name="ios-person-circle"
                size={theme.icon.large}
                color={theme.palette.grey[800]}
              />
              <Text style={theme.typography.subtitle1}>
                {post.Post.FirstName} {post.Post.LastName}
              </Text>
            </View>
            {post.Files.FileTop && (
              <Image
                source={{ uri: "https://reactjs.org/logo-og.png" }}
                style={{
                  width: "100%",
                  height: 280,
                }}
              />
            )}
            <View>
              <Text style={{ fontWeight: "700" }}>{post.Post.Name}</Text>
              <Text>{post.Post.Desc}</Text>
            </View>
            <Text style={{ color: theme.palette.grey[600] }}>
              {daysAgo(ptBrDateToISO(post.Post.DateCreated))}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostsScreen;
