import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputSplitPrice from '../../../components/InputSplitPrice'
import { DATA } from '../../../constants/spitcontacts'
import { Button } from '../../../components/Button'
import Chat from '../../../assets/icons/chat.svg';
import Telephone from '../../../assets/icons/telephone.svg';
import InputSplitPriceLoading from '../../../components/InputSplitPriceLoading'


const SplitFarePayment = () => {
    return (
        <SafeAreaView style={{
          flex:1, 
          backgroundColor:"white"
        }}>
          <Text  style={{
            fontFamily:"SatoshiBold",
            fontSize:20,
            alignSelf:'center',
            marginTop:20
          }}>Split Fare Price</Text>
                <View style={{
                        alignSelf:'flex-end',
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        marginRight:31,
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
                        <Text style={{
                            fontFamily: "SatoshiBold",
                            fontSize: 15,
                            paddingHorizontal: 8,
                            paddingVertical: 10,
                            backgroundColor: "#FFCC2A"
                        }} >Arrived</Text>
                    </View>
                    <Text style={{
                      fontFamily: "SatoshiMedium",
                      fontSize: 18,
                      textAlign:'center'
                    }}>Total Ride Amount</Text>
                    <Text style={{
                      fontFamily: "SatoshiBold",
                      fontSize: 30,
                      textAlign:'center',
                      marginTop:20
                    }}>₦12000</Text>
                    <Text style={{
                      fontFamily: "SatoshiMedium",
                      fontSize: 18,
                      textAlign:'center',
                      marginTop:35
                    }}>Specify exactly how much each person owes</Text>
                     <FlatList 
            data={DATA}
            renderItem={({ item }) => <InputSplitPriceLoading data={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 0, marginTop:25 }} />

                <Text style={{
                    fontFamily: "SatoshiMedium",
                    fontSize: 14,
                    textAlign:'center',
                    marginBottom:25
                }}>You will have to pay the portion of any failed or rejected request</Text>

                <View style={{
                        paddingHorizontal:28,
                        paddingTop:50,
                        paddingBottom:70,
                        shadowOffset: {
                            height: 8,
                            width: 3,
                        },
                        shadshadowowOpacity:0.5 ,
                        shadowRadius: 40,
                        elevation: 10,
                        backgroundColor: "#fff", // add a background color for the shadow
                        shadowColor: "black",
                }}> 
            <View style={{
                backgroundColor:"white",
                paddingHorizontal:18,
                paddingVertical:23,
                justifyContent:'space-around',
                shadowOffset: {
                    height: 8,
                    width: 3,
                },
                shadshadowowOpacity:0.1 ,
                shadowRadius: 5,
                elevation: 3,
                backgroundColor: "#fff", // add a background color for the shadow
                shadowColor: "black",
            }} >
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                }} >
            <Text  style={{
            fontFamily:"SatoshiBold",
            fontSize:18,
            alignSelf:'center',
          }}>Taiwo Has Arrived!</Text>
          
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:"45%"}}>
          <Chat/>
          <Telephone/>
          <Text style={{
                            fontFamily: "SatoshiBold",
                            fontSize: 15,
                            paddingHorizontal: 8,
                            paddingVertical: 10,
                            backgroundColor: "#FFCC2A"
                        }} >Arrived</Text>
          </View>

            </View>

                </View>
                </View>
                    
        </SafeAreaView>
      )
}

export default SplitFarePayment

const styles = StyleSheet.create({})