import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeadingText, SubText } from '../../components/CustomTextComponent'



const Successful = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image />
      <HeadingText
        text="Your documents have been submitted and is under review "
        style={{
          fontSize: 23,
          color: "black",
          lineHeight: 30,
          marginHorizontal: 26,
          alignText: "center",
        }}
      />
      <SubText
        text="Your will be notified with your application
        status once the review is completed"
        style={{
          color: "#9A9A9A",
          fontSize: 15,
          marginHorizontal: 70,
          alignText: "center",
        }}
      />

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonone}>
          <Text style={styles.buttonText}>Go to Homescreen</Text>
   
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttontwo}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Successful

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
     },
     buttonView:{
        marginTop:50,
        alignSelf:'center',  
    },
    buttonone:{
        width:280,
        backgroundColor:"#FFCC2A",
        paddingVertical:20,
        borderRadius: 5,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        marginBottom:10
    },
    buttontwo:{
        width:280,
        backgroundColor:"white",
        paddingVertical:20,
        borderRadius: 5,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:"#FFCC2A"
    },
    buttonText:{
        textAlign:'right',
        fontFamily:"SatoshiBold",
        fontSize:18,
        marginRight:8
    }
})