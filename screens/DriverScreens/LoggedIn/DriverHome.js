import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../../assets/icons/background.png";
import Menu from "../../../assets/icons/Icon.svg";
import Notification from "../../../assets/icons/Notification.svg";
import Wallet from "../../../assets/icons/wallet.svg";
import RightIcon from "../../../assets/icons/arrowright.svg";
import {
  Congratulations,
  Invalid,
  Pending,
  Review,
} from "../../../components/SubmitDocuments";

const DriverHome = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <ImageBackground source={Background} style={styles.background} />
      </View>

      <View style={styles.top}>
        <View style={styles.topIcons}>
          <Menu />
        </View>
        <Text style={styles.topText}>Hi there, Oreoluwa</Text>
        <View style={styles.topIcons}>
          <Notification />
        </View>
      </View>
      <View style={styles.walletInfo}>
        <Wallet
          style={{
            alignSelf: "center",
          }}
        />
        <Text style={styles.walletAmount}>₦15,235</Text>
        <Text style={styles.walletBalance}>WALLET BALANCE</Text>

        <TouchableOpacity style={styles.withdraw}>
          <Text style={styles.withdrawText}>Withdraw</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 50,
          marginBottom: 18,
        }}
      >
        <Congratulations />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 12,
        }}
      >
        <Text
          style={{
            fontFamily: "SatoshiBold",
            fontSize: 18,
          }}
        >
          Scheduled Pickups
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "SatoshiMedium",
              fontSize: 16,
              textDecorationLine: "underline",
            }}
          >
            See all
          </Text>
          <RightIcon />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DriverHome;

const styles = StyleSheet.create({
  background: {
    resizeMode: "stretch",
    width: 455,
    height: 285,
    alignSelf: "center",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 34,
    marginTop: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  topIcons: {
    padding: 7,
    backgroundColor: "white",
    borderRadius: 5,
  },
  topText: {
    fontFamily: "SatoshiBold",
    fontSize: 18,
  },
  walletInfo: {
    alignSelf: "center",
  },
  walletAmount: {
    fontFamily: "SatoshiBold",
    fontSize: 35,
  },
  walletBalance: {
    fontFamily: "SatoshiBold",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "700",
    color: "#565656",
    marginBottom: 15,
  },
  withdraw: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  withdrawText: {
    fontFamily: "SatoshiBold",
    fontSize: 15,
  },
});
