import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import Naira from '../../../assets/icons/naira.svg'
import Comment from '../../../assets/icons/comment.svg'
import { Button } from '../../../components/Button'

const ScheduledPriceRange = () => {
  return (
    <View style={{ backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30 }} >
      <View style={{
        marginTop:18,
        paddingVertical:10,
        paddingHorizontal:95,
        borderRadius:10,
        alignItems:'center',
        backgroundColor:"#FFF0BF",
        alignSelf:'center'
      }}>
        <SubText text={"Recommended Price Range"} style={{fontSize:14, marginBottom:5}}/>
        <HeadingText text={"4500 - 5000"}  style={{fontSize:20, marginBottom:5}}/>
        <SubText text={"Economy Basic"} style={{fontSize:14 , marginBottom:5}}/>
      </View>
      <Text style={styles.travelTime}>Est. Travel Time: <Text style={{fontFamily:"SatoshiMedium", color:"black"}}>1 hour 10mins</Text></Text>
      <View style={{
        marginTop:25
      }}>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          marginLeft:34
        }}>
          <Naira width={10} height={24} />
          <TextInput style={{
            borderBottomWidth:2,
            paddingBottom:2,
            width:"85%",
            marginLeft:10,
            fontSize:15,
            fontFamily:"SatoshiMedium"
          }}
          placeholder={"What’s your price?"}
          /> 
        </View>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          marginLeft:34,
          marginTop:17
        }}>
          <Comment width={12} height={24} />
          <TextInput style={{
            borderBottomWidth:2,
            paddingBottom:2,
            width:"85%",
            marginLeft:8,
            fontSize:15,
            fontFamily:"SatoshiMedium",
          }}
          placeholder={"Any comments or wishes for the driver?"}
          /> 
        </View>
          <Button text={"Find Driver"} style={{
        marginLeft:29,
        marginTop:35
    }} />
      </View>
    </View>
  )
}

export default ScheduledPriceRange

const styles = StyleSheet.create({
  travelTime:{
    fontFamily:"SatoshiMedium",
    textAlign:'center',
    fontSize:15,
    marginTop:7,
    color:"#777777"
  }
})