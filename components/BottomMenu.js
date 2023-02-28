import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Activity from "../assets/icons/activity.svg"
import Drive from "../assets/icons/drive.svg"

const BottomMenu = () => {
  return (
    <View
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: "100%",
          paddingBottom: 15,
          paddingTop: 10,
          justifyContent: "space-evenly",
          backgroundColor: "white",
          opacity: 1,
          marginRight: 70,
        }}
      >
        <View style={styles.navMenu}>
          <Activity width={25} height={25} />
          <Text style={styles.text}>Activity</Text>
        </View>
        <View style={styles.navMenu}>
          <Drive width={24} height={24} />
          <Text style={styles.text}>Drive</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  navMenu:{
    alignItems:'center'
  },
  text:{
    fontFamily:'SatoshiBold',
     fontSize:12,
     color:"#8A8A8A",
  }
});
