import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';

 export const CustomTextInput = ({  iconLeft, iconRight,label, required, width, height, style, ...rest }) => {
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

export const CustomUploadInput = ({ iconRight,label, textRight, style, ...rest }) => {
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


      </View>
    <View style={{ 
      borderWidth: 1, 
      borderColor: '#ccc', 
      borderRadius: 4, 
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical:10,
      marginHorizontal:43,
      marginBottom:24,
      alignItems:'center',
      ...style
    }}>
      <TextInput style={{ 
        flex: 1,
        fontFamily:"SatoshiMedium",
        fontSize:15 
        }} {...rest} />

        <View style={{
          flexDirection:'row',
          borderStyle:'dashed',
          borderWidth:2,
          padding:7,
          borderRadius:5,
          borderColor:"#FFCC2A"
        }}>
      {iconRight && (
        <Image style={{ 
            marginRight: 7,
            alignSelf:'center'
            }}
            source= {iconRight}
            />
      )}
      {textRight && (
        <Text style={{ 
            marginRight: 16,
            alignSelf:'center',
            fontFamily:"SatoshiMedium",
            fontSize:13 
            }}>
          {textRight}
        </Text>
      )}
      </View>
    </View>
    </View>
  );
};