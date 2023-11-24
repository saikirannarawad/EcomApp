import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const Footer = ({ activeRoute = home }) => {
  const navigate = useNavigation();
  const avatarOptions = {
    color: colors.color2,
    size: 50,
    style: {
      backgroundColor: colors.color1,
    },
  };

  const navigatationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate("home");
        break;
      case 1:
        navigate.navigate("categories");
        break;
      case 2:
        navigate.navigate("Favourite");
        break;
      case 3:
        navigate.navigate("Favourite");
        break;
      default:
        navigate.navigate("More");
        break;
    }
  };
  return (
    <View
      style={{
        backgroundColor: colors.color1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: "absolute",
        width: "100%",
        bottom: 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(0)}
        >
          <Avatar.Icon
            {...avatarOptions}
            icon={activeRoute === "home" ? "home" : "home-outline"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(1)}
        >
          <Avatar.Icon
            {...avatarOptions}
            icon={
              activeRoute === "category"
                ? "view-dashboard"
                : "view-dashboard-outline"
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(2)}
        >
          <Avatar.Icon
            {...avatarOptions}
            icon={activeRoute === "profile" ? "heart" : "heart-outline"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(3)}
        >
          <Avatar.Icon
            {...avatarOptions}
            icon={activeRoute === "profile" ? "dots-vertical" : "dots-vertical"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
