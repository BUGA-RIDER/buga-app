import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import assets from '../../../constants/assets'

const Login = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#FFCC2A'/>
      <View>
        <Image
          source ={assets.arrowback}
        />
      </View>
      <Text>Login</Text>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})