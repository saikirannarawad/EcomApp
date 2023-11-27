import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const incrementHandler = (id, name, price, img, stock, quantity) => {
    const newQty = quantity + 1;
    if (stock <= quantity)
      return Toast.show({
        type: "error",
        text1: "Maximum value added",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        img,
        stock,
        quantity: newQty,
      },
    });
  };

  const decrementHandler = (id, name, price, img, stock, quantity) => {
    const newQty = quantity - 1;

    if (1 >= quantity) return dispatch({ type: "removeFromCart", payload: id });

    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        img,
        stock,
        quantity: newQty,
      },
    });
  };
  const [itemsPrice, setItemsPrice] = useState(0);
  const [shippingCharges, setShippingCharges] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const newItemsPrice = cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0);
    const newShippingCharges = newItemsPrice > 10000 ? 0 : 200;
    const newTax = Number((0.18 * newItemsPrice).toFixed());
    const newTotalAmount = newItemsPrice + newShippingCharges + newTax;

    setItemsPrice(newItemsPrice);
    setShippingCharges(newShippingCharges);
    setTax(newTax);
    setTotalAmount(newTotalAmount);
  }, [cartItems]);

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* header */}
      <Header back={true} emptyCart={true} />

      {/* Title */}
      <Text style={{ fontSize: 20, position: "relative", left: 90, top: 17 }}>
        Shopping Cart ({cartItems.length})
      </Text>

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        {console.log("result: ", cartItems)}
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.length > 0 ? (
            cartItems.map((i, index) => (
              <CartItem
                navigate={navigate}
                key={i.product}
                id={i.product}
                name={i.title}
                stock={i.stock}
                amount={i.price}
                imgSrc={i.img}
                index={index}
                qty={i.quantity}
                incrementhandler={incrementHandler}
                decrementHandler={decrementHandler}
              />
            ))
          ) : (
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              No Items Yet
            </Text>
          )}
        </ScrollView>
      </View>

      <View style={{ padding: 30 }}>
        <PriceTag heading={"Subtotal"} value={itemsPrice} />
        <PriceTag heading={"Shipping"} value={shippingCharges} />
        <PriceTag heading={"Tax"} value={tax} />
        <PriceTag heading={"Total"} value={totalAmount} />
      </View>

      {/* button */}
      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color1_light,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color9}
        >
          Proceed To Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>₹{value}</Text>
  </View>
);

export default Cart;
