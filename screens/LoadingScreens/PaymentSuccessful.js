import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeadingText, SubText } from '../../components/CustomTextComponent'
import Submitted from '../../assets/icons/submitted.svg'
import {useNavigation} from '@react-navigation/core'

const PaymentSuccessful = () => {
    const navigation = useNavigation()

    const handleHome = ()=>{
      navigation.navigate('DriverHome')
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <Submitted style={{
          marginBottom:23
        }}/>
        <HeadingText
          text="Payment Successful"
          style={{
            fontSize: 23,
            color: "black",
            lineHeight: 30,
            marginHorizontal: 26,
            alignText: "center",
          }}
        />
        <SubText
          text="You will be receive a notification when 
          you have been matched to a driver"
          style={{
            color: "#9A9A9A",
            fontSize: 15,
            marginHorizontal: 70,
            alignText: "center",
          }}
        />
  
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonone} onPress={handleHome} >
            <Text style={styles.buttonText}>Continue</Text>
     
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

export default PaymentSuccessful

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
     },
     buttonView:{
        marginTop:50,
        alignSelf:'center',  
    },
    buttonone:{
        width:280,
        backgroundColor:"#FFCC2A",
        paddingVertical:20,
        borderRadius: 5,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        marginBottom:10
    },
    buttontwo:{
        width:280,
        backgroundColor:"white",
        paddingVertical:20,
        borderRadius: 5,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:"#FFCC2A"
    },
    buttonText:{
        textAlign:'right',
        fontFamily:"SatoshiBold",
        fontSize:18,
        marginRight:8
    }
})