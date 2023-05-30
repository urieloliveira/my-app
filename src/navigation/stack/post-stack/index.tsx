import React from "react";
import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import PostsScreen from "../../../screens/posts";
import PostScreen from "../../../screens/posts/post";
import { Post } from "../../../api/get-posts";
import { BackButton } from "../../../components/back-button";

export type PostStackProps = {
  Posts: undefined;
  Post: Post;
};

export type PostStackPropsNav<T extends keyof PostStackProps> =
  StackScreenProps<PostStackProps, T>;

const Stack = createStackNavigator<PostStackProps>();

const PostStack = () => (
  <Stack.Navigator initialRouteName="Posts">
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="Posts"
      component={PostsScreen}
    />
    <Stack.Screen
      options={{
        headerBackTitleVisible: false,
        headerTitle: "",
        headerBackImage: BackButton,
      }}
      name="Post"
      component={PostScreen}
    />
  </Stack.Navigator>
);

export default PostStack;
