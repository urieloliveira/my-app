import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../utils/theme";

export const BackButton = () => (
  <TouchableOpacity
    style={{
      padding: theme.spacing[2],
      marginLeft: theme.spacing[4],
    }}
  >
    <Ionicons name="ios-arrow-back" size={24} color={theme.palette.grey[800]} />
  </TouchableOpacity>
);
