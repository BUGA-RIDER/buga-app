import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import { HeadingText } from '../../../components/CustomTextComponent';
import Proceed from '../../../assets/icons/Proceed_Icon.svg' ;
import { useNavigation } from '@react-navigation/core';




const OTPScreen = () => {

   const navigation = useNavigation()

   const handleProceed = () => {
    navigation.navigate('DriverCreate');
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#FFCC2A'/>
        <View style={styles.arrow}>
          <Arrow/>
        </View>
        <View style={styles.heading}>
      <HeadingText text="We sent you a verification code!"
        style={{
            fontSize:28
        }}
      />
      <Text style={styles.subheading}>
      Enter the six digit code sent to  
      <Text style={{
          fontFamily:"SatoshiBold",
          color: "black",
        }}> +2349020065170</Text>
      </Text>
      </View>

      <View style={styles.buttonView}>
             <TouchableOpacity style={styles.button}
             onPress={handleProceed}
             >
                <Text style={styles.buttonText}>Proceed</Text>
                    <Proceed/>
            </TouchableOpacity>
             </View>
    </SafeAreaView>
  );
};

export default OTPScreen

const styles = StyleSheet.create({
    arrow:{
        marginTop:24,
        marginLeft:19
      },
      heading:{
        marginTop:22
      },
      subheading:{
        color:"#9A9A9A",
        textAlign:'center'
      },
      buttonView:{
        marginTop:32,
        marginBottom:58,
        alignSelf:'flex-end',
        marginRight:43,  
    },
    button:{
        width:150,
        backgroundColor:"#FFCC2A",
        paddingVertical:15,
        borderRadius: 5,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center'
    },
    buttonText:{
        textAlign:'right',
        fontFamily:"SatoshiBold",
        fontSize:18,
        marginRight:8
    }
});