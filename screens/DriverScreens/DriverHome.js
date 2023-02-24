import { StyleSheet, View } from 'react-native'
import React,{useState} from 'react'
import OnboardingSlide from '../../components/OnboardingSlide'
import driveronboarding from '../../constants/driveronboarding'
import OnboardingHeader from '../../components/OnboardingHeader';
import { useOnboardingStore } from '../../stores/useOnboardingStore';

const DriverHome = () => {
    const selectedOption = useOnboardingStore((state) => state.selectedOption);

  return (
    <View style={styles.container}>
        <OnboardingHeader/>
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