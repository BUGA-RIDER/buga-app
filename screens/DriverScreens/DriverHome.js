import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnboardingSlide from '../../components/OnboardingSlide'
import driveronboarding from '../../constants/driveronboarding'

const DriverHome = () => {
  return (
    <View style={styles.container}>
        {driveronboarding.map((item) => (
        <OnboardingSlide key={item.id} item={item} />
                ))}
        </View>
  );
};

export default DriverHome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})