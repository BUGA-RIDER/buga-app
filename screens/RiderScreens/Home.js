import { FlatList, ImageBackground, StyleSheet, Animated, View } from 'react-native';
import React, {useState, useRef} from 'react';

import OnboardingSlide from '../../components/OnboardingSlide';
import onboardingdata from '../../constants/onboardingdata';
import Paginator from '../../components/Paginator';

const Home = ({item}) => {
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
});