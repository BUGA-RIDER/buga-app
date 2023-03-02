import { Image, StyleSheet, Text, TouchableOpacity, View  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Arrow from '../../../assets/icons/arrow_back.svg';
import Mail from '../../../assets/icons/Mail_icon.svg';
import PasswordIcon from '../../../assets/icons/Password_Icon.svg';
import EyeClosed from '../../../assets/icons/password_closed.svg';
import UnChecked from '../../../assets/icons/unchecked.svg';
import Checked from '../../../assets/icons/checked.svg';
import { CustomTextInput } from '../../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../../components/Button';
import { HeadingText } from '../../../components/CustomTextComponent';


const RiderLogin = () => {

  const [users, setUsers] = useState(null)


  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://192.168.46.125:5000/api/user/get', {
      })
      const json = await response.json()
  
    if (response.ok) {
      setUsers(json)
    }
    console.log(users)
  }

  //authware authorization
    fetchUsers()
  
}, [])

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('RiderCreate');
  };
  const handleLogin = () => {
    navigation.navigate('RiderHome');
  };

  const handleBack = () => {
    navigation.goBack()
  };

  return (
    <SafeAreaView style={{
      backgroundColor: "white",
      flex: 1
    }}>
      <StatusBar backgroundColor='#FFCC2A' />
      <TouchableOpacity style={styles.arrow} onPress={handleBack}>
        <Arrow />
      </TouchableOpacity>
      <View style={styles.heading}>
        <HeadingText text="Welcome back!" style={{
          fontSize: 20
        }} />
        <Text style={styles.subheading}>
          Login to your <Text style={{
            fontFamily: "SatoshiBold"
          }}>rider</Text> account
        </Text>
      </View>

      <View style={styles.login}>
        <CustomTextInput
          style={{
            marginBottom: 0
          }}
          iconLeft={<Mail width={16} height={12} />}

          placeholder="Email Address"
        // onChangeText={setText}
        // value={text}
        />
        <View style={{

        }}>
          <CustomTextInput
            iconLeft={<PasswordIcon width={17} height={15} />}
            iconRight={<EyeClosed width={16} height={12} />}
            placeholder="Password"
          // onChangeText={setText}
          // value={text}
          />
        </View>
        <View style={styles.forgot}>
          <View style={{
            flexDirection: 'row',

          }}>
            <UnChecked />

            <Text style={{
              fontFamily: "SatoshiBold",
              fontSize: 11,
              marginLeft: 8,
              color: "#202020"
            }} >
              Remember Login {users[1].name}
            </Text>

          </View>

          <Text style={{
            fontFamily: "SatoshiBold",
            fontSize: 11,
            color: "#202020"
          }}>Forgot Your Password?</Text>
        </View>
      </View>
      <View style={styles.button}>

        <Button text={"Log In"} style={{
          width: 330
        }}
          handlePress={handleLogin}
        />
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUp} >
            New To Buga? Sign Up!
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default RiderLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrow: {
    marginTop: 24,
    marginLeft: 19
  },
  heading: {
    marginTop: 55
  },
  subheading: {
    fontFamily: "SatoshiMedium",
    fontSize: 18,
    lineHeight: 18,
    color: "Black",
    textAlign: 'center'
  },
  login: {
    marginTop: 63
  },
  forgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
    marginHorizontal: 44,
  },
  button: {
    marginTop: 60,
    alignSelf: 'center',
    fontFamily: "SatoshiBold"
  },
  signUp: {
    textAlign: 'center',
    fontFamily: "SatoshiMedium",
    fontSize: 15,
    color: "black",
    textDecorationLine: 'underline',
    marginTop: 16
  }
});