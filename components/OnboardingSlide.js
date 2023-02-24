import { StyleSheet, Text, View, Image, useWindowDimensions, ImageBackground, TouchableOpacityComponent, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from './Button';



const OnboardingSlide = ({ item } ) => {

    const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]} >
    <ImageBackground source={item.imgUrl} style= {styles.background} >
        <LinearGradient 
        start={{x: 10, y: 0.5}} end={{x: 1, y: 1}} 
        colors={[ 'white' , 'black']} 
        style={styles.overlay} />        
        <View style= {styles.text}>
                <Text style={styles.header}>
                {item.title}
                </Text>
                <Text style={styles.smalltext}>
                {item.subtitle}    
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
    buttonText:{
        fontSize:15,
        paddingHorizontal:55,
        paddingVertical:8,
        borderRadius:7,
        color:"black",
        fontFamily:"SatoshiMedium"
    },
    buttonPressed: {
        backgroundColor: 'red',
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