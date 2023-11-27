import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Search from "../components/Search";
import MiniHeader from "../components/MiniHeader";
import DiscountCard from "../components/DiscountCard";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import FooterAni from "../components/FooterAni";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction";
import Toast from "react-native-toast-message";
import Loader from "../components/Loader";

const Home = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const discountCard = [
    {
      _id: 1,
      coupon: 50,
      numberOfOrders: 3,
      img: "https://e7.pngegg.com/pngimages/524/289/png-clipart-red-and-white-special-discount-icon-special-discount-sign-miscellaneous-discount-signs-thumbnail.png",
    },
    {
      _id: 2,
      coupon: 25,
      numberOfOrders: 2,
      img: "https://static.vecteezy.com/system/resources/thumbnails/000/649/150/small/illust58-2222.jpg",
    },
    {
      _id: 3,
      coupon: 25,
      numberOfOrders: 2,
      img: "https://static.vecteezy.com/system/resources/thumbnails/000/649/150/small/illust58-2222.jpg",
    },
  ];

  const addToCartHandler = (id, name, price, img, stock) => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        img,
        stock,
        quantity: 1,
      },
    });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });

  };

  const renderProductCard = ({ item }) => (
    <ProductCard
      name={item.title}
      price={item.price}
      img={item.thumbnail}
      addToCartHandler={addToCartHandler}
      id={item.id}
      navigate={navigate}
      stock={item.stock}
    />
  );
  return (
    <>
      <View
        style={{
          ...defaultStyle,
          paddingHorizontal: 30,
          paddingBottom: 10,
          backgroundColor: colors.color1_light,
          flex: 0,
        }}
      >
        <View>
          <Header />
        </View>
        <View>
          <View
            style={{
              paddingTop: 70,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                position: "absolute",
                bottom: 0,
                color: colors.color9,
              }}
            >
              Hey, Rahul
            </Text>
          </View>

          <Search />

          <MiniHeader />
        </View>
      </View>
      <View style={defaultStyle}>
        <View style={{ flexDirection: "row", height: 123, marginLeft: 20 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {discountCard.map((item, index) => (
              <DiscountCard
                coupon={item.coupon}
                numberOfOrders={item.numberOfOrders}
                img={item.img}
                key={index}
                i={index}
              />
            ))}
          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, marginTop: 15, marginLeft: 27 }}>
            Recommended
          </Text>
          <View>
            {loading ? (
              <Loader/>
            ) : (
              <FlatList
                data={products}
                renderItem={renderProductCard}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
              />
            )}
          </View>
        </View>
      </View>
      <Footer activeRoute={"home"} />

      {/* <FooterAni/> */}
    </>
  );
};

export default Home;
