import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors, defaultStyle } from "../styles/styles";

const ProductDetails = ({route:{params}}) => {
  return (
    <View  style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}>
       <Header back={true} />
    </View>
  )
}

export default ProductDetails