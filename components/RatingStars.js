import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Image, Svg } from 'react-native-svg';
import Star from "../assets/icons/bigStar.svg"
import StarOutline from "../assets/icons/bigStarOutline.svg"

const RatingStars = ( { rating, setRating } ) => {
    const [filledStars, setFilledStars] = useState(rating);

  const onStarPress = (index) => {
    setFilledStars(index + 1);
    setRating(index + 1);
  };

  const renderStar = (index) => {
    const imageSource =
      index + 1 <= filledStars ? <Star/> : <StarOutline/> ;
    return (
      <TouchableOpacity key={index} onPress={() => onStarPress(index)}>
        <Svg>{imageSource}</Svg>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {[...Array(5)].map((_, index) => renderStar(index))}
    </View>
  );
};

export default RatingStars

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
})