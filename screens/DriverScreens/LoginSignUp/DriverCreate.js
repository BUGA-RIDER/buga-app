import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import {CustomTextInput} from '../../../components/CustomTextInput'
import Asterisk from '../../../assets/icons/asterisk.svg'
import Mail from '../../../assets/icons/Mail_icon.svg' ;
import Name_Icon from '../../../assets/icons/Name_Icon.svg'
import Phone_Icon from '../../../assets/icons/Phone_Icon.svg'
import PasswordIcon from '../../../assets/icons/Password_Icon.svg' ;
import EyeClosed from '../../../assets/icons/password_closed.svg' ;
import Proceed from '../../../assets/icons/Proceed_Icon.svg' ;
import {useNavigation} from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar'


const DriverCreate = () => {

    const navigation = useNavigation()

    const handleProceed =()=>{
        navigation.navigate('OTPScreen')
    }

  return (
    <SafeAreaView>
            <StatusBar backgroundColor='#FFCC2A'/>
        <ScrollView>
        <View style={styles.top}>
        <HeadingText text="Create a driver account" /> 
        <SubText text="It’ll only take a minute"/> 
        </View>
        <View style={styles.formstart}>
            
            <View style={styles.inputBox}>
            <CustomTextInput 
            label="What would you like us to call you?"
            required={<Asterisk/>}
            iconLeft={<Name_Icon width={15} height={15} />}
            placeholder="Name"
            />
            </View>

            <View style={styles.inputBox}>
            <CustomTextInput
            label="Your best Email?"
            iconLeft={<Mail width={16} height={12} />}
            required={<Asterisk/>}
            placeholder="E.g yourname@gmail.com"
            // onChangeText={setText}
            // value={text}
            />
            </View>

            <View style={styles.inputBox}>
            <CustomTextInput
            label="Your Phone Number (We’ll send a verification code)"
            iconLeft={<Phone_Icon width={20} height={20} />}
            required={<Asterisk/>}
            placeholder="+2340000004200"
            // onChangeText={setText}
            // value={text}
            />
            </View>

            <View style={styles.inputBox}>
            <CustomTextInput
            label="An alternative phone number"
            iconLeft={<Phone_Icon width={20} height={20} />}
       
            placeholder="+2340000004200"
            // onChangeText={setText}
            // value={text}
            />
            </View>
            <View style={styles.inputBox}>
            <CustomTextInput
            label="Street Address"
            required={<Asterisk/>}
            placeholder="E.g. 2, harmony street, diamond estate."
            // onChangeText={setText}
            // value={text}
            />
            </View>

            <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginHorizontal:43,
            }}>
            <View>
            <View style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}>
            <Text style={{
                marginBottom:8,
                fontFamily:"SatoshiMedium",
                }}>
                    City</Text>
                    <View> 
                    <Asterisk />
                    </View>
                    </View>
            <View style={styles.sideInput}>
            <TextInput style={styles.sideInputText} placeholder='E.g. Gbagada' />
            </View>
            </View>
            <View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}>
            <Text style={{
                marginBottom:7,
                fontFamily:"SatoshiMedium",
                }}>
                    State</Text>
                    <View> 
                    <Asterisk />
                    </View>
                    </View>
            <View style={styles.sideInput}>
            <TextInput style={styles.sideInputText} placeholder='E.g. Lagos' />
            </View>
            </View>
             </View>

             <View style={{
                marginTop:20
             }}>
             <CustomTextInput
                    label="Secure your account"
                    required={<Asterisk/>}
                    iconLeft={<PasswordIcon width={17} height={15} />}
                    iconRight={<EyeClosed width={16} height={12} />}
                    placeholder ="Create a Password"
                // onChangeText={setText}
                // value={text}
                />
                <CustomTextInput  
                    iconLeft={<PasswordIcon width={17} height={15} />}
                    iconRight={<EyeClosed width={16} height={12} />}
                    placeholder ="Confirm Password"
                // onChangeText={setText}
                // value={text}
                />
             </View>
             
            {/* proceed button */}

             <View style={styles.buttonView}>
             <TouchableOpacity style={styles.button}
             onPress={handleProceed}
             >
                <Text style={styles.buttonText}>Proceed</Text>
                    <Proceed/>
            </TouchableOpacity>
             </View>
            </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default DriverCreate

const styles = StyleSheet.create({
    top:{
        marginTop:64,

    },
    formstart:{
        marginTop:34,
    },
    inputBox:{
        marginBottom:20
    },
    sideInput:{
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 4,
        paddingLeft:15,
        paddingRight:15,
        paddingVertical:8,
        width:150
    },
    sideInputText:{
        fontFamily:"SatoshiMedium",
        fontSize:15 
    },
    buttonView:{
        marginTop:32,
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