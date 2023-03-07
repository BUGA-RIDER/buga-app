import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../../../components/Map'
import Economy from '../../../assets/icons/Economy.svg'
import { HeadingText, SubText } from '../../../components/CustomTextComponent'
import { Button } from '../../../components/Button'


const ChoosePackage = () => {
  return (
    <View>
        <View style={{ height:"60%", }}>
            <Map/>
        </View>
        <View style={{ height:"40%", backgroundColor:"white", borderTopEndRadius:30, borderTopStartRadius:30 }}>

            <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginTop:45,
                    backgroundColor:"#E0E0E0",
                    paddingVertical:12,
                    paddingLeft:10
                }} >
                <Economy/>
                <View style={{
                    marginLeft:18
                }}>
                <HeadingText text={"Economy Basic"} style={{
                    fontSize:17,
                    marginBottom:0
                }}/>
                <SubText text={"Saloon Car"} style={{
                    fontSize:12,
                    paddingTop:0,
                    textAlign:"left",
                    color:"#696969"
                }}/>
                </View>
                <SubText text={"Recommended"}
                 style={{
                    fontSize:14,
                    paddingTop:0,
                    color:"#33C300",
                    marginLeft:40
                }}
                 />
            </View>
            <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    paddingVertical:12,
                    paddingLeft:10
                }} >
                <Economy/>
                <View style={{
                    marginLeft:18
                }}>
                <HeadingText text={"Economy Plus"} style={{
                    fontSize:17,
                    marginBottom:0
                }}/>
                <SubText text={"SUV/Sienna (7 seater)"} style={{
                    fontSize:12,
                    paddingTop:0,
                    textAlign:"left",
                    color:"#696969"
                }}/>
                </View>
            </View>
                <Button text={"Proceed"} style={{
                    marginLeft:29,
                    marginTop:20
                }}/>
        </View>
    </View>
  )
}

export default ChoosePackage

const styles = StyleSheet.create({})