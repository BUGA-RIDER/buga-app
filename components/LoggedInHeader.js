import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Menu from "../assets/icons/Icon.svg";
import Notification from "../assets/icons/Notification.svg";
import Wallet from "../assets/icons/wallet.svg";
import Background from "../assets/icons/background.png";
import { StatusBar } from 'expo-status-bar';


const LoggedInHeader = ({userName, walletBalance, bottomText}) => {
  return (
    <View>
    <StatusBar backgroundColor="#FFCC2A" />
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
        <Text style={styles.topText}>Hi there, {userName}</Text>
        <View style={styles.topIconsTwo}>
          <Notification />
        </View>
      </View>
      <View style={styles.walletInfo}>
        <Wallet
          style={{
            alignSelf: "center",
          }}
        />
        <Text style={styles.walletAmount}>{walletBalance}</Text>
        <Text style={styles.walletBalance}>WALLET BALANCE</Text>

        <TouchableOpacity style={styles.withdraw}>
          <Text style={styles.withdrawText}>{bottomText}</Text>
        </TouchableOpacity>
      </View>
      </View>
  )
}

export default LoggedInHeader

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
      topIconsTwo: {
        paddingHorizontal:4,
        paddingVertical:4,
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
})