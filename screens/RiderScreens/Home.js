import { FlatList, ImageBackground, StyleSheet, Animated, View, Text } from 'react-native';
import React, {useState, useRef} from 'react';

import OnboardingSlide from '../../components/OnboardingSlide';
import onboardingdata from '../../constants/onboardingdata';
import Paginator from '../../components/Paginator';
import OnboardingHeader from '../../components/OnboardingHeader';
import { useOnboardingStore } from '../../stores/useOnboardingStore';
import { Button } from '../../components/Button';

const Home = ({item}) => {
    const selectedOption = useOnboardingStore((state) => state.selectedOption);

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const onboardingdataRef = useRef(null)

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold : 50 }).current;

    const viewableItemsChanged = useRef(({ viewableItems }) =>{
        setCurrentIndex(viewableItems[0].items);
    }).current;
  return (
    <View style={styles.container}>
        <View  style={{
            flex:3
        }}>
            <OnboardingHeader style ={{
                position:"absolute",
                top:200
              }}/>
      <FlatList 
      data={onboardingdata} renderItem={({item}) =>
       <OnboardingSlide  item={item}/>} 
       horizontal
       pagingEnabled
       bounces={false}
       keyExtractor={(item) =>item.id}
       onScroll={Animated.event([{nativeEvent: { contentOffset:{x:scrollX} }}],{
        useNativeDriver:false,
       })}
       scrollEventThrottle={32}
       onViewableItemsChanged={viewableItemsChanged}
       viewabilityConfig={viewConfig}
       ref={onboardingdataRef}
       />
        <View style={styles.button}>
        <Button text={"Log In"}/>
        <Text style={styles.signUp} >
            New To Buga? Sign Up!
        </Text>
        </View>
        <Paginator data={onboardingdata} scrollX={scrollX}/>
       </View>
    </View>
  );
};

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        position:'absolute',
        bottom:110,
        alignSelf:'center',
        },
        signUp:{
            textAlign:'center',
            fontFamily:"SatoshiMedium",
            fontSize:18,
            color:"white",
            textDecorationLine:'underline',
            marginTop:16
        }
});