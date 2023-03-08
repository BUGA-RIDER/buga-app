import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Name from "../assets/icons/name.svg"
import Star from "../assets/icons/star.svg"


const SelectDriverComponent = () => {
  return (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:18,
        marginTop:18,
      }} >
      <View style={{
        flexDirection:'row',
        alignItems:'center'
      }}>
        <View>
            <Name/>
        </View>
        <View style={{
            marginLeft:18
        }}>
            <Text style={{
                fontFamily:"SatoshiBold",
                fontSize:15
            }}>Adekoya Taiwo</Text>
            <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:13,
                color:"#767676"
            }} >Toyota Camry</Text>

            <View style={{
                flexDirection:"row",
                alignItems:'center'
            }}>
                <Star/>
            <Text>4.8 (12)</Text>
            </View>
        </View>
      </View>
      
      <View>
        <Text>₦4900</Text>
        <Text>Est. arrival: 10 mins</Text>
        <Text>Est. Distance: 10 mins</Text>
      </View>
      <View></View>
    </View>
  )
}

export default SelectDriverComponent

const styles = StyleSheet.create({})