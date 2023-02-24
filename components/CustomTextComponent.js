import { View, Text } from 'react-native'
import React from 'react'


export const HeadingText = ({text}) => {
  return (
    <View>
      <Text style={{
        fontFamily:"SatoshiBold",
        fontSize:30,
        lineHeight:32,
        color:" #222222",
        textAlign:'center',
        marginBottom:12
      }} >{text}</Text>
    </View>
  )
}

export const SubText = ({text}) => {
  return (
    <View>
      <Text
      style={{
        fontFamily:"SatoshiMedium",
        fontSize:18,
        lineHeight:18,
        color:"Black",
        textAlign:'center'
      }}
      >{text}</Text>
    </View>
  )
}