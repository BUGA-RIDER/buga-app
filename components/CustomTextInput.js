import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';

const CustomTextInput = ({ iconLeft, iconRight,label, required, width, height, style, ...rest }) => {
  return (
    <View >
      <View style={{
        flexDirection:'row'
      }}>
      <Text style={{
        marginLeft:43,
        marginBottom:8,
        fontFamily:"SatoshiMedium"
      }}
      >{label}</Text>

    {required && (
        <Svg width={16} height={12} 
            style={{ 
              alignSelf:'flex-end',
              marginBottom:3,
              marginLeft:4,
             }}>
          {required}
        </Svg>
      )}

      </View>
    <View style={{ 
      borderWidth: 1, 
      borderColor: '#ccc', 
      borderRadius: 4, 
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical:10,
      marginHorizontal:43,
      alignItems:'center',
      ...style
    }}>
      {iconLeft && (
        <Svg width={20} height={20} style={{ 
            marginRight: 12,
            marginLeft:16,
            marginTop:5,
             }}>
          {iconLeft}
        </Svg>
      )}
      <TextInput style={{ 
        flex: 1,
        fontFamily:"SatoshiMedium",
        fontSize:15 
        }} {...rest} />
      {iconRight && (
        <Svg width={20} height={12} style={{ 
            marginRight: 16,
            alignSelf:'center' 
            }}>
          {iconRight}
        </Svg>
      )}
    </View>
    </View>
  );
};

export default CustomTextInput;
