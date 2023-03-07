import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Economy from "../assets/icons/Economy.svg";
import { HeadingText, SubText } from './CustomTextComponent';
import { Button } from './Button';

const SelectPackage = () => {
  return (
    <View style={{ backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30 }}>
    <TouchableOpacity style={{
        flexDirection:'row',
        alignItems:'center',
        marginTop:45,
        backgroundColor:"#E0E0E0",
        paddingVertical:12,
        paddingLeft:10
    }} >
    <Economy width={85} height={54} />
    <View style={{
        marginLeft:20
    }}>
    <HeadingText text={"Economy Basic"} style={{
        fontSize:17,
        marginBottom:0
    }}/>
    <SubText text={"Saloon Car"} style={{
        fontSize:12,
        paddingTop:0,
        textAlign:"left",
        color:"#696969"
    }}/>
    </View>
    <SubText text={"Recommended"}
     style={{
        fontSize:14,
        paddingTop:0,
        color:"#33C300",
        marginLeft:85
    }}
     />
</TouchableOpacity>
<TouchableOpacity style={{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:12,
        paddingLeft:10
    }} >
    <Economy width={85} height={54} />
    <View style={{
        marginLeft:20
    }}>
    <HeadingText text={"Economy Plus"} style={{
        fontSize:17,
        marginBottom:0
    }}/>
    <SubText text={"SUV/Sienna (7 seater)"} style={{
        fontSize:12,
        paddingTop:0,
        textAlign:"left",
        color:"#696969"
    }}/>
    </View>
</TouchableOpacity>
    <Button text={"Proceed"} style={{
        marginLeft:29,
        marginTop:35
    }}/>
    </View>
  )
}

export default SelectPackage

const styles = StyleSheet.create({})