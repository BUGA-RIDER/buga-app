import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import Naira from '../../../assets/icons/naira.svg'
import Comment from '../../../assets/icons/comment.svg'
import { Button } from '../../../components/Button'
import { useNavigation } from '@react-navigation/core';


const ScheduledPriceRange = () => {

  const navigation = useNavigation();

  const handleFindDriver = ()=>{
    navigation.navigate("FindingDriver")
  }

  return (
    <KeyboardAvoidingView       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex:1, backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30 }} >
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
      <Text style={{
        fontFamily:"SatoshiMedium",
        textAlign:'center',
        fontSize:16,
        marginTop:2,
        color:"#777777"
      }}>Mon 22 Feb, 3:00 PM</Text>
      <View style={{
        marginTop:20
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
    }}
    handlePress={handleFindDriver}
    />
      </View>
    </KeyboardAvoidingView>
  )
}

export default ScheduledPriceRange

const styles = StyleSheet.create({
  travelTime:{
    fontFamily:"SatoshiMedium",
    textAlign:'center',
    fontSize:14,
    marginTop:7,
    color:"#777777"
  }
})