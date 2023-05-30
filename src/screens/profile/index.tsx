import React from "react";
import { View, Text, ScrollView } from "react-native";
import theme from "../../utils/theme";

const Profile: React.FC = () => {
  const videos = ["video1", "videos2", "video3"];
  const reapeatVideos = [1, 2, 3, 4, 5];
  return (
    <ScrollView>
      <Text style={{ ...theme.typography.h6, margin: theme.spacing[6] }}>
        Welcome
      </Text>
      {reapeatVideos.map((item) => (
        <ScrollView
          key={item}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginBottom: theme.spacing[6],
            paddingHorizontal: theme.spacing[6],
            gap: theme.spacing[2],
          }}
        >
          {videos.map((video) => (
            <View
              key={video}
              style={{
                width: 240,
                height: 200,
                backgroundColor: theme.palette.grey[500],
                borderRadius: theme.spacing[4],
                marginRight: theme.spacing[4],
              }}
            />
          ))}
        </ScrollView>
      ))}
    </ScrollView>
  );
};

export default Profile;
