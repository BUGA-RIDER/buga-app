import { View, Text } from 'react-native'
import React from 'react'


export const HeadingText = ({text, style}) => {
  return (
    <View>
      <Text style={{
        fontFamily:"SatoshiBold",
        fontSize:30,
        lineHeight:32,
        color:" #222222",
        textAlign:'center',
        marginBottom:12,
        ...style
      }} >{text}</Text>
    </View>
  )
}

export const SubText = ({text, style}) => {
  return (
    <View>
      <Text
      style={{
        fontFamily:"SatoshiMedium",
        fontSize:18,
        lineHeight:18,
        color:"Black",
        textAlign:'center',
        ...style
      }}
      >{text}</Text>
    </View>
  )
}