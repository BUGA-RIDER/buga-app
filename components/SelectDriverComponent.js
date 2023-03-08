import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Name from "../assets/icons/name.svg"
import Star from "../assets/icons/star.svg"
import { useNavigation } from '@react-navigation/core';



const SelectDriverComponent = ({name, car, rating, numberRating, price,time, distance}) => {
  const navigation = useNavigation();
  
  const handleFindDriver = ()=>{
    navigation.navigate("SplitFare")
  }
  return (
    <View style={{marginBottom:10}}>
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:18,
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
                fontSize:18,
                marginBottom:3
            }}>Adekoya Taiwo {name} </Text>
            <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:15,
                color:"#767676",
                marginBottom:1
            }} >Toyota Camry {car}</Text>

            <View style={{
                flexDirection:"row",
                alignItems:'center'
            }}>
                <Star/>
            <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:15,
                color:"black"
            }}  >4.8 {rating} <Text style={{color:"#767676"}}> (12){numberRating}</Text></Text>
            </View>
        </View>
      </View>
      
      <View>
        <Text style={{
                fontFamily:"SatoshiBold",
                fontSize:18,
                marginBottom:3,
                textAlign:'right'
            }} >₦4900{price}</Text>
        <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:15,
                color:"#767676",
                textAlign:'right',
                marginBottom:1
            }}  >Est. arrival: <Text style={{color:"black"}}>10 mins{time}</Text></Text>
        <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:15,
                color:"#767676",
                textAlign:'right'
            }}  >Est. distance: <Text style={{color:"black"}}>10 miles{distance}</Text></Text>
      </View>
    </View>

      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:18,
        marginHorizontal:18
      }}>
        <TouchableOpacity style={{
            paddingHorizontal:62,
            paddingVertical:10,
            borderColor:"#FFCC2A",
            borderWidth:1,
            borderRadius:15
        }}>
            <Text style={{
                fontFamily:"SatoshiBold",
                fontSize:16,
                marginBottom:3,
                textAlign:'right'
            }} >Decline</Text>
            </TouchableOpacity>


        <TouchableOpacity style={{
            paddingHorizontal:62,
            paddingVertical:10,
            backgroundColor:"#FFCC2A",
            borderRadius:15
        }} 
        onPress={handleFindDriver}
        >
            <Text style={{
                fontFamily:"SatoshiBold",
                fontSize:16,
                marginBottom:3,
                textAlign:'right'
            }} >Accept</Text>
            </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor:"#E7E7E7",
        marginHorizontal:18,
        marginTop:15
      }}>
      <View style={{
        borderBottomWidth:5,
        width:"20%",
        borderColor: "#FFCC2A",
        borderRadius:15
      }} />
      </View>
      <View style={{
        borderBottomWidth:0.3,
        borderColor:"black",
        marginHorizontal:18,
        marginTop:25,
        opacity:0.3
      }} />
    </View>
  )
}

export default SelectDriverComponent

const styles = StyleSheet.create({})