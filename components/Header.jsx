import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ back, emptyCart = false }) => {
  const navigate = useNavigation();

  return (
    <>
      {back && (
        <TouchableOpacity
          style={{ position: "absolute", left: 20, top: 40, zIndex: 10 }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            style={{ backgroundColor: colors.color1_light }}
            icon={"chevron-left"}
            color={colors.color7}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{ position: "absolute", right: 20, top: 40, zIndex: 10 }}
        onPress={() => navigate.navigate("cart")}
      >
        <Avatar.Icon
          style={{ backgroundColor: colors.color1_light }}
          icon={emptyCart ? "" : "cart-outline"}
          color={colors.color7}
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;
