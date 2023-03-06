import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { HeadingText } from '../../../components/CustomTextComponent';
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import Search_icon from '../../../assets/icons/search_icon.svg' ;
import SelectDropdown from 'react-native-select-dropdown';
import Proceed from '../../../assets/icons/Proceed_Icon.svg' ;
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addUniversity } from '../../../stores/RiderStores/addUniversity';


const UniversitySelectScreen = () => {

  const navigation = useNavigation();


    const [user, setUser] = useState(null)
    const [university, setUniversity] = useState('')

    const { add, isLoading } = addUniversity()

    useEffect(() => {
      async function fetchUser() {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
          console.log(user)
        }
      }
      fetchUser();
    }, []);

    const countries = [
        "Egypt", "Canada", "Australia", "Ireland",
        "Egypt", "Canada", "Australia", "Ireland",
        "Egypt", "Canada", "Australia", "Ireland",
        "Egypt", "Canada", "Australia", "Ireland",
        "Egypt", "Canada", "Australia", "Ireland",
    ]

    
    const handleProceed = () => {
        add(id,university, navigation)
            };
    const handleBack = () => {
        navigation.goBack();
      };

    const selectUniversity = (selectedItem, index) => { 
        setUniversity(selectedItem)
        console.log(selectedItem, university, index)
    };

        const id = user?.user._id


  return (
    <SafeAreaView style={{
      backgroundColor:"white",
      flex:1
    }}>
        <StatusBar backgroundColor='#FFCC2A'/>
        <TouchableOpacity style={styles.arrow} onPress={handleBack}>
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
          paddingVertical: 0, 
          borderWidth:0.5,
          borderColor:'#9A9A9A'
        }}>
            <Search_icon/>
          <ScrollView >
            <SelectDropdown
            defaultButtonText='Search'
            dropdownStyle={{
            borderRadius: 5,
            backgroundColor:"white",
            borderColor:'#9A9A9A',
            height:"100%",
            width:"70%"
            }}
            rowTextStyle={{
                color:"#9A9A9A",
                textAlign:'left',
                fontFamily:"SatoshiMedium",
                fontSize:14,
                 
            }}
            buttonStyle={{
                backgroundColor:"white",
            }}
            buttonTextStyle={{
                color:"#9A9A9A",
                textAlign:'left',
                fontFamily:"SatoshiMedium",
                fontSize:14,
                 
            }}
	data={countries}
	onSelect={selectUniversity}

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
        <View style={styles.buttonView}>
             <TouchableOpacity style={styles.button}
                onPress={handleProceed}
             >
                <Text style={styles.buttonText}>Proceed</Text>
                    <Proceed/>
            </TouchableOpacity>
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
      scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
        paddingBottom: '20%',
      },
      buttonView:{
        marginTop:45,
        marginBottom:58,
        alignSelf:'flex-end',
        marginRight:43,  
    },
    button:{
        width:150,
        backgroundColor:"#FFCC2A",
        paddingVertical:15,
        borderRadius: 5,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center'
    },
    buttonText:{
        textAlign:'right',
        fontFamily:"SatoshiBold",
        fontSize:18,
        marginRight:8
    },
})