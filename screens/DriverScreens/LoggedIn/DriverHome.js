import {
  FlatList,
  ImageBackground,
  ScrollView,
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
import ScheduledPickups from "../../../components/ScheduledPickups";
import { DATA } from "../../../constants/scheduled";
import { DATA2 } from "../../../constants/upcoming";
import Operations from "../../../components/Operations";
import BottomMenu from "../../../components/BottomMenu";
import { StatusBar } from "expo-status-bar";
import LoggedInHeader from "../../../components/LoggedInHeader";

const DriverHome = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      <StatusBar backgroundColor="#FFCC2A" />

      <LoggedInHeader 

      walletBalance="₦15,235"
      userName="Öreoluwa"
      bottomText="Withdraw"/>

      <View
        style={{
          marginTop: 50,
          marginBottom: 18,
        }}
      >
        <Congratulations />
      </View>
      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
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
                marginRight: 6,
              }}
            >
              See all
            </Text>
            <RightIcon />
          </View>
        </View>
        <View style={{ flex: 0 }}>
          <FlatList
            data={DATA}
            horizontal={true}
            renderItem={({ item }) => <ScheduledPickups data={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 0 }}
          />
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
            Upcoming Operation Periods
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
                marginRight: 6,
              }}
            >
              See all
            </Text>
            <RightIcon />
          </View>
        </View>
        <View
          style={{
            marginTop: 14,
          }}
        >
          <FlatList
            data={DATA}
            horizontal={true}
            renderItem={({ item }) => <Operations data={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 0 }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          bottom: 0,
          marginTop: 20,
        }}
      >
        <BottomMenu />
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
