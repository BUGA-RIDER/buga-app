import {Dimensions,Modal,StyleSheet,Text,TouchableOpacity,View} from "react-native";
import React, { useState } from "react";
import { HeadingText, SubText } from "../../../components/CustomTextComponent";
import From from "../../../assets/icons/from.svg";
import Money from "../../../assets/icons/money.svg";
import { useNavigation } from "@react-navigation/core";

const FriendSplitFareModal = () => {
  const navigation = useNavigation();

  // We need to get the height of the phone and use it relatively,
  // This is because height of phones vary
  const windowHeight = Dimensions.get("window").height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

  // Function to open the bottom sheet
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };
  const handleAccept = () => {
    navigation.navigate("PaymentSuccessful");
  };

  // Function to close the bottom sheet
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      // We use the state here to toggle visibility of Bottom Sheet
      visible={isBottomSheetOpen}
      // We pass our function as default function to close the Modal
      onRequestClose={handleCloseBottomSheet}
    >
      <View style={[styles.bottomSheet, { height: windowHeight * 0.87 }]}>
        <View>
          <TouchableOpacity onPress={handleCloseBottomSheet}></TouchableOpacity>
        </View>

        <View style={{ paddingVertical: 15 }}>
          <HeadingText
            text={
              "Your friend Ore has requested to split the ride fare with you."
            }
            style={{
              fontSize: 18,
              marginBottom: 20,
              marginTop: 10,
              marginRight: 40,
              marginLeft: 40,
            }}
          />

          <Text
            style={{
              fontFamily: "SatoshiBold",
              fontSize: 15,
            }}
          >
            Trip Details
          </Text>

          <View
            style={{
              marginTop: 10,
              backgroundColor: "#FFF7DD",
              marginBottom: 12,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                paddingLeft: 21,
                paddingVertical: 10,
              }}
            >
              <From />
              <Text
                style={{
                  fontFamily: "SatoshiMedium",
                  fontSize: 15,
                  paddingLeft: 13,
                }}
              >
                Covenant University
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                paddingLeft: 21,
                paddingVertical: 10,
              }}
            >
              <From />
              <Text
                style={{
                  fontFamily: "SatoshiMedium",
                  fontSize: 15,
                  paddingLeft: 13,
                }}
              >
                46, Ogundiran street, Agege, Lagos
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                paddingLeft: 21,
                paddingVertical: 10,
              }}
            >
              <From />
              <Text
                style={{
                  fontFamily: "SatoshiMedium",
                  fontSize: 15,
                  paddingLeft: 13,
                }}
              >
                Plot 2, Osapa London, Lekki, Lagos
              </Text>
            </View>

            <View
              style={{
                borderColor: "black",
                borderBottomWidth: 0.5,
                marginHorizontal: 25,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 25,
                marginTop: 15,
                marginBottom: 22,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Money />
                <Text
                  style={{
                    fontFamily: "SatoshiMedium",
                    fontSize: 15,
                    marginLeft: 10,
                  }}
                >
                  Total Cost
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: "SatoshiBold",
                  fontSize: 15,
                }}
              >
                ₦12000
              </Text>
            </View>
          </View>

          <HeadingText
            text={"Mon 22 Feb, 3:00 PM"}
            style={{
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 12,
              backgroundColor: "#FFCC2A",
              alignSelf: "center",
              borderRadius: 5,
            }}
          />

          <Text
            style={{
              fontSize: 20,
              color: "#767272",
              marginTop: 24,
              fontFamily: "SatoshiMedium",
              textAlign: "center",
            }}
          >
            Total ride fare
          </Text>

          <HeadingText
            text={"₦12000 "}
            style={{
              fontSize: 22,
              marginTop: 10,
            }}
          />

          <Text
            style={{
              fontSize: 20,
              color: "#767272",
              marginTop: 24,
              fontFamily: "SatoshiMedium",
              textAlign: "center",
            }}
          >
            You are to pay
          </Text>

          <HeadingText
            text={"₦4000"}
            style={{
              fontSize: 22,
              marginTop: 10,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 18,
              marginHorizontal: 18,
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 50,
                paddingVertical: 15,
                backgroundColor: "#FFCC2A",
                borderRadius: 5,
              }}
              onPress={handleAccept}
            >
              <Text
                style={{
                  fontFamily: "SatoshiBold",
                  fontSize: 16,
                  marginBottom: 3,
                  textAlign: "right",
                }}
              >
                Accept
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCloseBottomSheet}
              style={{
                paddingHorizontal: 50,
                paddingVertical: 15,
                borderColor: "#FFCC2A",
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "SatoshiBold",
                  fontSize: 16,
                  marginBottom: 3,
                  textAlign: "right",
                }}
              >
                Decline
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "SatoshiBold",
            fontSize: 16,
            marginBottom: 3,
            textAlign: "center",
          }}
        >
          3 mins{" "}
          <Text
            style={{
              fontFamily: "SatoshiMedium",
              fontSize: 16,
              marginBottom: 3,
            }}
          >
            left to accept or decline
          </Text>
        </Text>
      </View>
    </Modal>
  );
};

export default FriendSplitFareModal;

const styles = StyleSheet.create({
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 0,
    paddingHorizontal: 25,
    bottom: 0,
  },
});
