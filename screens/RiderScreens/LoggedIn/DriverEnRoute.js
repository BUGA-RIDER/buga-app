import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Map from '../../../components/Map'
import Economy from '../../../assets/icons/Economy.svg'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import { Button } from '../../../components/Button'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectPackage from '../../../components/SelectPackage'
import ScheduledPriceRange from './ScheduledPriceRange'
import PriceRange from './PriceRange'
import FindingDriver from './FindingDriver'
import EnRouteStack from './EnRouteStack'
import DriverArrivedStack from './DriverArrivedStack'


const DriverEnRoute = () => {
    const Stack = createNativeStackNavigator();

    return (
      <View>
          <View style={{ height:"35%", }}>
          <Map/>
          </View>
          <View style={{ height:"65%", backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30 }}>
          <Stack.Navigator>
            <Stack.Screen
            name="EnRouteStack"
            component={EnRouteStack}
            options={{
              headerShown: false,
            }}
            >
            </Stack.Screen>
            <Stack.Screen
            name="DriverArrivedStack"
            component={DriverArrivedStack}
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

export default DriverEnRoute

const styles = StyleSheet.create({})