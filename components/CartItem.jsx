import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { iconOptions } from "../screens/ProductDetails";

const CartItem = ({
  navigate,
  key,
  id,
  name,
  stock,
  amount,
  imgSrc,
  index,
  qty,
  incrementhandler,
  decrementHandler,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     
      <View>
        <Image
          source={{
            uri: imgSrc,
          }}
          style={styles.img}
        />
      </View>

      <View
        style={{
          width: "40%",
          paddingHorizontal: 25,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
            fontWeight: "900",
          }}
          onPress={() => navigate.navigate("productdetails", { id })}
        >
          {name}
        </Text>

        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
          }}
        >
          ₹{amount}
        </Text>
      </View>

      <View style={styles.qtyContainer}>
        <TouchableOpacity
          onPress={() =>
            decrementHandler(id, name, amount, imgSrc, stock, qty)
          }
        >
          <Avatar.Icon icon={"minus"} color="black" {...iconOptions} />
        </TouchableOpacity>

        <Text style={styles.qtyText}>{qty}</Text>

        <TouchableOpacity
          onPress={() =>
            incrementhandler(id, name, amount, imgSrc, stock, qty)
          }
        >
          <Avatar.Icon icon={"plus"} color="black" {...iconOptions} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: "100%",
    resizeMode: "contain",
    left: "10%",
  },
  qtyText: {
    backgroundColor: colors.color9,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    height: 80,
    justifyContent: "space-between",
    alignSelf: "center",
  },
});

export default CartItem;
