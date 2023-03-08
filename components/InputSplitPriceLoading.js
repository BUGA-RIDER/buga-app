import { ActivityIndicator, StyleSheet, Text,  TextInput,  TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import Profile from "../assets/icons/name.svg"
import Spinner from "../assets/icons/spinner.svg"

const InputSplitPriceLoading = () => {
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
            <TouchableOpacity  onPress={()=>{setSelect(!select)}} >
            { select ? <View style={{
            flexDirection:'row',
            alignItems:'center',
            marginLeft:60,
            padding:12,
            borderRadius:30,
            backgroundColor:"#86FF99"
                    }}
                    >
          
          <Text style={{
                        fontFamily: "SatoshiBold",
                        fontSize: 12,
                    }} >Successful</Text>
        </View>: <ActivityIndicator style={{
            marginRight:30
        }} color="yellow"  size='large'/>  }
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

export default InputSplitPriceLoading

const styles = StyleSheet.create({})