import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'

const Map = () => {
  return (
    <MapView
    style={{
      flex:1
    }}
    mapType='mutedStandard'
  initialRegion={{
    latitude: 6.672740600625564,
    longitude: 3.1611700813368864,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>
  <Marker 
      coordinate={{
          latitude: 6.672740600625564,
          longitude: 3.1611700813368864
      }}
      title="Origin"
      identifier="origin"
  />
</MapView>


  );
};

export default Map

const styles = StyleSheet.create({})