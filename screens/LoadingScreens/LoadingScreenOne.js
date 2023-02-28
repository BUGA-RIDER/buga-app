import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeadingText, SubText } from '../../components/CustomTextComponent'
import Spinner from '../../assets/icons/spinner.svg'
import {useNavigation} from "@react-navigation/core"

const LoadingScreenOne = () => {

    const navigation = useNavigation();

    const successful = ()=>{
        navigation.navigate('Successful')
    }

    const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 10);
    }, 50);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <SafeAreaView style={styles.container} >
    <Spinner 
    style={[styles.spinner, { transform: [{ rotate: `${rotation}deg` }] }]}/>
      <TouchableOpacity onPress={successful}>
      <HeadingText text="Just a sec" />
      <SubText text="Submitting your documents" 
      style={{
        color:"#9A9A9A"
      }}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoadingScreenOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
     },
     spinner: {
        width: 70,
        height: 70,
        marginBottom:25,
        justifyContent:'flex-end',
      },
})