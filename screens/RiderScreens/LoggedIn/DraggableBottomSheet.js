import React, { useRef } from 'react';
import { StyleSheet, Text, View, Animated, PanResponder, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { height } = Dimensions.get('window');

const DraggableBottomSheet = () => {
  const bottomSheetRef = useRef(null);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        bottomSheetRef.current.setNativeProps({
          style: {
            backgroundColor: 'lightgray'
          }
        });
      },
      onPanResponderMove: (_, gestureState) => {
        const { dy } = gestureState;
        bottomSheetRef.current.setNativeProps({
          style: {
            transform: [{ translateY: height - 200 + dy }]
          }
        });
      },
      onPanResponderRelease: (_, gestureState) => {
        const { dy } = gestureState;
        bottomSheetRef.current.setNativeProps({
          style: {
            backgroundColor: 'white',
            transform: [{ translateY: Math.max(0, height - 200 + dy) }]
          }
        });
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View
        style={[styles.bottomSheet, { transform: [{ translateY: height - 200 }] }]}
        {...panResponder.panHandlers}
        ref={bottomSheetRef}
      >
        <View style={styles.dragHandle} />
        <Text style={styles.bottomSheetText}>Drag me up!</Text>
      </Animated.View>
    </View>
  );
}

export default DraggableBottomSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5
  },
  dragHandle: {
    width: 40,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
    marginVertical: 5
  },
  bottomSheetText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10
  }
});