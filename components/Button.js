import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export const Button = ({text}) => {
  return (
    <TouchableOpacity style={{
            width:358,
            backgroundColor:"#FFCC2A",
            paddingVertical:15,
            borderRadius: 5
    }}>
      <Text style={{
            textAlign:'center',
            fontFamily:"SatoshiMedium",
            fontSize:18,
            
      }}>{text}</Text>
    </TouchableOpacity>
  );
};


