import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Economy from "../assets/icons/Economy.svg";
import { HeadingText, SubText } from './CustomTextComponent';
import { Button } from './Button';
import Recommended from './Recommended';
import { useNavigation } from '@react-navigation/core';

const ScheduledSelectPackage = () => {
    const navigation = useNavigation();


    const [selectedone, setSelectedone] = useState(true)
    const [selectedtwo, setSelectedtwo] = useState(false)

    const selectone = ()=>{
        setSelectedone(true)
        setSelectedtwo(false)
    }
    const selecttwo = ()=>{
        setSelectedone(false)
        setSelectedtwo(true)
    }
    const handleRange = ()=>{
        navigation.navigate('ScheduledPriceRange')
    }
  return (
    <View style={{flex:1, backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30 }}>
    <TouchableOpacity style={{
        flexDirection:'row',
        alignItems:'center',
        marginTop:55,
        backgroundColor: selectedone ? "#E0E0E0": "white",
        paddingVertical:12,
        paddingLeft:10
    }} 
    onPress={selectone}
    >
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
        paddingLeft:10,
        backgroundColor: selectedtwo ? "#E0E0E0": "white"
    }}
    onPress={selecttwo}

    >
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


    {/* <Recommended/> */}

</TouchableOpacity>
    <Button text={"Proceed"} style={{
        marginLeft:29,
        marginTop:65
    }}
    handlePress={handleRange}
    />
    </View>
  )
}

export default ScheduledSelectPackage

const styles = StyleSheet.create({})