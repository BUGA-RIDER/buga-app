import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoggedInHeader from '../../../components/LoggedInHeader'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import Mail from '../../../assets/icons/Mail_icon.svg'
import RiderSelectNav from '../../../components/RiderSelectNav'

const RiderHome = () => {
  return (
    <SafeAreaView>

      <LoggedInHeader
        walletBalance="₦15,235"
        userName="Öreoluwa"
        bottomText="Top Up" />

      <View style={{
        flexDirection: 'row',
        marginTop: 50,
        marginHorizontal: 49,
        justifyContent: 'space-around'
      }}>
        <TouchableOpacity style={{
          borderBottomColor: "#FDD247",
          borderBottomWidth: 2,
          paddingBottom: 8
        }}>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 16,

          }}>Order Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          borderBottomColor: "#FDD247",
          paddingBottom: 8
        }}>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 16,

          }}>Schedule Trip</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        marginTop: 20,
        marginLeft: 16

      }}>
        <HeadingText text="Ready To Move?" style={{
          textAlign: "left",
          marginBottom: 2,
          fontSize: 24
        }} />
        <SubText text="Select Your ride" style={{
          color: "#A6A2A2",
          textAlign: "left",
          fontSize: 14
        }} />
      </View>
      <RiderSelectNav/>
    </SafeAreaView>
  )
}

export default RiderHome

const styles = StyleSheet.create({})