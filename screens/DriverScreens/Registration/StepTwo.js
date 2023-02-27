import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import Proceed from '../../../assets/icons/Proceed_Icon.svg' ;
import { HeadingText } from '../../../components/CustomTextComponent';
import {CustomTextInput, CustomUploadInput} from '../../../components/CustomTextInput';
import {useNavigation} from '@react-navigation/core'
import assets from '../../../constants/assets';

const StepTwo = () => {

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };
    const handleProceed = () => {
        navigation.navigate('StepThree');
    };

  return (
      <SafeAreaView style={{
        backgroundColor:"white",
    }}>

        <StatusBar backgroundColor='white'/>
        <ScrollView>

        <TouchableOpacity style={styles.arrow} onPress={handleBack} >
            <Arrow style={{
                marginRight:17
            }}/>
            <Text style={{
                fontFamily:"SatoshiMedium",
                fontSize:16
            }}>
                Step 2
            </Text>
        </TouchableOpacity>

    <View style={styles.heading}>
    <HeadingText text="Upload Documents"
        style={{
            fontSize:28,
            textAlign:"left",
            }} />
    <Text style={styles.subheading}>
    Documents must be valid and not expired
    </Text>
    </View> 

    <CustomUploadInput
        placeholder="Select File"
        label="Valid Drivers License"
        textRight="Upload"
        iconRight={assets.upload}
    />
    <CustomUploadInput
        placeholder="Select File"
        label="Vehicle Insurance"
        textRight="Upload"
        iconRight={assets.upload}
    />
    <CustomUploadInput
        placeholder="Select File"
        label="Birth Certificate"
        textRight="Upload"
        iconRight={assets.upload}
    />
    <CustomUploadInput
        placeholder="Select File"
        label="National ID"
        textRight="Upload"
        iconRight={assets.upload}
    />
    <CustomUploadInput
        placeholder="Select File"
        label="Vehicle Registration Sticker"
        textRight="Upload"
        iconRight={assets.upload}
    />
    <CustomUploadInput
        placeholder="Select File"
        label="Selfie Photo"
        textRight="Upload"
        iconRight={assets.upload}
    />
         
         {/* //proceed button */}

        <View style={styles.buttonView}>
             <TouchableOpacity style={styles.button} onPress={handleProceed}>
                <Text style={styles.buttonText}>Let's Go!</Text>
                    <Proceed/>
            </TouchableOpacity>
        </View>
        </ScrollView>
        
    </SafeAreaView>
  )
}

export default StepTwo

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
        marginRight:74,
        marginBottom:34
      },
      buttonView:{
        marginTop:50,
        marginBottom:100,
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
    }
});