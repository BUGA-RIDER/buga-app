import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Red from "../assets/icons/red_exclamation.svg";
import Right from "../assets/icons/arrowright.svg";
import Tick from "../assets/icons/tick.svg";

export const Pending = () => {
  return (
    <View
      style={{
        backgroundColor: "#FFE9E9",
        marginHorizontal: 16,
        paddingLeft: 13,
        paddingVertical: 15,
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Red
          style={{
            marginRight: 8,
          }}
        />
        <Text
          style={{
            fontFamily: "SatoshiMedium",
            fontSize: 15,
          }}
        >
          Document Submission pending
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 5,
          marginRight: 13,
          marginLeft: 25,
        }}
      >
        <Text
          style={{
            fontFamily: "SatoshiMedium",
            fontSize: 14,
            color: "#4F4F4F",
          }}
        >
          Kindly Submit all required documents to get verified and start
          earning.
        </Text>

        <Right width={15} height={15} />
      </View>
    </View>
  );
};

export const Review = () => {
  return (
    <View
      style={{
        backgroundColor: "#DEDEDE",
        marginHorizontal: 16,
        paddingLeft: 13,
        paddingVertical: 15,
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Red
          style={{
            marginRight: 8,
          }}
        />
        <Text
          style={{
            fontFamily: "SatoshiMedium",
            fontSize: 15,
          }}
        >
          Documents Under Review
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 5,
          marginRight: 13,
          marginLeft: 25,
        }}
      >
        <Text
          style={{
            fontFamily: "SatoshiMedium",
            fontSize: 14,
            color: "#4F4F4F",
          }}
        >
          Your verification status will be displayed once we are
done reviewing your documents.
        </Text>

        <Right width={15} height={15} />
      </View>
    </View>
  );
};

export const Invalid = () => {
  return (
    <View
      style={{
        backgroundColor: "#FFE9E9",
        marginHorizontal: 16,
        paddingLeft: 13,
        paddingVertical: 15,
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Red
          style={{
            marginRight: 8,
          }}
        />
        <Text
          style={{
            fontFamily: "SatoshiMedium",
            fontSize: 15,
          }}
        >
          1 or more documents you submitted is invalid
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 5,
          marginRight: 13,
          marginLeft: 25,
        }}
      >
        <Text
          style={{
            fontFamily: "SatoshiMedium",
            fontSize: 14,
            color: "#4F4F4F",
          }}
        >
          Kindly follow the instructions for each document and resubmit.{" "}
        </Text>

        <Right width={15} height={15} />
      </View>
    </View>
  );
};

export const Congratulations = () => {
  return (
    <View
      style={{
        backgroundColor: "#EEFFE9",
        marginHorizontal: 16,
        paddingLeft: 13,
        paddingVertical: 15,
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Tick
          style={{
            marginRight: 8,
          }}
        />
        <Text
          style={{
            fontFamily: "SatoshiMedium",
            fontSize: 15,
          }}
        >
         Congratulations you’re now a verified driver!
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 5,
          marginRight: 13,
          marginLeft: 25,
        }}
      >
        <Text
          style={{
            fontFamily: "SatoshiMedium",
            fontSize: 14,
            color: "#4F4F4F",
          }}
        >
          Your documents have been reviewed and found to 
be valid. Happy driving!
        </Text>

        <Right width={15} height={15} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
