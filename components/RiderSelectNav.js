import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeadingText, SubText } from './CustomTextComponent'
import Mail from "../assets/icons/Mail_icon.svg"
import Economy_Car from "../assets/icons/Economy_Car.svg"
import First_Class from "../assets/icons/First_Class_Car.svg"
import Keke from "../assets/icons/KEKE.svg"
import Inter_state_car from "../assets/icons/Inter_state_car.svg"


const RiderSelectNav = () => {
  return (
    <View style={{
    }}>
    <View style={{
        flexDirection:'row',
        justifyContent: 'space-around',
    }}>

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
            marginHorizontal: 12
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
            marginHorizontal: 24
          }}>
            <First_Class  />
          </View>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
            marginTop: 5
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

      {/* //second column */}

    <View style={{
        flexDirection:'row',
        marginBottom:10,
        justifyContent: 'space-around',
        padding:10
    }}>

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
            marginHorizontal: 12
          }}>
            <Keke/>
          </View>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
            marginTop: 5
          }}>Intra-School</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
          }}>Intra-School</Text>
        </TouchableOpacity>
      </View>  
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
            marginHorizontal: 24
          }}>
            <Inter_state_car />
          </View>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
            marginTop: 5
          }}>Inter-State</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
            paddingBottom: 8
          }}>Shared 7 Seater</Text>
        </TouchableOpacity>
      </View>  
        
      </View>
      </View>
  )
}

export default RiderSelectNav

const styles = StyleSheet.create({})