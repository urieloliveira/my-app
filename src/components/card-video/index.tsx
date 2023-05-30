import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import theme from "../../utils/theme";

const CardVideo = () => {
  const uri =
    "https://videokits-apps.s3-us-west-1.amazonaws.com/riza/usrHoJb5oxGmfytFgabwwyO/Video/fiAoW59l6J54or7NY3vax3kV2gGRv1Xtj.mov/HLS/fiAoW59l6J54or7NY3vax3kV2gGRv1Xtj.m3u8";
  const video = React.useRef(null);
  const [status, setStatus] = React.useState<AVPlaybackStatus>({
    isLoaded: false,
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        video.current?.presentFullscreenPlayer();
        video.current?.playAsync();
      }}
    >
      {!status.isLoaded && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color={theme.palette.grey[400]} />
        </View>
      )}
      <Video
        ref={video}
        style={styles.video}
        source={{ uri }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderRadius: theme.spacing[4],
    backgroundColor: theme.palette.grey[800],
    marginRight: theme.spacing[4],
  },
  video: {
    alignSelf: "center",
    borderRadius: theme.spacing[4],
    width: 240,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardVideo;
