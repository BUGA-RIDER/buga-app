import { StyleSheet, Text, View, Image, useWindowDimensions, ImageBackground, TouchableOpacityComponent, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from './Button';
import { useNavigation } from '@react-navigation/core';

const OnboardingSlide = ({ item } ) => {

    const navigation = useNavigation();
    const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]} >
    <ImageBackground source={item.imgUrl} style= {styles.background} >
        <LinearGradient 
        start={{x: 10, y: 0.5}} end={{x: 1, y: 1}} 
        colors={[ 'white' , 'black']} 
        style={styles.overlay} />
        <View style={styles.picker}>
            
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} >
            <Text style={styles.rider}>
                Rider
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("DriverHome")} >
            <Text style={styles.driver}>
                Driver
            </Text>
            </TouchableOpacity>
        </View>
        <View style= {styles.text}>
                <Text style={styles.header}>
                {item.title}
                </Text>
                <Text style={styles.smalltext}>
                {item.subtitle}    
                </Text>       
        </View>        
        <View style={styles.button}>
        <Button text={"Log In"}/>
        <Text style={styles.signUp} >
            New To Buga? Sign Up!
        </Text>
        </View>

        </ImageBackground>
     </View>
  );
};

export default OnboardingSlide

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        opacity:0.5,
        borderRadius: 25,
      },
    background: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    picker:{
        top:62,
        flex:0,
        width:286,
        backgroundColor:"white",
        flexDirection:"row",
        alignSelf:'center',
        justifyContent:'space-around',
        borderRadius:5,
        paddingHorizontal:0,
        paddingVertical:5
    },
    rider:{
        fontSize:15,
        paddingHorizontal:55,
        paddingVertical:8,
        backgroundColor:"black",
        borderRadius:7,
        color:"white",
        fontFamily:"SatoshiMedium"
    },
    driver:{
        fontSize:15,
        paddingHorizontal:45,
        paddingVertical:8,
        backgroundColor:"white",
        borderRadius:7,
        fontWeight:"300",     
        fontFamily:"SatoshiMedium"
    },
    text:{
        position:'absolute',
        bottom:250,
        flex:1,
        margin:16
    },
    header:{
        fontSize:35,
        lineHeight: 38,
        textAlign:'left',
        color:"white",
        marginBottom:10,
        fontFamily:"SatoshiMedium"
    },
    smalltext:{
        fontSize:18,
        lineHeight: 20,
        textAlign:'left',
        color:"white",
        fontFamily:"SatoshiMedium",
        marginRight:20
    },
    button:{
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
});