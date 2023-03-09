import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { HeadingText } from '../../../components/CustomTextComponent'
import { Button } from '../../../components/Button';
import From from '../../../assets/icons/from.svg'
import To from '../../../assets/icons/to.svg'
import Money from '../../../assets/icons/money.svg'

const FriendSplitFareModal = ( ) => {

    // We need to get the height of the phone and use it relatively, 
  // This is because height of phones vary
  const windowHeight = Dimensions.get('window').height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

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

      <View style={{ paddingVertical: 15 }}>
        <HeadingText text={'Your friend Ore has requested to split the ride fare with you.'} style={{
          fontSize: 18,
          marginBottom: 20,
          marginTop: 10,
          marginRight: 40,
          marginLeft: 40,
        }} />

        <Text style={{
              fontFamily: "SatoshiBold",
              fontSize: 15
            }} >Trip Details</Text>

            <View style={{
                marginTop:10,
                backgroundColor:"#FFF7DD",
                marginBottom: 12,
                borderRadius:10
            }} >

                      <View style={{
                          flexDirection: 'row', alignItems: 'flex-end', paddingLeft: 21,
                          paddingVertical: 10
                      }}>
                          <From />
                          <Text style={{
                              fontFamily: "SatoshiMedium",
                              fontSize: 15, paddingLeft: 13,
                          }} >Covenant University</Text>
                      </View>
                      <View style={{
                          flexDirection: 'row', alignItems: 'flex-end', paddingLeft: 21,
                          paddingVertical: 10
                      }}>
                          <From />
                          <Text style={{
                              fontFamily: "SatoshiMedium",
                              fontSize: 15, paddingLeft: 13,
                          }} >46, Ogundiran street, Agege, Lagos</Text>
                      </View>
                      <View style={{
                          flexDirection: 'row', alignItems: 'flex-end', paddingLeft: 21,
                          paddingVertical: 10
                      }}>
                          <From />
                          <Text style={{
                              fontFamily: "SatoshiMedium",
                              fontSize: 15, paddingLeft: 13,
                          }} >Plot 2, Osapa London, Lekki, Lagos</Text>
                      </View>
                          
                          <View style={{
                            borderColor:"black",
                            borderBottomWidth:0.5,
                            marginHorizontal:25
                          }} />
                <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:25, marginTop:15, marginBottom:22}}>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Money/>
                    <Text style={{
                              fontFamily: "SatoshiMedium",
                              fontSize: 15,
                              marginLeft:10
                          }} >Total Cost</Text>
                    </View>
                    <Text style={{
                              fontFamily: "SatoshiBold",
                              fontSize: 15,
                          }} >₦12000</Text>
                </View>
                
            </View>

            <View></View>

          <Button style={{

          }} text={"Proceed"} />
      </View>
    </View>
  </Modal>
  )
}

export default FriendSplitFareModal

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