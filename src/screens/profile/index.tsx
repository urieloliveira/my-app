import React from "react";
import { Text, ScrollView } from "react-native";
import theme from "../../utils/theme";
import CardVideo from "../../components/card-video";

const ProfileScreen: React.FC = () => {
  const videos = ["video1", "videos2", "video3"];
  const reapeatVideos = ["list1", "list2", "list3", "list4", "list5"];
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
            <CardVideo key={video} />
          ))}
        </ScrollView>
      ))}
    </ScrollView>
  );
};

export default ProfileScreen;
