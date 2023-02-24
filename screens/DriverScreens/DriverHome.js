import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import OnboardingSlide from '../../components/OnboardingSlide'
import driveronboarding from '../../constants/driveronboarding'
import OnboardingHeader from '../../components/OnboardingHeader';
import { useOnboardingStore } from '../../stores/useOnboardingStore';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/core';

const DriverHome = () => {
    const navigation = useNavigation();
    const selectedOption = useOnboardingStore((state) => state.selectedOption);
    const handleLogin = () => {
        navigation.navigate('DriverLogin');
      };

  return (
    <View style={styles.container}>
        <OnboardingHeader/>
        {driveronboarding.map((item) => (
        <OnboardingSlide key={item.id} item={item} />
                ))}
            <View style={styles.button}>
        <Button text={"Log In"} handlePress={handleLogin}/>
        <Text style={styles.signUp} >
            New To Buga? Sign Up!
        </Text>
        </View>
        </View>
          );
};

export default DriverHome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },button:{
        position:'absolute',
        bottom:110,
        alignSelf:'center',
        },
    signUp:{
        textAlign:'center',
        fontFamily:"SatoshiMedium",
        fontSize:18,
        color:"white",
        textDecorationLine:'underline',
        marginTop:16
    }
})