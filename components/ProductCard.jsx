import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const ProductCard = ({
  name,
  price,
  img,
  addToCartHandler,
  id,
  navigate,
  i,
  stock,
}) => {
  return (
    <>
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigate.navigate("productdetails", { id })}
      >
      
      <View
        style={{
          elevation: 5,
          width: 160,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
          borderRadius: 12,
          marginLeft:21,
          marginBottom: 30,
          height: 210,
          backgroundColor: colors.color8,
        }}
        >
        <View style={{ position: "relative", right: 50, bottom: 20 }}>
          <Avatar.Icon
            style={{ backgroundColor: colors.color8 }}
            icon={"heart-outline"}
            color={colors.color3}
            size={40}
            />
        </View>
        <View>
          <Image
            source={{
              uri: img,
            }}
            style={styles.image}
            />
        </View>
        <View
          style={{
            width: 115,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop:15
          }}
          >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                color:colors.color3
              }}
              >
              ${price}
            </Text>
            <Text style={{
              color:colors.color5
            }}>{name}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => addToCartHandler(id, name, price, img, stock)}>
              <Avatar.Icon
                style={{ backgroundColor: colors.color1_light }}
                icon="plus"
                color={colors.color8}
                size={30}
                />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
</>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    position: "relative",
    bottom: 20,
    borderRadius: 8,
  },
});

export default ProductCard;
