import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

export const addUniversity = create((set) => ({
    user: null,
    isLoading: false,
    error: null,

    add: async (id,
        university,
        navigation) => {
    set({isLoading: true, error: null});

    const response = await fetch('http://192.168.46.125:5000/api/user/adduni', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id,
        university,
        }),
    });
    const json = await response.json();
    
    if (!response.ok) {
      set({error: json.error, isLoading: false});
    }
    if (response.ok) {
      console.log("good")
      navigation.navigate('RiderEmergency')
    }
  },
}));