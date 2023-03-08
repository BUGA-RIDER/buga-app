import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Arrow from '../../../assets/icons/arrow_back.svg';
import Close from '../../../assets/icons/close.svg';
import Search_icon from '../../../assets/icons/search_icon.svg';
import SelectDropdown from 'react-native-select-dropdown';
import SelectContact from '../../../components/SelectContact';
import { DATA } from '../../../constants/contacts';
import Asterisk from '../../../assets/icons/asterisk.svg';
import { Button } from '../../../components/Button';


const countries = [
    "Egypt", "Canada", "Australia", "Ireland",
    "Egypt", "Canada", "Australia", "Ireland",
    "Egypt", "Canada", "Australia", "Ireland",
    "Egypt", "Canada", "Australia", "Ireland",
    "Egypt", "Canada", "Australia", "Ireland",
]

const SplitFare = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white",
        }}>

            <StatusBar backgroundColor='white' />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                justifyContent: 'space-between',
                marginHorizontal: 32
            }}>
                <TouchableOpacity style={styles.arrow} onPress={handleBack} >
                    <Arrow />
                </TouchableOpacity>

                <View>
                    <Text style={{
                        fontFamily: "SatoshiBold",
                        fontSize: 20,
                        marginBottom: 3,
                        textAlign: 'center'
                    }} >Split fare price with...</Text>
                    <Text style={{
                        fontFamily: "SatoshiMedium",
                        fontSize: 15,
                        marginBottom: 3,
                        textAlign: 'center',
                        color: "#9A9A9A"
                    }}>Max: 3 friends</Text>
                </View>

                <View style={{
                    alignItems: 'center',
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
            </View>



            <View style={{
                alignSelf: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 326,
                    borderRadius: 5,
                    backgroundColor: "white",
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 14,
                    paddingVertical: 0,
                    borderWidth: 1,
                    borderColor: '#9A9A9A'
                }}>
                    <Search_icon />
                    <ScrollView >
                        <SelectDropdown
                            defaultButtonText='Search Contacts'
                            dropdownStyle={{
                                borderRadius: 5,
                                backgroundColor: "white",
                                borderColor: '#9A9A9A',
                                height: "100%",
                                width: "70%"
                            }}
                            rowTextStyle={{
                                color: "#9A9A9A",
                                textAlign: 'left',
                                fontFamily: "SatoshiMedium",
                                fontSize: 14,

                            }}
                            buttonStyle={{
                                backgroundColor: "white",
                            }}
                            buttonTextStyle={{
                                color: "#9A9A9A",
                                textAlign: 'left',
                                fontFamily: "SatoshiMedium",
                                fontSize: 14,
                            }}
                            data={countries}

                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                        />
                    </ScrollView>

                </View>

            </View>
            <FlatList 
        data={DATA}
        renderItem={({ item }) => <SelectContact data={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 0 }} />
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
            <View style={{
                flexDirection:'row',
                justifyContent:'space-around',
                marginHorizontal:48
            }}>
            <View style={{ marginTop:23, borderRadius:15, flexDirection:'row', alignItems:'center', backgroundColor:"#FFD96066", alignSelf:'center', padding:10}}>
                <Text style={{
                    color: "black",
                    fontFamily: "SatoshiMedium",
                    fontSize: 14,
                    marginRight:5
                }} >Alexander </Text>
                <Close/>
            </View>
            <View style={{ marginTop:23, borderRadius:15, flexDirection:'row', alignItems:'center', backgroundColor:"#FFD96066", alignSelf:'center', padding:10}}>
                <Text style={{
                    color: "black",
                    fontFamily: "SatoshiMedium",
                    fontSize: 14,
                    marginRight:5
                }} >Daniella</Text>
                <Close/>
            </View>
            <View style={{ marginTop:23, borderRadius:15, flexDirection:'row', alignItems:'center', backgroundColor:"#FFD96066", alignSelf:'center', padding:10}}>
                <Text style={{
                    color: "black",
                    fontFamily: "SatoshiMedium",
                    fontSize: 14,
                    marginRight:5
                }} >John</Text>
                <Close/>
            </View>
        </View>
        </View>
        <View style={{
                flexDirection: 'row',
                marginLeft: 54,
                alignItems: 'center',
                marginTop:13,
                marginBottom:27,
                
            }} >
                <Asterisk />
                <Text style={{
                    fontFamily: "SatoshiMedium",
                    fontSize: 12,
                    marginLeft: 3,
                }} >You need to pay before the driver gets to your location</Text>
            </View>
            <Button text={"Proceed"}  style={{
                alignSelf:"center",
                marginBottom:20
            }}/>
            </View>
        </SafeAreaView>
    )
}

export default SplitFare

const styles = StyleSheet.create({

})