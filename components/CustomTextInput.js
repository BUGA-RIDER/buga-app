import React from 'react';
import { View, TextInput } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';

const CustomTextInput = ({ iconLeft, iconRight, ...rest }) => {
  return (
    <View style={{ 
      borderWidth: 1, 
      borderColor: '#ccc', 
      borderRadius: 4, 
      flexDirection: 'row',
      height:43,
      paddingHorizontal: 8,
      marginHorizontal:43,
      alignItems:'center',
    }}>
      {iconLeft && (
        <Svg width={16} height={12} style={{ 
            marginRight: 12,
            marginLeft:16,
            alignContent:'flex-start'
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
        <Svg width={18} height={15} style={{ 
            marginRight: 16,
            alignSelf:'center' }}>
          {iconRight}
        </Svg>
      )}
    </View>
  );
};

export default CustomTextInput;
