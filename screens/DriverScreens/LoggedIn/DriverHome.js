import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Background from '../../../assets/icons/background.png'

const DriverHome = () => {
  return (
    <SafeAreaView>
      <View>
      <ImageBackground
        source={Background}
        style={styles.background}
      />
       </View>
    
    </SafeAreaView>
  )
}

export default DriverHome

const styles = StyleSheet.create({
  background:{
    resizeMode:'stretch',
    width:455,
    height:270,
    alignSelf:'center'
  }
})