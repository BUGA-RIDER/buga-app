import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../../../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnRouteStack from './EnRouteStack'
import DriverArrivedStack from './DriverArrivedStack'


const DriverEnRoute = () => {
    const Stack = createNativeStackNavigator();

    return (
      <View>
          <View style={{ height:"35%", }}>
          <Map/>
          </View>
          <View style={{ height:"65%", backgroundColor:"white", borderTopLeftRadius:30, borderTopStartRadius:30 }}>
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
            </Stack.Navigator>
          </View>
      </View>
    )
}

export default DriverEnRoute

const styles = StyleSheet.create({})