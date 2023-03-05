import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';




const RiderEmergency = () => {

  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [relationship, setRelationship] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [emergency_alternate_phone_number, setEmergency_alternate_phone_number] = useState('')
  
  useEffect(() => {
    async function fetchUser() {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
    fetchUser();
  }, []);
  


  const Nid = user?.user._id


    const navigation = useNavigation()


    const  addEmergency = async(id, name, relationship, phone_number, emergency_alternate_phone_number)=>{
      id=Nid

    const response = await fetch('http://192.168.46.125:5000/api/user/addemergency', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id, name, relationship, phone_number, emergency_alternate_phone_number}),
    });
    const json = await response.json();
    
    if (!response.ok) {
        setError(json.error)
        console.log("matters")
      }
    if (response.ok) {
      navigation.navigate('RiderHome')
      console.log(id)
    }
  }



    const handleBack = ()=>{
      navigation.goBack()
    }
    const handleGo = ()=>{
      addEmergency(name, phone_number, relationship,emergency_alternate_phone_number, Nid)
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
      {error} 
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
            onChangeText = {setEmergency_alternate_phone_number}
            value={emergency_alternate_phone_number}
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