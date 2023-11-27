import { View, Text } from 'react-native'
import React from 'react'
import StarRating from 'react-native-star-rating';
import { colors } from '../styles/styles';

const Rating = ({ rating }) => {
  return (
    <View style={{ position: 'absolute', top: 20, left: 33 ,flexDirection:'row'}}>
       <StarRating
        disabled={true}
        maxStars={5}
        rating={rating}
        fullStarColor={'#FFD700'}
        emptyStarColor={'#000000'}
        halfStarEnabled={true}
        starSize={20}
      />
      <Text style={{color:colors.color6, paddingLeft:15}}>110 Reviews</Text>
    </View>
  )
}

export default Rating

