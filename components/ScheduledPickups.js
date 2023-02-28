import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArrowRight from "../assets/icons/arrowright.svg";

const ScheduledPickups = ({ data }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop:13,
        backgroundColor: "#fff", // add a background color for the shadow
        shadowColor: "#000", // add a color for the shadow
        shadowOffset: {
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 3, // add an elevation value to show the shadow
        paddingBottom: 10,
        marginBottom:20
      }}
    >
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "SatoshiBold",
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            {data.place}
          </Text>
          <Text
            style={{
              fontFamily: "SatoshiMedium",
              fontSize: 13,
              marginBottom: 8,
              color: "#4F4F4F",
            }}
          >
            {data.address}
          </Text>
        </View>
        <View>
          <ArrowRight />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 25,
          borderTopWidth: 0.3,
          borderTopColor: "#4F4F4F",
          paddingTop: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ArrowRight
            style={{
              marginRight: 9,
            }}
          />
          <Text
            style={{
              fontFamily: "SatoshiMedium",
              fontSize: 11,
              marginRight:20
            }}
          >
            {data.time}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "SatoshiBold",
            fontSize: 14,
          }}
        >
          {data.price}
        </Text>
      </View>
    </View>
  );
};

export default ScheduledPickups;

const styles = StyleSheet.create({});
