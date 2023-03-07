import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Map from '../../../components/Map'
import Calendar from '../../../assets/icons/calendar-days.svg' ;
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import { Button } from '../../../components/Button'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectPackage from '../../../components/SelectPackage'

const ScheduledPackage = () => {
    const Stack = createNativeStackNavigator();
  return (
    <View  >
        <View style={{ height:"65%", }}>
            <Map/>
            <View style={{
                flexDirection:'row',
               
                position:'absolute',
                bottom:40,
                left:30,
                paddingVertical:8,
                paddingHorizontal:12,
                borderRadius:20,
                backgroundColor:"#FFD240"
            }}>
               <Calendar style={{ alignSelf:'center',marginRight: 7}}/>
                <HeadingText text={"Scheduled"} style={{fontSize:15,marginBottom:0}}/>
             </View>
        </View>
        <View style={{ height:"35%", backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30 }}>
        <Stack.Navigator>
          <Stack.Screen
          name="NavigateCard"
          component={SelectPackage}
          options={{
            headerShown: false,
          }}
          >
          </Stack.Screen>
          
          <Stack.Screen
          name="NavigateCard2"
          component={SelectPackage}
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