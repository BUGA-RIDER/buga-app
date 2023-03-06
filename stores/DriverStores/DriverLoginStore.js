import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

export const DriverLoginStore = create((set) => ({
    driver: null,
    isLoading: false,
    error: null,

    login: async (email, password, navigation) => {
    set({isLoading: true, error: null});

    const response = await fetch('http://192.168.46.125:5000/api/driver/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });
    const json = await response.json();
    
    if (!response.ok) {
      set({error: json.error, isLoading: false});
    }
    if (response.ok) {
      await AsyncStorage.setItem('driver', JSON.stringify(json));
      set({driver: json, isLoading: false});
      navigation.navigate('DriverHome')
    }
  },
  logout: () => {
    AsyncStorage.removeItem('driver');
    set({driver: null});
  },
}));