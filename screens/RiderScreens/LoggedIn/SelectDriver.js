import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Map from '../../../components/Map';
import SelectDriverComponent from '../../../components/SelectDriverComponent';

const SelectDriver = () => {
  return (
    <View>
    <View style={{ height:"15%", }}>
    <Map/>
    </View>
    <View style={{ height:"100%", backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30 }}>
    <SelectDriverComponent/>    
    </View>
     </View>
  )
}

export default SelectDriver

const styles = StyleSheet.create({})