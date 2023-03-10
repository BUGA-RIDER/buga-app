import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import { Button } from '../../../components/Button';
import Safety from '../../../assets/icons/safety.svg'
import To from '../../../assets/icons/to.svg'
import Money from '../../../assets/icons/money.svg'

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

    <View style={[styles.bottomSheet, { height: windowHeight * 0.87 }]}>

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
              <Safety width={30} height={30} />

      </View>
        <View style={{
        width:"100%",
        height:1,
        backgroundColor:"#5C5C5C",
        opacity:0.3,
      }}/>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        marginTop: 23
      }}>
        <Safety/>

      <View style={{
        marginLeft:15
      }}>
        <Text style={{
            fontFamily:"SatoshiBold",
            fontSize:17
        }} >Stay safe before the driver arrives</Text>
        <Text  style={{
            fontFamily:"SatoshiMedium",
            fontSize:13,
            color:"#A0A0A0"
        }}  >Avoid dark allies and street corners especially at night.</Text>
        </View>
      </View>
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