import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeadingText, SubText } from './CustomTextComponent'
import Mail from "../assets/icons/Mail_icon.svg"


const RiderSelectNav = () => {
  return (
    <View style={{
    }}>
    <View style={{
        flexDirection:'row',
        justifyContent: 'space-around',
        padding:10
    }}>

      <View style={{
        marginHorizontal: 16,
        flexDirection: 'row',
        marginTop: 16
      }}>
        <View style={{
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
            <Mail width={115} height={73} style={{
            }} />
          </View>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
            marginTop: 5
          }}>Economy</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
            paddingBottom: 8
          }}>Shared Ride</Text>
        </View>
      </View>  
      <View style={{
        marginHorizontal: 16,
        flexDirection: 'row',
        marginTop: 16
      }}>
        <View style={{
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
            <Mail width={115} height={73} style={{
            }} />
          </View>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
            marginTop: 5
          }}>Economy</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
            paddingBottom: 8
          }}>Shared Ride</Text>
        </View>
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
        <View style={{
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
            <Mail width={115} height={73} style={{
            }} />
          </View>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
            marginTop: 5
          }}>Economy</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
            paddingBottom: 8
          }}>Shared Ride</Text>
        </View>
      </View>  
      <View style={{
        marginHorizontal: 16,
        flexDirection: 'row',
        marginTop: 16
      }}>
        <View style={{
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
            <Mail width={115} height={73} style={{
            }} />
          </View>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 18,
            marginLeft: 10,
            marginTop: 5
          }}>Economy</Text>
          <Text style={{
            fontFamily: "SatoshiMedium",
            fontSize: 12,
            marginLeft: 10,
            color: "#A7A7A7",
            paddingBottom: 8
          }}>Shared Ride</Text>
        </View>
      </View>  
        
      </View>
      </View>
  )
}

export default RiderSelectNav

const styles = StyleSheet.create({})