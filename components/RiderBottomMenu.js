import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Activity from "../assets/icons/activity.svg"
import Drive from "../assets/icons/drive.svg"


const RiderBottomMenu = () => {
  return (
    <View>
      <View
        style={{
          position:"absolute",
          bottom:-85,
          flex: 1,
          flexDirection: "row",
          width: "100%",
          paddingVertical:15,
          justifyContent: "space-evenly",
          backgroundColor: "white",
          opacity: 1,
        }}
      >
        <View style={styles.navMenu}>
          <Activity width={25} height={25} />
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.navMenu}>
          <Drive width={24} height={24} />
          <Text style={styles.text}>Trips</Text>
        </View>
        <View style={styles.navMenu}>
          <Drive width={24} height={24} />
          <Text style={styles.text}>Profile</Text>
        </View>
      </View>
    </View>
  )
}

export default RiderBottomMenu

const styles = StyleSheet.create({
    navMenu:{
        alignItems:'center'
      },
      text:{
        fontFamily:'SatoshiBold',
         fontSize:12,
         color:"#8A8A8A",
      }
})