import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { HeadingText } from '../../../components/CustomTextComponent';
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import Proceed from '../../../assets/icons/Proceed_Icon.svg' ;
import Add_emergency from '../../../assets/icons/add_emergency.svg' ;
import Contacts_icon from '../../../assets/icons/contacts_icon.svg' ;
import {CustomTextInput} from '../../../components/CustomTextInput';
import Name_Icon from '../../../assets/icons/Name_Icon.svg';
import Phone_Icon from '../../../assets/icons/Phone_Icon.svg';
import {useNavigation} from "@react-navigation/core"



const RiderEmergency = () => {

  const [name, setName] = useState('')
  const [relationship, setRelationship] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [alternate_phone_number, setAlternate_phone_number] = useState('')

    const navigation = useNavigation()

    const handleBack = ()=>{
      navigation.goBack()
    }
    const handleGo = ()=>{
      console.log(name, relationship, phone_number, alternate_phone_number)
      navigation.navigate('RiderHome')
    }

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
      <HeadingText text="Who would you like us to reach
                          in case of an emergency?"
        style={{
            fontSize:28,
            textAlign:"left",
        }}
      />

      <Text style={styles.subheading}>
      Your emergency contact 
      </Text>
      </View> 

        <View style={{
          marginTop:22
        }}>
          
          <CustomTextInput style={{ marginBottom: 25}}
            label="Contact's Name"
            iconLeft={<Name_Icon width={15} height={15} />}
            placeholder="Name"
            onChangeText = {setName}
            value={name}
            />
          <CustomTextInput 
          style={{marginBottom: 24}}
            label="Relationship with contact"
            iconLeft={<Name_Icon width={15} height={15} />}
            placeholder="E.g Father, Mother"
            onChangeText = {setRelationship}
            value={relationship}
            />
          <CustomTextInput 
          style={{marginBottom: 4}}
           label="Contact's Phone Number"
            iconLeft={<Phone_Icon width={20} height={20} />}
            placeholder="+2340000004200"
            onChangeText = {setPhone_number}
            value={phone_number}
            />
            <View style={{
              marginLeft:43,
              flexDirection:'row',
              alignItems:'flex-end',
              marginBottom:25
            }}>
            <Contacts_icon/>
            <Text style={{
              textDecorationLine:'underline',
              marginBottom:2,
              fontFamily:"SatoshiMedium",
              marginLeft:7,
            }}>
              Select from contacts
            </Text>
            </View>
          <CustomTextInput 
          style={{ marginBottom: 4  }}
            label="An alternative phone number "    
            iconLeft={<Phone_Icon width={20} height={20} />}
            placeholder="+2340000004200"
            onChangeText = {setAlternate_phone_number}
            value={alternate_phone_number}
            />
            <View style={{
              marginLeft:43,
              flexDirection:'row',
              alignItems:'flex-end'

            }}>
            <Contacts_icon/>
            <Text style={{
              textDecorationLine:'underline',
              marginBottom:2,
              fontFamily:"SatoshiMedium",
              marginLeft:7
            }}>
              Select from contacts
            </Text>
            </View>

            <View style={{
              flexDirection:'row',
              justifyContent:'center',
              marginTop:38,
              borderBottomWidth:1,
              marginHorizontal:110,
              paddingBottom:2
            }}>
            <Add_emergency style={{
              marginTop:2
            }}/> 
            <Text style={{
               fontFamily:"SatoshiMedium",
            }}>
              Add another emergency contact
            </Text>
            </View>
            <View style={styles.buttonView}>
             <TouchableOpacity style={styles.button} onPress={handleGo} >
                <Text style={styles.buttonText}>Let's go!</Text>
                    <Proceed/>
            </TouchableOpacity>
             </View>
            </View> 
      
    </SafeAreaView>
  );
};

export default RiderEmergency

const styles = StyleSheet.create({
  arrow:{
    marginTop:24,
    marginLeft:19
  },
  heading:{
    marginTop:22,
    marginHorizontal:23,
  },
  subheading:{
    color:"#9A9A9A",
    textAlign:'left'
  },
  buttonView:{
    marginTop:50,
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
}
});