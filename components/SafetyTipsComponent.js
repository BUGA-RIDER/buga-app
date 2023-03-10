import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Svg } from 'react-native-svg'

const SafetyTipsComponent = ({header, subText, style, icon}) => {
  return (
    <View style={{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30
      }}>
        <View style={{
                padding:12,
                borderRadius:30,
                backgroundColor:"#FFE79A",
                ...style
            }}>
              <Svg width={20} height={20}>
                {icon}
          </Svg>
              </View>
        

      <View style={{
        marginLeft:15
      }}>
        <Text style={{
            fontFamily:"SatoshiBold",
            fontSize:17,
            marginBottom:5
        }} >{header}</Text>
        <Text  style={{
            fontFamily:"SatoshiMedium",
            fontSize:13,
            color:"#A0A0A0"
        }}  >{subText}</Text>
        </View>
      </View>
  )
}

export default SafetyTipsComponent

const styles = StyleSheet.create({})