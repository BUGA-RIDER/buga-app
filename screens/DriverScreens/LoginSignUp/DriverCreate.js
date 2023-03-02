import { Easing, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import { CustomTextInput } from '../../../components/CustomTextInput'
import Asterisk from '../../../assets/icons/asterisk.svg'
import Mail from '../../../assets/icons/Mail_icon.svg';
import Name_Icon from '../../../assets/icons/Name_Icon.svg'
import Phone_Icon from '../../../assets/icons/Phone_Icon.svg'
import PasswordIcon from '../../../assets/icons/Password_Icon.svg';
import EyeClosed from '../../../assets/icons/password_closed.svg';
import Proceed from '../../../assets/icons/Proceed_Icon.svg';
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar'


const DriverCreate = () => {

    const navigation = useNavigation()

    const handleProceed = () => {
        navigation.navigate('OTPScreen')
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");
    const [altNumber, setAltNumber] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [valid, setValid] = useState(true);
    const [same, setSame] = useState(true);


    

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleName = (text) => {
        setName(text);
    };
    const handleEmailChange = (text) => {
        setEmail(text);
    };
    const handlePhoneNumber = (text) => {
        setPhonenumber(text);
    };
    const handleAlt = (text) => {
        setAltNumber(text);
    };
    const handleStreet = (text) => {
        setStreet(text);
    };
    const handleCity = (text) => {
        setCity(text);
    };
    const handlePassword = (value) =>{
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    setValid(regex.test(value));
    setPassword(value);
    }

    const handleConfirm = (value) =>{
    setSame(value === password);
    setConfirmpassword(value);
    }


    const styles = StyleSheet.create({
        top: {
            marginTop: 64,

        },
        formstart: {
            marginTop: 34,
        },
        inputBox: {
            marginBottom: 20,
        },
        sideInput: {
            borderWidth: 1,
            borderColor: isFocused ? "#FFCC2A" : '#ccc',
            borderRadius: 4,
            paddingLeft: 15,
            paddingRight: 15,
            paddingVertical: 8,
            width: 150
        },
        sideInputText: {
            fontFamily: "SatoshiMedium",
            fontSize: 15
        },
        buttonView: {
            marginTop: 32,
            marginBottom: 58,
            alignSelf: 'flex-end',
            marginRight: 43,
        },
        button: {
            width: 150,
            backgroundColor: "#FFCC2A",
            paddingVertical: 15,
            borderRadius: 5,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'center'
        },
        buttonText: {
            textAlign: 'right',
            fontFamily: "SatoshiBold",
            fontSize: 18,
            marginRight: 8
        },
        error:{
        marginLeft:45,
        fontFamily:"SatoshiMedium",
        fontSize:12,
        color:"red",
        marginRight:40
        }
    });


    return (
        <SafeAreaView style={{
            backgroundColor: "white",
            flex: 1
        }}>
            <StatusBar backgroundColor='#FFCC2A' />
            <ScrollView>
                <View style={styles.top}>
                    <HeadingText text="Create a driver account" />
                    <SubText text="It’ll only take a minute" />
                </View>
                <View style={styles.formstart}>

                    <View style={styles.inputBox}>
                        <CustomTextInput 
                            ref={(ref) => (inputRefs.current[1] = ref)}
                            label="What would you like us to call you?"
                            required={<Asterisk />}
                            iconLeft={<Name_Icon width={15} height={15} />}
                            placeholder="Name"
                            onChangeText={handleName}
                            value={name}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <CustomTextInput
                            ref={(ref) => (inputRefs.current[0] = ref)}
                            label="Your best Email?"
                            iconLeft={<Mail width={16} height={12} />}
                            required={<Asterisk />}
                            placeholder="E.g yourname@gmail.com"
                            onChangeText={handleEmailChange}
                            value={email}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <CustomTextInput
                            label="Your Phone Number (We’ll send a verification code)"
                            iconLeft={<Phone_Icon width={20} height={20} />}
                            required={<Asterisk />}
                            placeholder="+2340000004200"
                            onChangeText={handlePhoneNumber}
                            value={phoneNumber}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            keyboardType ='numeric'
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <CustomTextInput
                            label="An alternative phone number"
                            iconLeft={<Phone_Icon width={20} height={20} />}
                            keyboardType ='numeric'
                            placeholder="+2340000004200"
                            onChangeText={handleAlt}
                            value={altNumber}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <CustomTextInput
                            label="Street Address"
                            required={<Asterisk />}
                            placeholder="E.g. 2, harmony street, diamond estate."
                            onChangeText={handleStreet}
                            value={street}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 43,
                    }}>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    marginBottom: 8,
                                    fontFamily: "SatoshiMedium",
                                }}>
                                    City</Text>
                                <View>
                                    <Asterisk />
                                </View>
                            </View>
                            <View style={styles.sideInput}>
                                <TextInput style={styles.sideInputText} placeholder='E.g. Gbagada'
                                onBlur={handleBlur}
                                onFocus={handleFocus} />
                            </View>
                        </View>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    marginBottom: 7,
                                    fontFamily: "SatoshiMedium",
                                }}>
                                    State</Text>
                                <View>
                                    <Asterisk />
                                </View>
                            </View>
                            <View style={styles.sideInput}>
                                <TextInput style={styles.sideInputText} placeholder='E.g. Lagos' 
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{
                        marginTop: 20
                    }}>
                        <CustomTextInput
                            label="Secure your account"
                            required={<Asterisk />}
                            iconLeft={<PasswordIcon width={17} height={15} />}
                            iconRight={<EyeClosed width={16} height={12} />}
                            placeholder="Create a Password"
                            value={password}
                            onChangeText={handlePassword}
                            style={{
                                borderColor: valid ? "#ccc" : "red"
                            }}
                        />
                        {!valid && password.length > 0 && (
                            <Text style={styles.error}>
                                Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, and one number.
                            </Text>
                        )}
                        <CustomTextInput
                            iconLeft={<PasswordIcon width={17} height={15} />}
                            iconRight={<EyeClosed width={16} height={12} />}
                            placeholder="Confirm Password"
                            value={confirmpassword}
                            onChangeText={handleConfirm}
                            style={{
                                borderColor: same ? "#ccc" : "red"
                            }}
                        />
                        {!same && password.length > 0 && (
                            <Text style={styles.error}>
                                Passwords must match
                            </Text>
                        )}
                    </View>

                    {/* proceed button */}

                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.button}
                            onPress={handleProceed}
                        >
                            <Text style={styles.buttonText}>Proceed</Text>
                            <Proceed />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DriverCreate

