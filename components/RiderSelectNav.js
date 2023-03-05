import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeadingText, SubText } from './CustomTextComponent'
import Mail from "../assets/icons/information-circle.svg"
import Economy_Car from "../assets/icons/Economy.svg"
import First_Class from "../assets/icons/First-Class.svg"
import Keke from "../assets/icons/E-trike.svg"
import Inter_state_car from "../assets/icons/Inter-state.svg"


const RiderSelectNav = () => {
  return (
    <View style={{
    }}>
      {/* first row */}
    <View style={{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginHorizontal:15
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
            paddingHorizontal:10,
            paddingVertical:10
          }}>
            <Economy_Car />
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
          <View style={{
            paddingHorizontal:10,
            paddingVertical:10
          }}>
            <First_Class />
            </View>
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
        marginHorizontal:15
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
            paddingHorizontal:25,
            paddingVertical:5
          }}>
            <Keke/>
            </View>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginTop:17,
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

          <View style={{
            paddingHorizontal:20,
            paddingVertical:15
          }}> 
            <Inter_state_car />
            </View>
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