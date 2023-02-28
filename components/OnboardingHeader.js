import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/core';
import { useOnboardingStore } from '../stores/useOnboardingStore';

const OnboardingHeader = () => {
    const navigation =useNavigation();

    const selectedOption = useOnboardingStore((state) => state.selectedOption);
    const setSelectedOption = useOnboardingStore((state) => state.setSelectedOption);
  

    const handleRiderPress = () => {
        setSelectedOption('Rider');
        navigation.navigate('Home');
      };
    
      const handleDriverPress = () => {
        setSelectedOption('Driver');
        navigation.navigate('DriverOnboarding');
      };

    return (

    <View style={styles.picker}>
            
            <TouchableOpacity 
            onPress={handleRiderPress} >
            <Text style={[
                styles.buttonText, 
                selectedOption === 'Rider' && 
                styles.buttonPressed]}>
                Rider
            </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={handleDriverPress} >
            <Text style={[
                styles.buttonText,
                 selectedOption === 'Driver' && 
                 styles.buttonPressed]}>
                Driver
            </Text>
            </TouchableOpacity>
        </View>
  )
}

export default OnboardingHeader

const styles = StyleSheet.create({
    picker:{
        position:'absolute',
        zIndex:1,
        top:62,
        width:286,
        backgroundColor:"white",
        flexDirection:"row",
        alignSelf:'center',
        justifyContent:'space-around',
        borderRadius:5,
        paddingHorizontal:5,
        paddingVertical:5
    },
    buttonText:{
        fontSize:15,
        paddingHorizontal:55,
        paddingVertical:8,
        borderRadius:7,
        color:"black",
        fontFamily:"SatoshiMedium"
    },
    buttonPressed: {
        backgroundColor: 'black',
        color:"white"
      },
})