import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Map from '../../../components/Map';
import SelectDriverComponent from '../../../components/SelectDriverComponent';
import { DATA } from '../../../constants/driversData';

const SelectDriver = () => {
  return (
    <View>
    <View style={{ height:"15%", }}>
    <Map/>
    </View>
    <View style={{ height:"100%", backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30, marginBottom:-250 }}>
        <FlatList 
        data={DATA}
        renderItem={({ item }) => <SelectDriverComponent data={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 0 }} />   
    </View>
     </View>
  )
}

export default SelectDriver

const styles = StyleSheet.create({})