import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import Economy from '../../../assets/icons/Economy.svg'
import Name from '../../../assets/icons/name.svg'
import Star from '../../../assets/icons/star.svg'
import Money from '../../../assets/icons/money.svg'
import From from '../../../assets/icons/from.svg'
import Cancel from '../../../assets/icons/cancel.svg'
import Greencheck from '../../../assets/icons/greencheck.svg'
import { useNavigation } from '@react-navigation/core';


const RideInProgress = () => {

    const navigation = useNavigation();
  
    const handleNext = ()=>{
      navigation.navigate('RiderArrivedStack')
  }
  return (
    <View style={{flex:1, backgroundColor:"white", borderTopLeftRadius:50, borderTopRightRadius:50}}>
      <View style={{
     paddingHorizontal:40,
     paddingVertical:20,
     borderTopLeftRadius:50, borderTopRightRadius:50,
     backgroundColor:"#D9FFDF"
      }}>
        <Text style={{
            fontFamily:"SatoshiBold",
            fontSize:16,
            textAlign:'center'
        }}>Ride in progress</Text>
        <Text style={{
            fontFamily:"SatoshiBold",
            fontSize:16,
            textAlign:'center',
            color:"#9B9B9B"
        }}>Estimated arrival time:<Text style={{color:"black"}} > 3:34 PM</Text> </Text>
    
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
                          <Greencheck/>
                          
                          <Text style={{
                              fontFamily: "SatoshiMedium",
                              fontSize: 15, paddingLeft: 13, }} >  <Text style={{color:"#9B9B9B"}} >Pickup from</Text> University</Text>
                      </View>
                      <View style={{
                          flexDirection: 'row', alignItems: 'center', paddingLeft: 21,
                          paddingVertical: 10, 
                      }}>
                          <From />

                          <View style={{
                            marginLeft:20
                          }}>
                          <Text style={{
                              fontFamily: "SatoshiMedium",
                              fontSize: 15, marginRight:25, textAlign:'left' }} >  <Text style={{color:"#9B9B9B"}} >Stop at</Text> Plot 47 Ogombo rd, Abraham  Adesanya, Lagos</Text>
                            </View>
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
            <TouchableOpacity onPress={handleNext} style={{
                flexDirection:'row',
                justifyContent:'center',
                alignSelf:'center',
                alignItems:'center',
                marginTop:10,
                padding:15,
                borderColor:"red",
                borderWidth:2,
                borderRadius:25
            }}>
            <Cancel/> 
            <Text style={{
                        fontFamily:"SatoshiMedium",
                        fontSize:12,
                        textAlign:'center',
                        marginLeft:15
                    }} >End Ride</Text>
            </TouchableOpacity>
    </View>
  )
}

export default RideInProgress

const styles = StyleSheet.create({})