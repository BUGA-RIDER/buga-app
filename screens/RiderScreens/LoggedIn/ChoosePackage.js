import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Map from '../../../components/Map'
import Economy from '../../../assets/icons/Economy.svg'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import { Button } from '../../../components/Button'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectPackage from '../../../components/SelectPackage'
import PriceRange from './PriceRange'



const ChoosePackage = () => {
    const Stack = createNativeStackNavigator();

  return (
    <View>
        <View style={{ height:"65%", }}>
        <Map/>
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
          name="PriceRange"
          component={PriceRange}
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

export default ChoosePackage

const styles = StyleSheet.create({})