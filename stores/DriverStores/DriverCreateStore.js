import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

export const driverSignup = create((set) => ({
    driver: null,
    isLoading: false,
    error: null,

    signup: async (name,
        password,
        email,
        city,state,street,
        wallet_balance,
        phone_number,
        alternate_phone_number, navigation, ) => {
    set({isLoading: true, error: null});

    const response = await fetch('http://192.168.46.125:5000/api/driver/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        password,
        email,
        city,state,street,
        wallet_balance,
        phone_number,
        alternate_phone_number,}),
    });
    const json = await response.json();
    
    if (!response.ok) {
      set({error: json.error, isLoading: false});
    }
    if (response.ok) {
      await AsyncStorage.setItem('user', JSON.stringify(json));
      set({driver: json, isLoading: false});
      navigation.navigate('OTPScreen'); 
    }
  },
  logout: () => {
    AsyncStorage.removeItem('driver');
    set({driver: null});
  },
}));