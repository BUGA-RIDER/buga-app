import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Arrow from '../../../assets/icons/arrow_back.svg' ;
import From from '../../../assets/icons/from.svg' ;
import To from '../../../assets/icons/to.svg' ;
import Plus from '../../../assets/icons/plus.svg' ;
import Passengers from '../../../assets/icons/Passengers.svg' ;
import Luggage from '../../../assets/icons/luggage.svg' ;
import Calendar from '../../../assets/icons/calendar-days.svg' ;
import Clock from '../../../assets/icons/clock.svg' ;
import Edit from '../../../assets/icons/edit.svg' ;
import { useNavigation } from '@react-navigation/core';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


const EconomyBooking = () => {
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      mode: currentMode,
      is24Hour: true,
    });
  };

const [date, setDate] = useState(new Date(1598051730000));
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);



const showDatepicker = () => {
showMode('date');
showMode('time');
};
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
    
    const navigation = useNavigation()

    const handleBack = () => {
        navigation.goBack();
      };
    const handleRealTime = () => {
        navigation.navigate("ChoosePackage");
      };
    const handleScheduled = () => {
        navigation.navigate("ScheduledPackage");
      };

    
   
  return (
    <SafeAreaView >
        <View style={styles.yellowtop}>
            
        <StatusBar backgroundColor='#FFCC2A'/>
        <View style={styles.topheader}>
        <TouchableOpacity style={styles.arrow} onPress={handleBack}>
          <Arrow/>
        </TouchableOpacity>
        <Text style={styles.economyTop}>Economy</Text>
        </View>
      {/* <BookingHeader/> */}
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
      <View style={{
        flexDirection:'row',
        marginLeft:34,
        alignItems:'center',
        marginTop:12
      }}>
        <From style={{
            marginRight: 16
        }}/>
        <TextInput placeholder='Covenant University' style={{
            backgroundColor:"white",
            paddingVertical:3,
            borderRadius:5,
            width:286,
            paddingLeft:17,
            fontSize:15,
            fontFamily:"SatoshiMedium"
        }} />
      </View>
      <View style={{
        flexDirection:'row',
        marginLeft:34,
        alignItems:'center',
        marginTop:12
      }}>
        <To style={{
            marginRight: 16
        }}/>
        <TouchableOpacity style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            flexDirection: 'row',
            paddingHorizontal: 8,
            paddingVertical:5,
            alignItems: 'center',
            backgroundColor:"white",
            width:288, }}
            onPress={ realtime ? handleRealTime : handleScheduled }
            >
        <TextInput placeholder='46, Osapa London, Lekki, Lagos' style={{
            paddingLeft:10,
            fontSize:15,
            fontFamily:"SatoshiMedium"
        }} />
        <Plus style={{
            marginLeft:48
        }}/>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:13,}}>

        <View style={{
            flexDirection:'row',
            alignSelf:'flex-end',
            marginRight:60,
            alignItems:'center'
            }}>

            <Passengers /> 
            <Text style={styles.smallText}>1 Passenger</Text>

            <Luggage/> 
            <Text style={styles.smallText}>4 Luggage</Text>
            <View style={{
                padding:5,
                backgroundColor:"#FFFFFF66",
                borderRadius:50
            }}>
            <Edit height={8} width={8} />
            </View>
            </View>
            
           { schedule && <View style={{
                borderWidth:0.3,
                borderColor:"#000000",
                marginTop:15,
                marginHorizontal:60,
                marginBottom:13
            }}/>}
        
       {schedule && <TouchableOpacity style={{
            flexDirection:'row',
            paddingLeft:12.5,
            paddingRight:29,
            paddingVertical:10,
            borderWidth:1,
            backgroundColor:"white",
            alignSelf:'flex-start',
            marginLeft:60,
            borderRadius:5
            }}
            onPress={showDatepicker}
            >

            <Calendar style={{marginRight:7.5}}/>
            <Clock/>
        <Text style={{fontFamily:"SatoshiMedium", fontSize:15, color:"#767676", marginLeft:13}}>Date/Time</Text>
        </TouchableOpacity>}

      </View>
      </View>
         
    </SafeAreaView>
  )
}

export default EconomyBooking

const styles = StyleSheet.create({
    arrow:{
        alignItems:'flex-start',
        marginLeft:20,
        alignSelf:'flex-start',
        marginTop:8
      },
      yellowtop:{
        flex:0,
        backgroundColor:"#FFCD30",
        paddingBottom:23,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20
      },
      topheader:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:16,
        justifyContent:'flex-start'
      },
      economyTop:{
        color:"white",
        fontFamily:"SatoshiMedium",
        fontSize:14,
        textAlign:'center',
        marginLeft:135,
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor:"black",
        borderRadius:50,
        marginBottom:16,
      },
      smallText:{
        fontFamily:"SatoshiMedium",
        fontSize:12,
        color:"#696969",
        marginRight:9
      },
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
        marginLeft:15,
        marginVertical:0
      },
    buttonPressedtwo: {
        backgroundColor: 'black',
        color:"white",
        paddingHorizontal:28,
        marginRight:20
      },
})