import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import Cash from "../../../assets/icons/cash.svg";
import { useNavigation } from "@react-navigation/core";
import { HeadingText } from "../../../components/CustomTextComponent";

const CashDue = () => {
 
    const navigation = useNavigation();

    const handleNext = () => {
      navigation.navigate("DriverArrivedStack");
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <View
          style={{
            paddingHorizontal: 40,
            paddingVertical: 20,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: "#0C973A",
          }}
        >
          <Text
            style={{
              fontFamily: "SatoshiBold",
              fontSize: 16,
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            You’ve arrrived at your destination!
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#5C5C5C",
            opacity: 0.3,
          }}
        />
        <View style={{
            alignSelf:"center",
            alignItems:"center",
            marginTop:70
        }}>
            <Cash/>
            <HeadingText text={"₦4600"} style={{
                marginTop:65,
                fontSize:32,
                margin:0
            }} />
        </View>
      </View>
    );
}

export default CashDue

const styles = StyleSheet.create({})