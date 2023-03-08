import { StyleSheet, Text,  TextInput,  TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import Profile from "../assets/icons/name.svg"
import Naira from "../assets/icons/naira.svg"
import Ellipse from "../assets/icons/Ellipse.svg"

const InputSplitPrice = () => {
    const [select, setSelect] = useState(false)

    const selectContact = ()=>{
        setSelect(!select)
    }
  return (
    <View  >
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:48,
        marginTop:15,
        alignItems:'center'
    }} >
        <View style={{
            flexDirection:'row',
            alignItems:'center'
        }}>
        <View style={{
            backgroundColor:"#D9D9D9",
            padding:10,
            borderRadius:25
        }}>
            <Profile width={30} height={30} />
        </View>
        <View style={{
            marginLeft:15
        }} >
            <Text style={{
                        fontFamily: "SatoshiMedium",
                        fontSize: 15,
                        marginBottom:5
                    }} >Alexander Ameh</Text>
            <Text style={{
                        fontFamily: "SatoshiMedium",
                        fontSize: 15,
                        color:"#9A9A9A"
                    }} >09024562323</Text>
            
            </View>
            </View>
            <View style={{
            flexDirection:'row',
            alignItems:'center',
            marginLeft:60
                    }}>
          <Naira width={10} height={24} />
          <TextInput style={{
            borderBottomWidth:1,
            paddingBottom:2,
            marginLeft:10,
            fontSize:15,
            fontFamily:"SatoshiMedium",
            width:"50%"
          }}
          placeholder={"0.00"}
          keyboardType='numeric'
          /> 
        </View>
    </View>

        <View style={{
            borderWidth:0.3,
            marginTop:18,
            borderColor:"#9A9A9A",
            marginHorizontal:48,
            opacity:0.5
        }} />
    </View>
  )
}

export default InputSplitPrice

const styles = StyleSheet.create({})