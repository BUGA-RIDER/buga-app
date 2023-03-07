import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const BookingHeader = () => {

    function handleRealtime (){
        setRealtime(true)
        setSchedule(false)
    }
    function handleSchedule (){
        setSchedule(true)
        setRealtime(false)
    }

      const [realtime, setRealtime] = useState(true)
      const [schedule, setSchedule] = useState(false)
  return (
    
    <View style={styles.picker}>
            
            <TouchableOpacity onPress={handleRealtime} >
            <Text style={[
                styles.buttonText, 
                realtime && 
                styles.buttonPressed]}>
                Book Realtime
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSchedule}
             >
            <Text style={[
                styles.buttonText, 
                schedule && 
                styles.buttonPressedtwo]}>
                Schedule Trip
            </Text>
            </TouchableOpacity>
        </View>
  )
}

export default BookingHeader

const styles = StyleSheet.create({
    picker:{
        zIndex:1,
        width:286,
        backgroundColor:"white",
        flexDirection:"row",
        alignSelf:'center',
        justifyContent:'space-around',
        borderRadius:5,
        paddingHorizontal:5,
        paddingVertical:5
    },
    buttonText:{
        fontSize:16,
        paddingHorizontal:55,
        paddingVertical:8,
        borderRadius:7,
        color:"black",
        fontFamily:"SatoshiMedium"
    },
    buttonPressed: {
        backgroundColor: 'black',
        color:"white",
        paddingHorizontal:20,
        marginLeft:15
      },
    buttonPressedtwo: {
        backgroundColor: 'black',
        color:"white",
        paddingHorizontal:28,
        marginRight:20
      },
})