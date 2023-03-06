import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { HeadingText, SubText } from './CustomTextComponent'
import Mail from "../assets/icons/information-circle.svg"
import Economy_Car from "../assets/icons/Economy.svg"
import First_Class from "../assets/icons/First-Class.svg"
import Keke from "../assets/icons/E-trike.svg"
import Inter_state_car from "../assets/icons/Inter-state.svg"
import { Button } from './Button'

const ScheduledRiderNav = () => {
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
    <View>
      {/* first row */}
      <View style={styles.top}>

        {/* first collumn */}

        <View style={{ marginHorizontal: 16, flexDirection: 'row', marginTop: 1 }}>
          <TouchableOpacity style={{ backgroundColor: "white", }}           onPress={handleOpenBottomSheet}
 >
            <Mail style={{ marginTop: 6, alignSelf: 'flex-end', marginRight: 8 }} />

            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>

              <Economy_Car />
            </View>
            <Text style={styles.textTop}>Economy</Text>
            <Text style={styles.textBottom}>Shared Ride</Text>
          </TouchableOpacity>
        </View>
        {/* //2nd nav  */}
        <View style={{
          marginHorizontal: 16,
          marginTop: 16
        }}>
          <TouchableOpacity style={{
            backgroundColor: "white",
          }}>

            <Mail style={{
              marginTop: 6,
              alignSelf: 'flex-end',
              marginRight: 8
            }} />
            <View style={{
              paddingHorizontal: 10,
              paddingVertical: 10
            }}>
              <First_Class />
            </View>
            <Text style={styles.textTop}>First Class</Text>
            <Text style={styles.textBottom}>Single Passenger</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* first row */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 15
      }}>

        {/* first collumn */}

        <View style={{
          marginHorizontal: 16,
          flexDirection: 'row',
          marginTop: 16
        }}>
          <TouchableOpacity style={{
            backgroundColor: "#CACACA",
          }}>

            <Mail style={{
              marginTop: 6,
              alignSelf: 'flex-end',
              marginRight: 8
            }} />
            <View style={{
              paddingHorizontal: 25,
              paddingVertical: 5
            }}>
              <Keke />
            </View>
            <View style={{
                flexDirection:'row'
            }}>
            <View>
            <Text style={styles.textTop}>Economy</Text>
            <Text style={styles.textBottom}>Shared Ride</Text></View>
            <View style={{
                alignSelf:'center',
                marginTop:5,
                marginLeft:40,
                backgroundColor:"#FFD1D1",
                paddingHorizontal:8,
                paddingVertical:4
            }}>
            <SubText text={"N/A"} style={{
                fontSize:13
            }}/></View>
            </View>
          </TouchableOpacity>


        </View>
        {/* //2nd nav  */}
        <View style={{
          marginHorizontal: 16,
          marginTop: 16
        }}>
          <TouchableOpacity style={{
            backgroundColor: "white",
          }}>

            <Mail style={{
              marginTop: 6,
              alignSelf: 'flex-end',
              marginRight: 8
            }} />

            <View style={{
              paddingHorizontal: 20,
              paddingVertical: 15
            }}>
              <Inter_state_car />
            </View>
            <Text style={styles.textTop}>First Class</Text>
            <Text style={styles.textBottom}>Single Passenger</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default ScheduledRiderNav

const styles = StyleSheet.create({
    top: {
        marginHorizontal: 16,
        flexDirection: 'row',
        marginTop: 16
      },
      textBottom: {
        fontFamily: "SatoshiMedium",
        fontSize: 12,
        marginLeft: 10,
        color: "#A7A7A7",
        paddingBottom: 8
      },
      textTop: {
        fontFamily: "SatoshiMedium",
        fontSize: 18,
        marginLeft: 10,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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