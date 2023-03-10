import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "../../../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EnRouteStack from "./EnRouteStack";
import DriverArrivedStack from "./DriverArrivedStack";
import RideInProgress from "./RideInProgress";
import Alert from "../../../assets/icons/asterisk.svg";
import { HeadingText } from "../../../components/CustomTextComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import RiderArrivedStack from "./RiderArrivedStack";
import CashDue from "./CashDue";

const TripStarted = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={{ height: "45%" }}>
        <Map />
        {/* <TouchableOpacity style={{
                
                top:50,
                paddingVertical:8,
                paddingHorizontal:12,
                borderRadius:20,
                backgroundColor:"#FFD240"
            }}
            >
               <Alert color="black" style={{ alignSelf:'center',marginRight: 7}}/>
                <HeadingText text={"Scheduled"} style={{fontSize:15,marginBottom:0}}/>
             </TouchableOpacity> */}
      </View>

      <View
        style={{
          height: "55%",
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopStartRadius: 30,
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="RideInProgress"
            component={RideInProgress}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="RiderArrivedStack"
            component={RiderArrivedStack}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="CashDue"
            component={CashDue}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default TripStarted;

const styles = StyleSheet.create({});
