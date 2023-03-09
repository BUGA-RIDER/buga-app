import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Map from '../../../components/Map'
import Calendar from '../../../assets/icons/calendar-days.svg' ;
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import { Button } from '../../../components/Button'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectPackage from '../../../components/SelectPackage'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import ScheduledPriceRange from './ScheduledPriceRange';
import ScheduledSelectPackage from '../../../components/ScheduledSelectPackage';
import FindingDriver from './FindingDriver';

const ScheduledPackage = () => {
    const Stack = createNativeStackNavigator();

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
          value: date,
          mode: currentMode,
          is24Hour: true,
        });
      };

    const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);



  const showDatepicker = () => {
    showMode('date');
    showMode('time');
  };

 
  return (
    <View  >
        <View style={{ height:"60%", }}>
            <Map/>
            <TouchableOpacity style={{
                flexDirection:'row',
                position:'absolute',
                bottom:30,
                left:20,
                paddingVertical:8,
                paddingHorizontal:12,
                borderRadius:20,
                backgroundColor:"#FFD240"
            }}
            onPress={showDatepicker}
            >
               <Calendar style={{ alignSelf:'center',marginRight: 7}}/>
                <HeadingText text={"Scheduled"} style={{fontSize:15,marginBottom:0}}/>
             </TouchableOpacity>
        </View>
        <View style={{ height:"40%", backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30, }}>
        <Stack.Navigator>
          <Stack.Screen
          name="ScheduledSelectPackage"
          component={ScheduledSelectPackage}
          options={{
            headerShown: false,
          }}
          >
          </Stack.Screen>
          <Stack.Screen
          name="ScheduledPriceRange"
          component={ScheduledPriceRange}
          options={{
            headerShown: false,
          }}
          >
          </Stack.Screen>
          <Stack.Screen
          name="FindingDriver"
          component={FindingDriver}
          options={{
            headerShown: false,
          }}
          >
          </Stack.Screen>
          </Stack.Navigator>
        </View>
        </View>
   
  )
}

export default ScheduledPackage

const styles = StyleSheet.create({})