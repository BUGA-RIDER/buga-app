import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeadingText, SubText } from './CustomTextComponent'
import Mail from "../assets/icons/information-circle.svg"
import Economy_Car from "../assets/icons/Economy_Car.svg"
import First_Class from "../assets/icons/First_Class_Car.svg"
import Keke from "../assets/icons/KEKE.svg"
import Inter_state_car from "../assets/icons/Inter_state_car.svg"


const RiderSelectNav = () => {
  return (
    <View style={{
    }}>
      {/* first row */}
    <View style={{
        flexDirection:'row',
        justifyContent: 'space-around',
    }}>

      {/* first collumn */}

      <View style={{
        marginHorizontal: 16,
        flexDirection: 'row',
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
            <Economy_Car />
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
          }}>Economy</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
            paddingBottom: 8
          }}>Shared Ride</Text>
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
            <First_Class />
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
          }}>First Class</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
            paddingBottom: 8
          }}>Single Passenger</Text>
        </TouchableOpacity>
      </View> 
      </View>
      {/* first row */}
    <View style={{
        flexDirection:'row',
        justifyContent: 'space-around',
    }}>

      {/* first collumn */}

      <View style={{
        marginHorizontal: 16,
        flexDirection: 'row',
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
            paddingHorizontal:30,
            paddingVertical:20
          }}>
            <Keke />
            </View>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
          }}>Economy</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
            paddingBottom: 8
          }}>Shared Ride</Text>
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
            <Inter_state_car />
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
          }}>First Class</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
            paddingBottom: 8
          }}>Single Passenger</Text>
        </TouchableOpacity>
      </View> 
      
      </View>

      {/* //2nd column */}

      </View>
  )
}

export default RiderSelectNav

const styles = StyleSheet.create({})