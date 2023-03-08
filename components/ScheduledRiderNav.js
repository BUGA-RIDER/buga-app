import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { HeadingText, SubText } from './CustomTextComponent'
import Mail from "../assets/icons/information-circle.svg"
import From from "../assets/icons/good.svg"
import Withrider from "../assets/icons/withrider.svg"
import Matchme from "../assets/icons/matchme.svg"
import Economy_Car from "../assets/icons/Economy.svg"
import First_Class from "../assets/icons/First-Class.svg"
import Keke from "../assets/icons/E-trike.svg"
import Inter_state_car from "../assets/icons/Inter-state.svg"
import { Button } from './Button'
import { useNavigation } from '@react-navigation/core';


const ScheduledRiderNav = () => {

    const navigation = useNavigation();


    const windowHeight = Dimensions.get('window').height;

    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [rider, setRider] = useState(true)
    const [hasrider, setHasrider] = useState(true)
    const [match, setMatch] = useState(false)
    const [needsMatch, setNeedsMatch] = useState(false)


    const handleRider = () => {
        setMatch(false)
        setRider(true)
        setHasrider(true)
        setNeedsMatch(false)
    }

    const handleMatch = () => {
        setRider(false)
        setMatch(true)
        setNeedsMatch(true)
        setHasrider(false)
    }
    // Function to open the bottom sheet 
    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    // Function to close the bottom sheet
    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };
    const handleProceed = () => {
        setIsBottomSheetOpen(false);
        navigation.navigate("Economy")
      };
    return (
        <View style={{
            // opacity: isBottomSheetOpen ? 0.4: 1,
            marginLeft:15
          }} > 
            {/* first row */}
            <View style={styles.top}>
      
              {/* first collumn */}
      
              <View style={{
                marginHorizontal: 0,
                marginTop: 16
              }}>
                <TouchableOpacity style={{
                  backgroundColor: "white",
                }}
                  onPress={handleOpenBottomSheet}
                >
      
                  <Mail style={{
                    marginTop: 6,
                    alignSelf: 'flex-end',
                    marginRight: 8
                  }} />
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    paddingTop: 20
                  }}>
                    <Economy_Car />
                    <Modal
                                animationType="slide"
                                transparent={true}
                                // We use the state here to toggle visibility of Bottom Sheet 
                                visible={isBottomSheetOpen}
                                // We pass our function as default function to close the Modal
                                onRequestClose={handleCloseBottomSheet} >

                                <View style={[styles.bottomSheet, { height: !match ? windowHeight * 0.6 : windowHeight * 0.5 }]}>

                                    <View>
                                        <TouchableOpacity onPress={handleCloseBottomSheet}>
                                            <Mail style={{ marginTop: 10, alignSelf: 'flex-end', marginBottom:15 }} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                    }}>
                                        <TouchableOpacity style={{
                                            alignItems: 'center',
                                            paddingHorizontal: 9,
                                            paddingBottom: 13,
                                            borderColor: "#FFCC2A",
                                            borderWidth: match ? 0 : 1,
                                            backgroundColor: match ? "#F2F2F2" : "white"
                                        }}
                                            onPress={handleRider}
                                        >
                                            {!match ? <From style={{
                                                marginTop: 5,
                                                alignSelf: "flex-end"
                                            }} /> : <View style={{ paddingTop: 22, }} />}

                                            <Withrider style={{ marginBottom: 6 }} />
                                            <SubText text={"I have a rider with me"} style={{
                                                fontSize: 15
                                            }} />


                                        </TouchableOpacity>


                                        <TouchableOpacity style={{
                                            alignItems: 'center',
                                            paddingHorizontal: 18,
                                            paddingBottom: 13,
                                            borderColor: "#FFCC2A",
                                            borderWidth: rider ? 0 : 1,
                                            backgroundColor: rider ? "#F2F2F2" : "white"
                                        }}
                                            onPress={handleMatch}

                                        >
                                            {!rider ? <From style={{
                                                marginTop: 5,
                                                alignSelf: "flex-end"
                                            }} /> : <View style={{ paddingTop: 22, }} />}
                                            <Matchme style={{ marginBottom: 6 }} />
                                            <SubText text={"Get me matched"} style={{
                                                fontSize: 15
                                            }} />
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{ paddingVertical: 15, paddingTop: 48 }}>

                                        {rider && <HeadingText text={'Total No of Riders'} style={{ fontSize: 20, marginBottom: 21 }} />}

                                        {rider && <View style={{
                                            flexDirection: 'row',
                                            alignSelf: 'center',
                                            justifyContent: 'space-between',
                                            width: "35%",
                                            marginBottom: 38
                                        }}>
                                            <TouchableOpacity style={{
                                                paddingHorizontal: 17,
                                                paddingVertical: 10,
                                                backgroundColor: "#FFD96066"
                                            }}>
                                                <Text style={{
                                                    fontFamily: "SatoshiBold",
                                                    fontSize: 20
                                                }}>-</Text>
                                            </TouchableOpacity>

                                            <Text style={{
                                                fontFamily: "SatoshiBold",
                                                fontSize: 20,
                                                alignSelf: 'center'
                                            }} >5</Text>
                                            <TouchableOpacity style={{
                                                paddingHorizontal: 17,
                                                paddingVertical: 10,
                                                backgroundColor: "#FFD96066"
                                            }} >

                                                <Text style={{
                                                    fontFamily: "SatoshiBold",
                                                    fontSize: 20
                                                }} >+</Text></TouchableOpacity>
                                        </View>}



                                        <HeadingText text={'Total Luggage Number'} style={{
                                            fontSize: 20,
                                            marginBottom: 21
                                        }} />
                                        <View style={{
                                            flexDirection: 'row',
                                            alignSelf: 'center',
                                            justifyContent: 'space-between',
                                            width: "35%",
                                            marginBottom: 38
                                        }}>
                                            <TouchableOpacity style={{
                                                paddingHorizontal: 17,
                                                paddingVertical: 10,
                                                backgroundColor: "#FFD96066"
                                            }}>
                                                <Text style={{
                                                    fontFamily: "SatoshiBold",
                                                    fontSize: 20
                                                }}>-</Text>
                                            </TouchableOpacity>

                                            <Text style={{
                                                fontFamily: "SatoshiBold",
                                                fontSize: 20,
                                                alignSelf: 'center'
                                            }} >5</Text>
                                            <TouchableOpacity style={{
                                                paddingHorizontal: 17,
                                                paddingVertical: 10,
                                                backgroundColor: "#FFD96066"
                                            }} >

                                                <Text style={{
                                                    fontFamily: "SatoshiBold",
                                                    fontSize: 20
                                                }} >+</Text></TouchableOpacity>
                                        </View>

                                        <TouchableOpacity style={{ flex: 0, flexDirection: 'row' }} onPress={handleCloseBottomSheet}>
                                            <View />
                                            <Button style={{

                                            }} text={"Proceed"} handlePress={handleProceed} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>

                  </View>
                  <Text style={styles.textTop}>Economy</Text>
                  <Text style={{
                    fontFamily: "SatoshiMedium",
                    fontSize: 12,
                    marginLeft: 10,
                    color: "#A7A7A7",
                    paddingBottom: 20
                  }}>Shared Ride</Text>
                </TouchableOpacity>
              </View>
      
              {/* //2nd nav  */}
              <View style={{
                marginHorizontal: 16,
                marginTop: 16
              }}>
                <TouchableOpacity style={{
                  backgroundColor: "white",
                }}>
      
                  <Mail style={{
                    marginTop: 6,
                    alignSelf: 'flex-end',
                    marginRight: 8
                  }} />
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    paddingTop: 20
                  }}>
                    <First_Class />
                  </View>
                  <Text style={styles.textTop}>First Class</Text>
                  <Text style={{
                    fontFamily: "SatoshiMedium",
                    fontSize: 12,
                    marginLeft: 10,
                    color: "#A7A7A7",
                    paddingBottom: 20
                  }}>Single Passenger</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* first row */}
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 15
            }}>
      
              {/* first collumn */}
      
      
      
              <View style={{
                flexDirection: 'row',
                marginTop: 16,
                alignSelf: 'center'
              }}>
      
                <TouchableOpacity style={{
                  backgroundColor: "white",
                  marginLeft:0
                }}>
      
                  <Mail style={{
                    marginTop: 6,
                    alignSelf: 'flex-end',
                    marginRight: 8
                  }} />
                  <View style={{
                    paddingHorizontal: 28,
                    paddingTop: 20,
                  }}>
                    <Keke />
                  </View>
                  <Text style={styles.textTop}>Intra-School</Text>
                  <Text style={{
                    fontFamily: "SatoshiMedium",
                    fontSize: 12,
                    marginLeft: 10,
                    color: "#A7A7A7",
                    paddingBottom: 10
                  }}>Electric Tricycle</Text>
                </TouchableOpacity>
              </View>
      
              {/* //2nd nav  */}
              <View style={{
                marginHorizontal: 6,
                marginTop: 16
              }}>
                <TouchableOpacity style={{
                  backgroundColor: "white",
                  marginRight:12
                }}>
      
                  <Mail style={{
                    marginTop: 6,
                    alignSelf: 'flex-end',
                    marginRight: 8
                  }} />
      
                  <View style={{
                    paddingHorizontal: 21,
                    paddingVertical: 15
                  }}>
                    <Inter_state_car />
                  </View>
                  <Text style={styles.textTop}>Inter-State</Text>
                  <Text style={{
                    fontFamily: "SatoshiMedium",
                    fontSize: 12,
                    marginLeft: 10,
                    color: "#A7A7A7",
                    paddingBottom:5
                  }}>Shared 7 Seater</Text>
                </TouchableOpacity>
              </View>
             
            </View>
          </View>
    )
}

export default ScheduledRiderNav

const styles = StyleSheet.create({
    top: {
        marginHorizontal: 16,
        flexDirection: 'row',
        marginTop: 16,
        justifyContent:'center'
    },
    textBottom: {
        fontFamily: "SatoshiMedium",
        fontSize: 12,
        marginLeft: 10,
        color: "#A7A7A7",
        paddingBottom: 8
      },
      textTop: {
        fontFamily: "SatoshiMedium",
        fontSize: 18,
        marginLeft: 10,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 0,
        paddingHorizontal: 25,
        bottom: 0,
    },
})