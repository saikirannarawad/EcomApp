import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import { colors, defaultStyle } from "../styles/styles";
import { StyleSheet } from "react-native";
import Rating from "../components/Rating";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../redux/actions/productAction";
import { useIsFocused } from "@react-navigation/native";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 25,
    backgroundColor: colors.color8,
    height: 35,
    width: 35,
  },
};

const handleAddToCart = () => {
  if (stock === 0)
    return Toast.show({
      type: "error",
      text1: "Out of stock",
      text2: "please comeback later",
    });

  Toast.show({
    type: "success",
    text1: "Added To Cart",
    text2: "product added to cart",
  });
};

const handleBuyNow = () => {};

const ProductDetails = ({ route: { params } }) => {
  const isCarousel = useRef(null);
  const dispatch = useDispatch();
  const focus = useIsFocused();

  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Text>loading</Text>
      ) : (
        <View
          style={{
            ...defaultStyle,
            backgroundColor: colors.color9,
          }}
        >
          <Header back={true} />

          {/* heading  */}
          <View>
            <Text style={styles.heading}>{product.title}</Text>
          </View>
          {/* Rating */}
          <View>
            <Rating rating={product.rating} />
          </View>

          {/* carousel */}

          <View style={{ paddingTop: 50 }}>
            <Carousel
              layout="stack"
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              ref={isCarousel}
              data={product.images}
              renderItem={CarouselCardItem}
            />
          </View>

          {/* price */}
          <View style={styles.priceContaier}>
            <Text style={styles.text}>₹{product.price}</Text>
            <Text style={styles.badge}> {product.discountPercentage}% OFF</Text>
          </View>

          {/* button */}

          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.outlineButton}
              onPress={() => handleAddToCart()}
            >
              <Text style={styles.buttonText1}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.solidButton}
              onPress={() => handleBuyNow()}
            >
              <Text style={styles.buttonText2}>Buy Now</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingLeft: 30,
              paddingRight: 30,
              position: "relative",
              bottom: 50,
            }}
          >
            <Text style={{ fontSize: 15 }}>Details</Text>
            <Text style={{ fontSize: 15, color: colors.color5 }}>
              {product.description}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <>
    <View style={styles.container} key={index}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  </>
);

const styles = StyleSheet.create({
  heading: {
    marginTop: 85,
    fontWeight: "bold",
    fontSize: 40,
    marginLeft: 35,
  },

  container: {
    width: ITEM_WIDTH,
    paddingVertical: 20,
    height: 380,
    alignItems: "center",
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  dotIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    position: "absolute",
    top: 240,
    left: 25,
    zIndex: 10,
  },
  dot: {
    width: 25,
    height: 4,
    borderRadius: 4,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FFC83A",
  },

  priceContaier: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 95,
    right: 70,
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
    color: colors.color1_light,
  },
  badge: {
    marginLeft: 15,
    fontSize: 12,
    textAlign: "center",
    margin: 10,
    backgroundColor: colors.color1_light,
    padding: 10,
    borderRadius: 50,
    color: colors.color9,
  },

  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    bottom: 80,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: colors.color1_light,
    padding: 10,
    borderRadius: 20,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    left: 10,
  },
  solidButton: {
    backgroundColor: colors.color1_light,
    padding: 10,
    borderRadius: 20,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    right: 10,
  },
  buttonText1: {
    textAlign: "center",
    color: colors.color1_light,
    fontWeight: "bold",
  },
  buttonText2: {
    textAlign: "center",
    color: colors.color9,
  },
});

export default ProductDetails;
