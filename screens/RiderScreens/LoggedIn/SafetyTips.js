import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'

import Safety from '../../../assets/icons/safety.svg'
import Security from '../../../assets/icons/security.svg'
import To from '../../../assets/icons/to.svg'
import Money from '../../../assets/icons/money.svg'
import SafetyTipsComponent from '../../../components/SafetyTipsComponent'

const SafetyTips = () => {
  // We need to get the height of the phone and use it relatively, 
  // This is because height of phones vary
  const windowHeight = Dimensions.get('window').height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Function to open the bottom sheet 
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

    // Function to close the bottom sheet
    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
      };
  
  return (
    <Modal
        animationType="slide"
        transparent={true}
        // We use the state here to toggle visibility of Bottom Sheet 
        visible={isBottomSheetOpen}
        // We pass our function as default function to close the Modal
        onRequestClose={handleCloseBottomSheet} >

    <View style={[styles.bottomSheet, { height: windowHeight * 0.68 }]}>

      <View>
        <TouchableOpacity onPress={handleCloseBottomSheet}>
        </TouchableOpacity>
      </View>

      <View style={{ paddingVertical: 15, flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal:10 }}>
        <HeadingText text={'Safety Tips as you ride with us'} style={{
          fontSize: 18,
          marginBottom: 10,
          marginTop: 10,
        }} />
            <View style={{
                padding:12,
                borderRadius:30,
                backgroundColor:"#FFE79A"
            }}>
              <Security width={20} height={20} />
              </View>

      </View>
        <View style={{
        width:"100%",
        height:1,
        backgroundColor:"#5C5C5C",
        opacity:0.3,
        marginBottom:25
      }}/>

      <SafetyTipsComponent header={'Stay safe before the driver arrives'} icon={<Security/>} subText={"Avoid dark allies and street corners especially at night."} style={{ backgroundColor:"#C2D0FF" }} />
      <SafetyTipsComponent header={'Double Check'} icon={<Security/>} subText={"Double car details and registration plate."} style={{ backgroundColor:"#FFC1C1" }}  />
      <SafetyTipsComponent header={'Driver Identity'} icon={<Security/>} subText={"Ensure that the person behind the wheel is the same as on the profile."}  style={{ backgroundColor:"#DAFFB5" }} />
      <SafetyTipsComponent header={'Buckle In'} icon={<Security/>} subText={"Ensure that your seatbelt is fastened throughout the ride."}  style={{ backgroundColor:"#FFE79A" }} />
      <SafetyTipsComponent header={'Keep Loved Ones in the Loop'} icon={<Security/>} subText={"Share your trip details with loved ones so that they can keep track of your journey."}  style={{ backgroundColor:"#FFB89A" }} />
      <SafetyTipsComponent header={'Our in-app Safety & Security Features'} icon={<Security/>} subText={"Ensure that your "}  style={{ backgroundColor:"#E59AFF" }} />
      </View>
  </Modal>
  )
}

export default SafetyTips

const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 0,
        paddingHorizontal: 25,
        bottom: 0,
      },
})