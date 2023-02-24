import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export const Button = ({text, handlePress, ...rest}) => {
  return (
    <TouchableOpacity style={{
            width:358,
            backgroundColor:"#FFCC2A",
            paddingVertical:15,
            borderRadius: 5
    }}{...rest}
    onPress={handlePress}
    >
      <Text style={{
            textAlign:'center',
            fontFamily:"SatoshiBold",
            fontSize:18,
            
      }}>{text}</Text>
    </TouchableOpacity>
  );
};


