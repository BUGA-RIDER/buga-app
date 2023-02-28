import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import assets from "../constants/assets" 

const Operations = () => {
  return (
    <View style={{
        
    }}>
    <View style={{
        marginBottom:20,
        marginLeft:12
    }} >
        <Image source={assets.bg1} style={{
             height:200,
             width:300,
             borderRadius:10,  
        }}/>
        <View style={{
            position: 'absolute',
            bottom:0,
            width:300,
            height:50,
            opacity:0.5,
            backgroundColor:"black",
        }}/>
        <View style={{
            position: 'absolute',
            bottom:0,
            paddingLeft:10,
            paddingBottom:10
        }}>
            <Text style={{
                fontFamily:"SatoshiBold",
                fontSize:14,
                color:"white"
            }}>Covenant University Vacation</Text>
            <Text style={{
                fontFamily:"SatoshiBold",
                fontSize:14,
                color:"white"
            }} >February 22, 2023</Text>
        </View>
    </View>
    </View>
  )
}

export default Operations

const styles = StyleSheet.create({})