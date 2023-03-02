import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoggedInHeader from '../../../components/LoggedInHeader'

const RiderHome = () => {
  return (
    <SafeAreaView>

        <LoggedInHeader 
        walletBalance="₦15,235"
        userName="Öreoluwa"
        bottomText="Top Up"/>
          </SafeAreaView>
  )
}

export default RiderHome

const styles = StyleSheet.create({})