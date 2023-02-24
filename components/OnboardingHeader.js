import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/core';

const OnboardingHeader = () => {
    const navigation =useNavigation();

    const [isRiderPressed, setIsRiderPressed] = useState(false);
    const [isDriverPressed, setIsDriverPressed] = useState(false);

    const handleRiderPress = () => {
        setIsRiderPressed(true);
        setIsDriverPressed(false);
        navigation.navigate("Home");
      };
    
      const handleDriverPress = () => {
        setIsRiderPressed(false);
        setIsDriverPressed(true);
        navigation.navigate("DriverHome");
      };

    return (

    <View style={styles.picker}>
            
            <TouchableOpacity 
            onPress={handleRiderPress} >
            <Text style={[
                styles.buttonText,
                isRiderPressed && styles.buttonPressed
                ]}>
                Rider
            </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={handleDriverPress} >
            <Text style={[
                styles.buttonText,
                isDriverPressed && styles.buttonPressed
                ]}>
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
        paddingHorizontal:0,
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