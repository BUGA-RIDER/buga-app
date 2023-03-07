import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import From from '../../../assets/icons/from.svg' ;
import To from '../../../assets/icons/to.svg' ;
import Plus from '../../../assets/icons/plus.svg' ;
import Passengers from '../../../assets/icons/Passengers.svg' ;
import Luggage from '../../../assets/icons/luggage.svg' ;
import Calendar from '../../../assets/icons/calendar-days.svg' ;
import Clock from '../../../assets/icons/clock.svg' ;
import { useNavigation } from '@react-navigation/core';
import BookingHeader from '../../../components/BookingHeader';


const EconomyBooking = () => {
    
    const navigation = useNavigation()

    const handleBack = () => {
        navigation.goBack();
      };

   
  return (
    <SafeAreaView >
        <View style={styles.yellowtop}>
            
        <StatusBar backgroundColor='#FFCC2A'/>
        <View style={styles.topheader}>
        <TouchableOpacity style={styles.arrow} onPress={handleBack}>
          <Arrow/>
        </TouchableOpacity>
        <Text style={styles.economyTop}>Economy</Text>
        </View>
      <BookingHeader/>
      <View style={{
        flexDirection:'row',
        marginLeft:34,
        alignItems:'center',
        marginTop:12
      }}>
        <From style={{
            marginRight: 16
        }}/>
        <TextInput placeholder='Covenant University' style={{
            backgroundColor:"white",
            paddingVertical:3,
            borderRadius:5,
            width:286,
            paddingLeft:17,
            fontSize:15,
            fontFamily:"SatoshiMedium"
        }} />
      </View>
      <View style={{
        flexDirection:'row',
        marginLeft:34,
        alignItems:'center',
        marginTop:12
      }}>
        <To style={{
            marginRight: 16
        }}/>
        <View style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            flexDirection: 'row',
            paddingHorizontal: 8,
            paddingVertical:3,
            alignItems: 'center',
            backgroundColor:"white",
            width:288,
            
        }}>
        <TextInput placeholder='46, Osapa London, Lekki, Lagos' style={{
            paddingLeft:10,
            fontSize:15,
            fontFamily:"SatoshiMedium"
        }} />
        <Plus style={{
            marginLeft:48
        }}/>
        </View>
      </View>
      <View style={{marginTop:13,}}>

        <View style={{
            flexDirection:'row',
            alignSelf:'flex-end',
            marginRight:60
            }}>

            <Passengers /> 
            <Text style={styles.smallText}>1 Passenger</Text>

            <Luggage/> 
            <Text style={styles.smallText}>4 Luggage</Text>
            </View>
            
            <View style={{
                borderWidth:0.3,
                borderColor:"#000000",
                marginTop:15,
                marginHorizontal:60,
                marginBottom:13
            }}/>
        
        <View style={{flexDirection:'row'}}>
            <Clock/>
            <Calendar/>
        <Text>Date/Time</Text>
        </View>

      </View>
      </View>
         
    </SafeAreaView>
  )
}

export default EconomyBooking

const styles = StyleSheet.create({
    arrow:{
        alignItems:'flex-start',
        marginLeft:20
      },
      yellowtop:{
        flex:0,
        backgroundColor:"#FFCD30",
        paddingBottom:33,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20
      },
      topheader:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:16,
        justifyContent:'flex-start'
      },
      economyTop:{
        color:"white",
        fontFamily:"SatoshiMedium",
        fontSize:14,
        textAlign:'center',
        marginLeft:140,
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor:"black",
        borderRadius:50,
        marginBottom:16
      },
      smallText:{
        fontFamily:"SatoshiMedium",
        fontSize:12,
        color:"#696969",
        marginRight:9
      }
})