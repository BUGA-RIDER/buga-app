import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import Asterisk from '../../../assets/icons/asterisk.svg' ;
import Economy from '../../../assets/icons/Economy.svg' ;
import {useNavigation} from '@react-navigation/core';



const ChoosePayment = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
      };
  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:"white",
    }}>

        <StatusBar backgroundColor='white'/>

        <TouchableOpacity style={styles.arrow} onPress={handleBack} >
            <Arrow style={{
                marginRight:17
            }}/>
        </TouchableOpacity>
            <View style={{
                flexDirection:"row",
                justifyContent:'space-between',
                marginTop:20,
                marginHorizontal:30,
                paddingHorizontal:20,
                paddingVertical:15,
                backgroundColor: "#fff", // add a background color for the shadow
                Color: "#000", // 
                alignItems:'center',
                shadowOffset: {
                    height: 5,
                    width: 5,
                  },
                shadshadowowOpacity: 0.2,
                shadowRadius: 15.84,
                elevation: 3, // add an elevation value to show the shadow
            
            }}>
                <Text style ={{
                    fontFamily:"SatoshiBold",
                    fontSize:20
                }} >Taiwo is on his way!</Text>

                <View style={{
                    alignItems:'center'
                }} >
                    <Text style ={{
                    fontFamily:"SatoshiBold",
                    fontSize:13, 
                    marginBottom:3
                }} >Arriving in</Text>
                    <Text style ={{
                    fontFamily:"SatoshiBold",
                    fontSize:15, 
                    paddingHorizontal:8,
                    paddingVertical:10,
                    backgroundColor:"#FFCC2A"
                }} >3 Min</Text>
                </View>
            </View>
            <View style={{
                flexDirection:'row',
                marginLeft:54,
                alignItems:'center',
                marginTop:16
                }} >
                <Asterisk/> 
                <Text style={{
                    fontFamily:"SatoshiMedium",
                    fontSize:12,
                    marginLeft:3
                }} >You need to pay before the driver gets to your location</Text>
            </View>

                <View style={{
                alignItems:"center",
                marginTop:60
            }} >
            <Economy width={180} height={110}  />
            <Text style={{
                    fontFamily:"SatoshiBold",
                    fontSize:17,
                }} >Economy Basic</Text>
                <Text style={{
                    fontFamily:"SatoshiMedium",
                    fontSize:22,
                    marginTop:35
                }} >Total Cash Due</Text>
                <Text style={{
                    fontFamily:"SatoshiBold",
                    fontSize:30,
                    marginTop:9
                }} >₦12000</Text>
                <Text style={{
                    fontFamily:"SatoshiBold",
                    fontSize:17,
                    marginTop:43
                }} >How would you like to pay?</Text>
            </View>


        
            <TouchableOpacity style={{ marginTop:20, marginHorizontal:25, borderRadius:5, paddingVertical:15, paddingHorizontal:43, backgroundColor:"#FFCC2A", justifyContent:'center'}} >
                <Text style={{
                    fontFamily:"SatoshiBold",
                    fontSize:17,
                    textAlign:'center'
                }} >Charge total amount from my wallet</Text>
                </TouchableOpacity>
            <TouchableOpacity style={{ marginTop:20, marginHorizontal:25, borderRadius:5, paddingVertical:15, paddingHorizontal:43, borderColor:"#FFCC2A",borderWidth:1, justifyContent:'center'}} >
                <Text style={{
                    fontFamily:"SatoshiBold",
                    fontSize:17,
                    textAlign:'center'
                }} >Split bill with a friend</Text>
                </TouchableOpacity>



        </SafeAreaView>
  )
}

export default ChoosePayment

const styles = StyleSheet.create({
    arrow:{
        marginTop:24,
        marginLeft:19,
        flexDirection:'row'
      },
})