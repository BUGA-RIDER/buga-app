import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputSplitPrice from '../../../components/InputSplitPrice'
import { DATA } from '../../../constants/spitcontacts'
import { Button } from '../../../components/Button'
import Asterisk from '../../../assets/icons/asterisk.svg';
import Close from '../../../assets/icons/close.svg';


const SplitOptions = () => {
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
      }}>Split Options</Text>
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
                        fontSize: 13,
                        marginBottom: 3
                    }} >Arriving in</Text>
                    <Text style={{
                        fontFamily: "SatoshiBold",
                        fontSize: 15,
                        paddingHorizontal: 8,
                        paddingVertical: 10,
                        backgroundColor: "#FFCC2A"
                    }} >3 Min</Text>
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
        renderItem={({ item }) => <InputSplitPrice data={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 0, marginTop:25 }} />

        <View style={{
            backgroundColor:"white",
           
            shadowOffset: {
                height: 8,
                width: 3,
            },
            shadshadowowOpacity:0.5 ,
            shadowRadius: 40,
            elevation: 10,
            backgroundColor: "#fff", // add a background color for the shadow
            shadowColor: "black",
        }} >
        <View >
        <Text  style={{
        fontFamily:"SatoshiBold",
        fontSize:23,
        alignSelf:'center',
        marginTop:20,
        marginBottom:17
      }}>0 of ₦12000</Text>
        </View>

                <Text style={{
                    fontFamily: "SatoshiBold",
                    fontSize: 14,
                    marginBottom: 35,
                    textAlign:'center'
                }} >₦12000 left to be split</Text>
            <Button text={"Send Request"}  style={{
                alignSelf:"center",
                marginBottom:40
            }}/>
            </View>
                
    </SafeAreaView>
  )
}

export default SplitOptions

const styles = StyleSheet.create({})