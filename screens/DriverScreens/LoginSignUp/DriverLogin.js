import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Arrow from "../../../assets/icons/arrow_back.svg";
import Mail from "../../../assets/icons/Mail_icon.svg";
import PasswordIcon from "../../../assets/icons/Password_Icon.svg";
import EyeClosed from "../../../assets/icons/password_closed.svg";
import UnChecked from "../../../assets/icons/unchecked.svg";
import Checked from "../../../assets/icons/checked.svg";
import { HeadingText } from "../../../components/CustomTextComponent";
import { CustomTextInput } from "../../../components/CustomTextInput";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/core";
import { DriverLoginStore } from "../../../stores/DriverStores/DriverLoginStore";

const DriverLogin = () => {
  const navigation = useNavigation();

  const {driver, isLoading, error, login, logout} = DriverLoginStore();

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [password, setPassword] = useState('')



  const handleSignUp = () => {
    navigation.navigate("DriverCreate");
  };

  const handleLogin = () => {
    console.log(email, password)
    login(email, password, navigation)
     
    if(error==='Incorrect Email' || error==='All fields must be filled'){
      setEmailError(true)
    } else{
      setEmailError(false)
    }
    if(error==='Incorrect password'){
      setPasswordError(true)
    } else{
      setPasswordError(false)
    }
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="#FFCC2A" />
      <TouchableOpacity style={styles.arrow} onPress={handleBack}>
        <Arrow />
      </TouchableOpacity>
      <View style={styles.heading}>
        <HeadingText
          text="Welcome back!"
          style={{
            fontSize: 20,
          }}
        />
        <Text style={styles.subheading}>
          Login to your{" "}
          <Text
            style={{
              fontFamily: "SatoshiBold",
            }}
          >
            driver
          </Text>{" "}
          account
        </Text>
      </View>

      <View style={styles.login}>
        <CustomTextInput
          iconLeft={<Mail width={16} height={12} />}
          placeholder="Email Address"
          onChangeText = {handleEmailChange}
          value={email}
        />
          {emailError ? <Text style={styles.error}>{error}</Text>: null}
        <View
          style={{
            marginTop: 11,
          }}
        >
          <CustomTextInput
            iconLeft={<PasswordIcon width={17} height={15} />}
            iconRight={<EyeClosed width={16} height={12} />}
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
          />
                {passwordError ? <Text style={styles.error}>{error}</Text>: null}

        </View>
        <View style={styles.forgot}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <UnChecked />
            <Text
              style={{
                fontFamily: "SatoshiBold",
                fontSize: 11,
                marginLeft: 8,
                color: "#202020",
              }}
            >
              Remember Login
            </Text>
          </View>

          <Text
            style={{
              fontFamily: "SatoshiBold",
              fontSize: 11,
              color: "#202020",
            }}
          >
            Forgot Your Password?
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          text={"Log In"}
          handlePress={handleLogin}
          style={{
            width: 330,
          }}
        />
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUp}>New To Buga? Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DriverLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    marginTop: 24,
    marginLeft: 19,
  },
  heading: {
    marginTop: 55,
  },
  subheading: {
    fontFamily: "SatoshiMedium",
    fontSize: 18,
    lineHeight: 18,
    color: "Black",
    textAlign: "center",
  },
  login: {
    marginTop: 63,
  },
  forgot: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 11,
    marginHorizontal: 44,
  },
  button: {
    marginTop: 60,
    alignSelf: "center",
    fontFamily: "SatoshiBold",
  },
  signUp: {
    textAlign: "center",
    fontFamily: "SatoshiMedium",
    fontSize: 15,
    color: "black",
    textDecorationLine: "underline",
    marginTop: 16,
  },
  error:{
    marginLeft:45,
    fontFamily:"SatoshiMedium",
    fontSize:12,
    color:"red",
    marginRight:40
    }
});
