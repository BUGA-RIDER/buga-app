import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { HeadingText, SubText } from "../../../components/CustomTextComponent";
import From from "../../../assets/icons/from.svg";
import Money from "../../../assets/icons/money.svg";
import Name from "../../../assets/icons/name.svg";
import Star from "../../../assets/icons/bigStar.svg";
import Close from "../../../assets/icons/Vectorclose.svg";
import { useNavigation } from "@react-navigation/core";
import RatingStars from "../../../components/RatingStars";

const RateTrip = () => {
  const navigation = useNavigation();

  const [rating, setRating] = useState(0);


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
      <View style={[styles.bottomSheet, { height: windowHeight * 0.9 }]}>
        <View
          style={{
            alignSelf: "flex-start",
            marginTop: 28,
          }}
        >
          <TouchableOpacity onPress={handleCloseBottomSheet}>
            <Close />
          </TouchableOpacity>
        </View>

        <View style={{marginTop:45}} />
        <Name
          style={{
            alignSelf: "center",
          }}
          width={150}
          height={150}
        />
        <HeadingText text={"How was your trip with Taiwo?"} style={{fontSize:20}} />
        <SubText text={"Rate your experience with the driver"}  style={{fontSize:14, color:"#B3B3B3"}} />
          <View style={{
            marginHorizontal:50,
            padding:20
          }}>
        <RatingStars rating={rating} setRating={setRating} />
           </View>
           <SubText text={"Rate your experience with the driver"}  style={{fontSize:14, color:"#B3B3B3"}} />
          <Text>dsjjsbfsjh</Text>
          <Text>dsjjsbfsjh</Text>
          <Text>dsjjsbfsjh</Text>
          <Text>dsjjsbfsjh</Text>
      </View>
    </Modal>
  );
};

export default RateTrip;

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
