import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import Mail from '../../../assets/icons/Mail_icon.svg' ;
import PasswordIcon from '../../../assets/icons/Password_Icon.svg' ;
import EyeClosed from '../../../assets/icons/password_closed.svg' ;
import UnChecked from '../../../assets/icons/unchecked.svg' ;
import Checked from '../../../assets/icons/checked.svg' ;
import { HeadingText } from '../../../components/CustomTextComponent';
import CustomTextInput from '../../../components/CustomTextInput';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/core';


const DriverLogin = () => {

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('DriverCreate');
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#FFCC2A'/>
        <View style={styles.arrow}>
          <Arrow/>
        </View>
      <View style={styles.heading}>
      <HeadingText text="Welcome back!" style={{
        fontSize:20
      }}/>
      <Text style={styles.subheading}>
        Login to your <Text style={{
          fontFamily:"SatoshiBold"
        }}>driver</Text> account
      </Text>
      </View>

      <View style={styles.login}>
      <CustomTextInput
        iconLeft={<Mail width={16} height={12} />}
       
        placeholder="Email Address"
        // onChangeText={setText}
        // value={text}
      />
      <View style={{
        marginTop:11
      }}>
      <CustomTextInput
        iconLeft={<PasswordIcon width={17} height={15} />}
        iconRight={<EyeClosed width={16} height={12} />}
        placeholder ="Password"
        // onChangeText={setText}
        // value={text}
      />
      </View>
      <View style={styles.forgot}>
      <View style={{
        flexDirection:'row',
        
      }}>
       <UnChecked/>
       <Text style={{
        fontFamily:"SatoshiBold",
        fontSize:11,
        marginLeft:8,
        color:"#202020"
      }} > 
        Remember Login
        </Text> 
      </View>

      <Text style={{
        fontFamily:"SatoshiBold",
        fontSize:11,
        color:"#202020"
      }}>Forgot Your Password?</Text>
      </View>
      </View>
      <View style={styles.button}>
    
        <Button text={"Log In"} handlePress={handleSignUp} style={{
          width:330
        }}
        />
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUp} >
            New To Buga? Sign Up!
        </Text>
        </TouchableOpacity>
        </View>
      
    </SafeAreaView>
  )
}

export default DriverLogin

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  arrow:{
    marginTop:24,
    marginLeft:19
  },
  heading:{
    marginTop:55
  },
  subheading:{ 
    fontFamily:"SatoshiMedium",
    fontSize:18,
    lineHeight:18,
    color:"Black",
    textAlign:'center'
  },
  login:{
    marginTop:63
  },
  forgot:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:11,
    marginHorizontal:44,
  },
  button:{
    marginTop:60,
    alignSelf:'center',
    fontFamily:"SatoshiBold"
    },
  signUp:{
    textAlign:'center',
    fontFamily:"SatoshiMedium",
    fontSize:15,
    color:"black",
    textDecorationLine:'underline',
    marginTop:16
    }   
})