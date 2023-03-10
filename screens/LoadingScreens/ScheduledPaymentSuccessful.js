import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeadingText, SubText } from '../../components/CustomTextComponent'
import Submitted from '../../assets/icons/submitted.svg'
import Name from '../../assets/icons/name.svg'
import Star from '../../assets/icons/star.svg'
import Economy from '../../assets/icons/Economy.svg'
import From from '../../assets/icons/from.svg'
import Money from '../../assets/icons/money.svg'
import {useNavigation} from '@react-navigation/core'

const ScheduledPaymentSuccessful = () => {
    const navigation = useNavigation()

    const handleHome = ()=>{
      navigation.navigate('DriverEnRoute')
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.first}>
            <HeadingText
              text="Payment Successful"
              style={{
                fontSize: 23,
                color: "black",
                lineHeight: 30,
                marginHorizontal: 26,
                alignText: "center",
              }}
            />
        <Submitted style={{
          marginBottom:23
        }}/>
        <HeadingText
              text="Your Ride is Scheduled!"
              style={{
                fontSize: 23,
                color: "black",
                lineHeight: 30,
                marginHorizontal: 26,
                alignText: "center",
              }}
            />
            <HeadingText text={"Mon 22 Feb, 3:00 PM"} style={{
                fontSize:16,
                paddingHorizontal:10,
                paddingVertical:8,
                backgroundColor:"#FFCC2A",
                alignSelf:"center",
                borderRadius:5
            }} />
        </View>

        <Text style={{
            fontFamily:"SatoshiBold",
            fontSize:23,
            marginLeft:18
        }} >Trip Details</Text>


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
                fontSize:15,
                color:"#767676",
                marginBottom:1
            }} >Toyota Camry</Text>

            <View style={{
                flexDirection:"row",
                alignItems:'center'
            }}>
               
            <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:15,
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
                backgroundColor:"#FFF7DD",
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
            <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        marginHorizontal:37
      }}>
          <TouchableOpacity style={{
              paddingHorizontal:20,
              paddingVertical:15,
              backgroundColor:"#FFCC2A",
              borderRadius:5
          }}
          onPress={handleHome}
          >
              <Text style={{
                  fontFamily:"SatoshiBold",
                  fontSize:18,
                  marginBottom:3,
                  textAlign:'right'
              }} >Message Driver</Text>
              </TouchableOpacity>
        <TouchableOpacity style={{
            paddingHorizontal:45,
            paddingVertical:15,
            borderColor:"#FFCC2A",
            borderWidth:1,
            borderRadius:5
        }}>
            <Text style={{
                fontFamily:"SatoshiBold",
                fontSize:18,
                marginBottom:3,
                textAlign:'right'
            }} >Go Home</Text>
            </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
}

export default ScheduledPaymentSuccessful

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
     },
     first:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:70
     },
     buttonView:{
        marginTop:50,
        alignSelf:'center',  
    },
    buttonone:{
        width:280,
        backgroundColor:"#FFCC2A",
        paddingVertical:20,
        borderRadius: 5,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        marginBottom:10
    },
    buttontwo:{
        width:280,
        backgroundColor:"white",
        paddingVertical:20,
        borderRadius: 5,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:"#FFCC2A"
    },
    buttonText:{
        textAlign:'right',
        fontFamily:"SatoshiBold",
        fontSize:18,
        marginRight:8
    }})