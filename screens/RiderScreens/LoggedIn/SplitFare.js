import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Arrow from '../../../assets/icons/arrow_back.svg';
import Search_icon from '../../../assets/icons/search_icon.svg';
import SelectDropdown from 'react-native-select-dropdown';
import SelectContact from '../../../components/SelectContact';

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
            <SelectContact/>
        </SafeAreaView>
    )
}

export default SplitFare

const styles = StyleSheet.create({

})