import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Search from "../components/Search";
import MiniHeader from "../components/MiniHeader";
import DiscountCard from "../components/DiscountCard";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigation();
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

  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 4,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 6,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 7,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
  ];

  const addToCartHandler = (id) => {
    console.log("add cart");
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
            paddingBottom:10,
            backgroundColor: colors.color1_light,
            flex:0
          }}
        >
          <Header />
          <View>
            <View
              style={{
                paddingTop: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 22, position: "absolute", bottom: 14 ,color:colors.color9}}>
                Hey, Rahul
              </Text>
            </View>

            <Search />

            <MiniHeader />
          </View>
        </View>
        <View style={defaultStyle}>
        <View style={{ flexDirection: "row", height: 123,marginLeft:20}}>
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
          <Text style={{ fontSize: 30, marginTop: 15 , marginLeft:27 }}>Recommended</Text>

          <FlatList
            data={products}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
