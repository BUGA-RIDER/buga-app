import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { HeadingText, SubText } from '../../../components/CustomTextComponent';
import {useNavigation} from '@react-navigation/core';
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import Proceed from '../../../assets/icons/Proceed_Icon.svg' ;
import SelectDropdown from 'react-native-select-dropdown';
import {CustomTextInput} from '../../../components/CustomTextInput';
import { Button } from '../../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StepOne = () => {


const [user, setUser] = useState(null)
const [type, setType] = useState('')    
const [error, setError] = useState('')    
const [isLoading, setIsLoading] = useState('')    
const [brand, setBrand] = useState('')    
const [year, setYear] = useState('')    
const [colour, setColour] = useState('')    
const [plate_number, setPlate_number] = useState('')    

    const navigation = useNavigation();

    const selectBrand = (selectedItem, index) => { 
        setType(selectedItem)
        console.log(selectedItem, type, index)
    };

    useEffect(() => {
        async function fetchUser() {
          const userData = await AsyncStorage.getItem('driver');
          if (userData) {
            setUser(JSON.parse(userData));
            console.log()
          }
        }
        fetchUser();
      }, []);
    
      const Nid = user?.driver._id    
    
      const addVehicle = async (id,
        type,
        brand,
        year,
        colour,
        plate_number) => {
        id = Nid
        setIsLoading(true)
        const response = await fetch('http://192.168.46.125:5000/api/driver/addvehicle', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id,
            type,
            brand,
            year,
            colour,
            plate_number }),
        });
        const json = await response.json();
    
        if (!response.ok) {
          setError(json.error)
          setIsLoading(false)
          console.log("matters")
        }
        if (response.ok) {
          setIsLoading(false)
          navigation.navigate('StepTwo')
          console.log(id)
        }
      }
    
      const handleBack = () => {
        navigation.goBack();
      };
      const handleProceed = () => {
        addVehicle(Nid,
            type,
            brand,
            year,
            colour,
            plate_number)
      };

    const countries = [
        "Egypt", "Canada", "Australia", "Ireland",
        "Egypt", "Canada", "Australia", "Ireland",
        "Egypt", "Canada", "Australia", "Ireland",
        "Egypt", "Canada", "Australia", "Ireland",
        "Egypt", "Canada", "Australia", "Ireland",
    ]
  return (
    <SafeAreaView style={{
        backgroundColor:"white",
    }}>

        <StatusBar backgroundColor='white'/>

        <TouchableOpacity style={styles.arrow} onPress={handleBack} >
            <Arrow style={{
                marginRight:17
            }}/>
            <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:16
            }}>
                Step 1
            </Text>
        </TouchableOpacity>

    <View style={styles.heading}>
    <HeadingText text="Add a Vehicle"
        style={{
            fontSize:28,
            textAlign:"left",
            }} />
    <Text style={styles.subheading}>
        Vehicle must be 2005 model or later, a 4 door vehicle 
        and must not be salvaged.
    </Text>
    {error && <Text style={styles.error}>{error}</Text>}

    </View> 

            {/* //select car component */}


    <ScrollView style={{
            marginHorizontal:43,
            marginTop:20
    }}>
        <SubText
            text="Vehicle Type"
            style={{
                fontSize:15,
                textAlign:"left",
                marginBottom:5
            }}
        />
        <SelectDropdown
            defaultButtonText='Select Car Brand'
            dropdownIconPosition='right'
            
            dropdownStyle={{
            borderRadius: 5,
            backgroundColor:"white",
            borderColor:'#9A9A9A',
            height:"100%",
            width:"70%"
            }}
            rowTextStyle={{
                color:"black",
                textAlign:'left',
                fontFamily:"SatoshiMedium",
                fontSize:10,    
            }}
            buttonStyle={{
                backgroundColor:"white",
                borderWidth:0.5,
                borderColor:"#9A9A9A",
                alignItems:'center',
                flexDirection:'row',
                justifyContent:'space-around',
                borderRadius:4,
                width:325,
                marginBottom:12
            }}
            buttonTextStyle={{
                color:"black",
                textAlign:'left',
                fontFamily:"SatoshiMedium",
                fontSize:13,
                 
            }}
	data={countries}
	onSelect={selectBrand}
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

    <CustomTextInput
     label = "Vehicle Brand"
      placeholder="E.g Toyota Corrolla"
      style={{
        marginBottom:12
      }}
      onChangeText={setBrand}
      value={brand}
    />
    <CustomTextInput
     label = "Year"
      placeholder="E.g 2015"
      style={{
        marginBottom:12
      }}
      onChangeText={setYear}
      value={year}    />
    <CustomTextInput
     label = "Colour"
      placeholder="E.g Red, Blue"
      style={{
        marginBottom:12
      }}
      onChangeText={setColour}
      value={colour}
    />
    <CustomTextInput
     label = "License Plate Number"
      placeholder="e.g EPE34HG"
      style
      onChangeText={setPlate_number}
      value={plate_number}
    />
         
         {/* //proceed button */}

        <View style={styles.buttonView}>
             <TouchableOpacity style={styles.button} onPress={handleProceed}>
             {isLoading ? <ActivityIndicator color="black"/>:
           <View style={{
            flexDirection:'row'
           }}>
           <Text style={styles.buttonText}>Proceed
           </Text><Proceed />
           </View> } 
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  )
}

export default StepOne

const styles = StyleSheet.create({
    arrow:{
        marginTop:24,
        marginLeft:19,
        flexDirection:'row'
      },
      heading:{
        marginTop:30,
        marginHorizontal:43,
        
      },
      subheading:{
        color:"#9A9A9A",
        textAlign:'left',
        marginRight:74
      },
      buttonView:{
        marginTop:50,
        marginBottom:200,
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
    error: {
        fontFamily: "SatoshiMedium",
        fontSize: 12,
        color: "red",
        marginRight: 40
    }
});