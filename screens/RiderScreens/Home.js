import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const bgIMG = require('../../assets/bg.jpeg');

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgIMG} style= {styles.background} >
        <View style={styles.picker}>
            <Text style={styles.rider}>
                Rider
            </Text>
            <Text style={styles.driver}>
                Driver
            </Text>
        </View>
        <View style= {styles.text}>
                <Text style={styles.header}>
                Hassle-free rides to and from school.
                </Text>
                <Text style={styles.smalltext}>
                Say goodbye to the stress of finding reliable transportation and hello to the convenience of our ride-hailing app.                </Text>
            </View>
        </ImageBackground>
    </View>
  );
};

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
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
        fontSize:30,
        fontWeight:"700",
        lineHeight: 38,
        textAlign:'left',
        color:"white",
        marginBottom:10,
        fontFamily:"SatoshiRegular"
    },
    smalltext:{
        fontSize:16,
        fontWeight:"700",
        lineHeight: 20,
        textAlign:'left',
        color:"white",
        fontFamily:"SatoshiVariable",
        marginRight:20
    },
});