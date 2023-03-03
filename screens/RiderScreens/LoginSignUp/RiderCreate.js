import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Asterisk from '../../../assets/icons/asterisk.svg';
import Mail from '../../../assets/icons/Mail_icon.svg';
import Name_Icon from '../../../assets/icons/Name_Icon.svg'
import Phone_Icon from '../../../assets/icons/Phone_Icon.svg'
import PasswordIcon from '../../../assets/icons/Password_Icon.svg';
import EyeClosed from '../../../assets/icons/password_closed.svg';
import Proceed from '../../../assets/icons/Proceed_Icon.svg';
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import { HeadingText, SubText } from '../../../components/CustomTextComponent';
import { CustomTextInput } from '../../../components/CustomTextInput';
import {signUpStore } from '../../../stores/RiderStores/createStore';

const RiderCreate = () => {
    const navigation = useNavigation();

    const {user, logout, isLoading, error, signup} = signUpStore();


    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [valid, setValid] = useState(true);
    const [same, setSame] = useState(true);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [alternate_phone_number, setAlternate_phone_number] = useState('')

    

    const handleProceed = () => {
        signup(name,
            password,
            email,
            phone_number,
            alternate_phone_number,
            navigation)
    }

    const handlePassword = (value) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        setValid(regex.test(value));
        setPassword(value);
    }
    const handleName = (value) => {
        setName(value);
    }
   
    const handleAltPhone = (value) => {
        setAltphone(value);
    }
    const handleConfirm = (value) => {
        setSame(value === password);
        setConfirmpassword(value);
    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#FFCC2A' />
            <ScrollView style={{
                backgroundColor: "white",
                paddingBottom: 50
            }}>
                <View style={styles.top}>
                    <HeadingText text="Create a rider account" />
                    <SubText text="It’ll only take a minute" />
                </View>
                <View style={styles.formstart}>
                    { error &&<Text>{error}</Text> }

                    <View style={styles.inputBox}>
                        <CustomTextInput
                            label="What would you like us to call you?"
                            required={<Asterisk />}
                            iconLeft={<Name_Icon width={15} height={15} />}
                            placeholder="Name"
                            onChangeText={handleName}
                            value={name}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <CustomTextInput
                            label="Your best Email?"
                            iconLeft={<Mail width={16} height={12} />}
                            required={<Asterisk />}
                            placeholder="E.g yourname@gmail.com"
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <CustomTextInput
                            label="Your Phone Number (We’ll send a verification code)"
                            iconLeft={<Phone_Icon width={20} height={20} />}
                            required={<Asterisk />}
                            placeholder="+2340000004200"
                            onChangeText={setPhone_number}
                            value={phone_number}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <CustomTextInput
                            label="An alternative phone number"
                            iconLeft={<Phone_Icon width={20} height={20} />}

                            placeholder="+2340000004200"
                            onChangeText={setAlternate_phone_number}
                            value={alternate_phone_number}
                        />
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
    );
};

export default RiderCreate

const styles = StyleSheet.create({
    top: {
        marginTop: 64,

    },
    formstart: {
        marginTop: 34,
    },
    inputBox: {
        marginBottom: 20
    },
    sideInput: {
        borderWidth: 1,
        borderColor: '#ccc',
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
    error: {
        marginLeft: 45,
        fontFamily: "SatoshiMedium",
        fontSize: 12,
        color: "red",
        marginRight: 40
    }
})