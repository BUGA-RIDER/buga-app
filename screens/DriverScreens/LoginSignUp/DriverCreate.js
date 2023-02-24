import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'

const DriverCreate = () => {
  return (
    <SafeAreaView>
        <View style={styles.top}>
        <HeadingText text="Create a driver account" /> 
        <SubText text="It’ll only take a minute"/> 
        </View>
        <View>
            
        </View>
    </SafeAreaView>
  )
}

export default DriverCreate

const styles = StyleSheet.create({
    top:{
        marginTop:64,

    }
})