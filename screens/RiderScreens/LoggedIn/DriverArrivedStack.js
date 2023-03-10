import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import Economy from '../../../assets/icons/Economy.svg'
import Name from '../../../assets/icons/name.svg'
import Star from '../../../assets/icons/star.svg'
import Money from '../../../assets/icons/money.svg'
import From from '../../../assets/icons/from.svg'
import Chat from '../../../assets/icons/chat.svg'
import Phone from '../../../assets/icons/Phone_Icon.svg'
import Safety from '../../../assets/icons/safety.svg'
import Return from '../../../assets/icons/return.svg'
import Cancel from '../../../assets/icons/cancel.svg'
import { useNavigation } from '@react-navigation/core';
import SafetyTips from './SafetyTips'

const DriverArrivedStack = () => {
    const navigation = useNavigation();
  
  const handleNext = ()=>{
    navigation.navigate('DriverArrivedStack')
}
return (
    <View style={{flex:1, backgroundColor:"white", borderTopLeftRadius:50, borderTopRightRadius:50}}>
      <View style={{
        flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     paddingHorizontal:40,
     paddingVertical:20,
     borderTopLeftRadius:50, borderTopRightRadius:50,
     backgroundColor:"#FFF7DD"
      }}>
        <Text style={{
            fontFamily:"SatoshiBold",
            fontSize:22,
        }}>Taiwo has arrived!</Text>
        <View  style={{
                    alignSelf:'flex-end',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    
                    shadowOffset: {
                        height: 5,
                        width: 5,
                    },
                    shadshadowowOpacity: 0.2,
                    shadowRadius: 15.84,
                    elevation: 3,
                    backgroundColor: "#fff", // add a background color for the shadow
                    Color: "#000",
                }} >
                    <Safety width={30} height={30} />
                </View>
      </View>
      <View style={{
        width:"100%",
        height:1,
        backgroundColor:"#5C5C5C",
        opacity:0.3,
      }}/>

<View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:18,
        marginTop:18,
                }} >
      <View style={{
        flexDirection:'row',
        alignItems:'center'
      }}>
        <View >
            <Name width={60} height={60}/>
            <Star width={30} height={30} style={{
                position:"absolute",
                right:0,
                bottom:25
            }}/>
        <Text style={{
            textAlign:'center',
            fontFamily:"SatoshiBold",
            padding:3,
            borderRadius:20,
            backgroundColor:"#FFCC2A"
        }}>Verified</Text>
        </View>
        <View style={{
            marginLeft:10
        }}>
            <Text style={{
                fontFamily:"SatoshiBold",
                fontSize:18,
                marginBottom:3
            }}>Adekoya Taiwo </Text>
            <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:13,
                color:"#767676",
                marginBottom:1
            }} >Toyota Camry</Text>

            <View style={{
                flexDirection:"row",
                alignItems:'center'
            }}>
               
            <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:13,
                color:"#767676"
            }}  >APP 888 HG</Text>
            </View>
        </View>
      </View>
      
      <View>
       <Economy/>
       <Text style={{
                fontFamily:"SatoshiBold",
                fontSize:18,
                marginBottom:3,
                textAlign:'right'
            }}>Economy Basic </Text>
      </View>
    </View>
    <View style={{
                marginTop:30,
            
                marginBottom: 12,
                borderRadius:10,
                marginHorizontal:18,
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
                          }} >Cash</Text>
                    </View>
                    <Text style={{
                              fontFamily: "SatoshiBold",
                              fontSize: 15,
                          }} >₦4600</Text>
                </View>  
            </View>

            <View style={{flexDirection:'row', marginHorizontal:50, justifyContent:'space-between', marginTop:25}}>
                <View style={{alignItems:'center',}}>
                    <View style={{padding:12, backgroundColor:"#EFEDED", borderRadius:25}}>
                    <Chat/>
                    </View>
                    <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                    }}>Message</Text>
                    <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                    }}>Driver</Text>
                </View>
                <View style={{alignItems:'center',}}>
                    <View style={{padding:12, backgroundColor:"#EFEDED", borderRadius:25}}>
                    <Phone/>
                    </View>
                    <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                    }}>Contact</Text>
                    <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                    }}>Driver</Text>
                </View>
                <TouchableOpacity style={{alignItems:'center',}}>
                    <View style={{padding:12, backgroundColor:"#EFEDED", borderRadius:25}}>
                    <Safety/>
                    </View>
                    <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                    }}>Safety</Text>
                    <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                    }}>Tips</Text>
                </TouchableOpacity>
                <SafetyTips/>
                <View style={{alignItems:'center',}}>
                    <View style={{padding:12, backgroundColor:"#EFEDED", borderRadius:25}}>
                    <Return/>
                    </View>
                    <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                    }}>Share Ride</Text>
                    <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                    }}>Details</Text>
                </View>
            </View>
            <TouchableOpacity style={{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                marginTop:30
            }}>
            <Cancel/> 
            <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                    }} >Cancel Trip</Text>
            </TouchableOpacity>
    </View>
  )
}

export default DriverArrivedStack

const styles = StyleSheet.create({})