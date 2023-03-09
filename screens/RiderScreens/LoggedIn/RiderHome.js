import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoggedInHeader from '../../../components/LoggedInHeader'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import Mail from '../../../assets/icons/Mail_icon.svg'
import RiderSelectNav from '../../../components/RiderSelectNav'
import RiderBottomMenu from '../../../components/RiderBottomMenu'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core';
import ScheduledRiderNav from '../../../components/ScheduledRiderNav'
import FriendSplitFareModal from './FriendSplitFareModal'


const RiderHome = () => {

  const [user, setUser] = useState(null)

  const navigation = useNavigation();

  const handleSchedule=()=>{
    setScheduled(true)
    setOrdernow(false)
  }
  const handleOrder=()=>{
    setScheduled(false)
    setOrdernow(true)
  }

  const [ordernow, setOrdernow] = useState(true)
  const [scheduled, setScheduled] = useState(false)



  useEffect(() => {
    async function fetchUser() {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
    fetchUser();
  }, []);




  
  return (
    <SafeAreaView>

      <LoggedInHeader
        walletBalance= {`₦${user?.user?.wallet_balance}`}
        userName={user?.user?.name}
        bottomText="Top Up" />

      <View style={{
        flexDirection: 'row',
        marginTop: 45,
        marginHorizontal: 49,
        justifyContent: 'space-around'
      }}>
        <TouchableOpacity style={{
          borderBottomColor: "#FDD247",
          borderBottomWidth: ordernow ? 2: 0,
          paddingBottom: 8
        }}
        onPress={handleOrder}
        >
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 16,

          }}>Order Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          borderBottomColor: "#FDD247",
          paddingBottom: 8,
          borderBottomWidth: scheduled ? 2: 0,

        }}
        onPress={handleSchedule}
        >
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 16,

          }}>Schedule Trip</Text>
        </TouchableOpacity>
      </View>
      <ScrollView scrollEnabled={true}>
      <View style={{
        marginTop: 10,
        marginLeft: 16
        
      }}>
        <HeadingText text="Ready To Move?" style={{
          textAlign: "left",
          marginBottom: 2,
          fontSize: 24
        }} />
        <SubText text="Select Your ridse" style={{
          color: "#A6A2A2",
          textAlign: "left",
          fontSize: 14
        }} />
      </View>
      <FriendSplitFareModal/>

      { ordernow && <RiderSelectNav/>}
      { scheduled && <ScheduledRiderNav/>}
      </ScrollView>
      <RiderBottomMenu/>
    </SafeAreaView>
  )
}

export default RiderHome

const styles = StyleSheet.create({})