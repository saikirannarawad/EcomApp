import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../styles/styles";


const DiscountCard = ({  coupon, numberOfOrders ,img,i}) => {
  return (
    <View style={{...styles.container,backgroundColor: i % 2 === 0 ? colors.color2 : colors.color2_light,}}>
      <View>
        <Image
          source={{
            uri: img,
          }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={{fontSize:20}}>Get</Text>
        <Text style={styles.couponTitle}>{coupon}% OFF</Text>
        <Text style={styles.orderNumber}>On first {numberOfOrders} orders</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 40,
    marginHorizontal:8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:250,
    height:123,
    borderRadius:16,
    color: "white",
  },
  image: {
    width: 70,
    height: 70,
  },
  couponTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  orderNumber: {
    fontSize: 14,
  },
});
export default DiscountCard;
