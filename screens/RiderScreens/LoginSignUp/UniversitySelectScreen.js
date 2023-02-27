import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { HeadingText } from '../../../components/CustomTextComponent';
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import Search_icon from '../../../assets/icons/search_icon.svg' ;
import SelectDropdown from 'react-native-select-dropdown'



const UniversitySelectScreen = () => {

    const countries = ["Egypt", "Canada", "Australia", "Ireland"]


  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#FFCC2A'/>
        <TouchableOpacity style={styles.arrow}>
          <Arrow/>
        </TouchableOpacity>
        <View style={styles.heading}>
      <HeadingText text="What University do you attend?"
        style={{
            fontSize:28
        }}
      />
      <Text style={styles.subheading}>
      We would like to personalize your experience
      </Text>
      </View>


        {/* seach component */}
        <View style={{
            marginLeft:43,
            marginTop:43
        }} >
        <Text style={[styles.searchTop]} >Select from the options below</Text>
    <View style={{
          width:326,
          borderRadius: 5,
          backgroundColor:"white",
          flexDirection:'row',
          alignItems: 'center',
          paddingHorizontal: 14,
          paddingVertical: 10, 
        }}>
            <Search_icon/>
          
            <SelectDropdown
            searchPlaceHolder='Search'
	data={countries}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
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

        </View>
        </View>
        
    </SafeAreaView>
  )
}

export default UniversitySelectScreen

const styles = StyleSheet.create({
    arrow:{
        marginTop:24,
        marginLeft:19
      },
      heading:{
        marginTop:22
      },
      subheading:{
        color:"#9A9A9A",
        textAlign:'left',
        marginLeft:35,
        fontFamily:"SatoshiMedium",
        fontSize:14,
      },
      searchTop:{
        color:"black",
        textAlign:'left',
        fontFamily:"SatoshiMedium",
        fontSize:14,
        marginBottom:14
      },
})