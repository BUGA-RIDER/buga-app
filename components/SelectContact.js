import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import Profile from "../assets/icons/name.svg"
import Tick from "../assets/icons/gold_tick.svg"
import Ellipse from "../assets/icons/Ellipse.svg"

const SelectContact = () => {

    const [select, setSelect] = useState(false)

    const selectContact = ()=>{
        setSelect(!select)
    }
  return (
    <View>
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:48,
        marginTop:33,
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
        <TouchableOpacity onPress={selectContact}>
           { select ? <Tick width={20} height={20} /> : <Ellipse  width={20} height={20}/> }
            
            </TouchableOpacity>
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

export default SelectContact

const styles = StyleSheet.create({})