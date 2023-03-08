import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Searching from "../../../assets/icons/finding.svg"
import {Button} from '../../../components/Button'
import {SubText} from '../../../components/CustomTextComponent'
import { useNavigation } from '@react-navigation/core';


const FindingDriver = () => {
  const navigation = useNavigation();
  
  const handleFindDriver = ()=>{
    navigation.navigate("SelectDriver")
  }

  return (
    <View style={{
        marginTop:20,
        alignItems:'center'
    }}>
      <Text style={{
        fontFamily:"SatoshiMedium",
        fontSize:22,
        textAlign:'center'
      }}>Finding Drivers...</Text>
        <Searching />
        <Text style={{
        fontFamily:"SatoshiMedium",
        fontSize:19,
        textAlign:'center',
      }} >Your bid</Text>
        <View style={{
            flexDirection:'row',
            marginBottom:20,
            width:"90%",
            justifyContent:'space-between'
        }} >
            <TouchableOpacity>
            <Text style={{
        fontFamily:"SatoshiBold",
        fontSize:19,
        textAlign:'left',
        marginTop:10,
        paddingHorizontal:15,
        paddingVertical:15,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#FFD240"
      }} >-100</Text>
      </TouchableOpacity>
            <Text  style={{ fontFamily:"SatoshiBold",  fontSize:19, textAlign:'left', marginTop:25 }} >₦4600</Text>
            <TouchableOpacity>
            <Text  style={{
        fontFamily:"SatoshiBold",
        fontSize:19,
        textAlign:'left',
        marginTop:10,
        paddingHorizontal:15,
        borderRadius:10,
        paddingVertical:15,
        backgroundColor:"#FFD240"
      }} >+100</Text>
      </TouchableOpacity>
        </View>

        <Button text={"Change Bid"} handlePress={handleFindDriver} />
    </View>
  )
}

export default FindingDriver

const styles = StyleSheet.create({})