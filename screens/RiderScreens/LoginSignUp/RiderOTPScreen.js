import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Arrow from "../../../assets/icons/arrow_back.svg";
import { HeadingText, SubText } from "../../../components/CustomTextComponent";
import Proceed from "../../../assets/icons/Proceed_Icon.svg";
import Resend from "../../../assets/icons/resend_icon.svg";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';


const RiderOTPScreen = () => {
  const navigation = useNavigation();

  const [code, setCode] = useState("");
  const inputRefs = useRef([]);
  const [user, setUser] = useState(null)


  const handleChange = (index, value) => {
    setCode((prevCode) => {
      const newCode = prevCode.split("");
      newCode[index] = value;
      return newCode.join("");
    });

    if (value !== "") {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      } else {
        inputRefs.current[index].blur();
      }
    } else {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleProceed = () => {
    navigation.navigate("UniversitySelectScreen");
  };

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

  const handleBack = () => {
    navigation.goBack();
  };

  //check if code is valid
  const isCodeValid = code.length === 6;

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
          text="We sent you a verification code!"
          style={{
            fontSize: 28,
          }}
        />
        <Text style={styles.subheading}>
          Enter the six digit code sent to
          <Text
            style={{
              fontFamily: "SatoshiBold",
              color: "black",
            }}
          >{" "}
            0{user?.user.phone_number}
            
          </Text>
        </Text>

        <View style={styles.otpContainer}>
          {Array.from({ length: 6 }, (_, i) => (
            <TextInput
              key={i}
              style={[styles.input]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(value) => handleChange(i, value)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  handleChange(i - 1, "");
                }
              }}
              ref={(ref) => {
                inputRefs.current[i] = ref;
              }}
            />
          ))}
        </View>
        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            marginLeft: 35,
          }}
        >
          <Resend
            style={{
              marginRight: 8,
            }}
          />

          <SubText
            text="Resend Code"
            style={{
              textAlign: "left",
              fontSize: 15,
            }}
          />
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.button, !isCodeValid && styles.disabledButton]}
          onPress={isCodeValid ? handleProceed : null}
          disabled={!isCodeValid}
        >
          <Text style={styles.buttonText}>Proceed</Text>
          <Proceed />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RiderOTPScreen;

const styles = StyleSheet.create({
  arrow: {
    marginTop: 24,
    marginLeft: 19,
  },
  heading: {
    marginTop: 22,
  },
  subheading: {
    color: "#9A9A9A",
    textAlign: "center",
  },
  buttonView: {
    marginTop: 45,
    marginBottom: 58,
    alignSelf: "flex-end",
    marginRight: 43,
  },
  button: {
    width: 150,
    backgroundColor: "#FFCC2A",
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "right",
    fontFamily: "SatoshiBold",
    fontSize: 18,
    marginRight: 8,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  otpInput: {
    backgroundColor: "black",
    fontSize: 90,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    borderWidth: 2,
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginHorizontal: 8,
    paddingVertical: 16,
    width: 48,
  },
  disabledButton: {
    width: 150,
    backgroundColor: "#9B9B9B",
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
});
