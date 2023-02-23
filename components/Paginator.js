import { StyleSheet, Animated, View, useWindowDimensions } from 'react-native'
import React from 'react'

const Paginator = ({data, scrollX}) => {

    const {width} = useWindowDimensions()
  return (
    <View style={{
        position:'absolute',
        flexDirection:"row",
        bottom:230,
        alignSelf:'center'
    }}>

      {data.map((_, i) => {
        const inputRange = [(i-1) * width, i * width, (i + 1) * width ];

        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange:[10, 20, 10],
            extrapolate:'clamp',
        });
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange:[1, 1, 1],
            extrapolate:'clamp',
        });
        const color = scrollX.interpolate({
            inputRange,
            outputRange:["white", '#FFCC2A', "white"],
            extrapolate:'clamp',
        });

        return <Animated.View style={[styles.dot, {
            width:dotWidth,
            opacity,
            backgroundColor:color
        
        }]} key ={i.toString()} />;
      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    dot:{
        height:10,
        borderRadius: 5,
        backgroundColor:"#FFCC2A",
        marginHorizontal:8
    }
})