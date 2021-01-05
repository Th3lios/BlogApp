import React, {useRef, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');
const Loading = ({isActive}) => {
  const refSuccess = useRef();
  const top = useSharedValue(0);
  const opacity = useSharedValue(0);
  useEffect(() => {
    if (isActive) {
      top.value = withTiming(0, {duration: 0});
      opacity.value = withTiming(1);
      refSuccess.current.play();
    } else {
      opacity.value = withTiming(0, {duration: 400}, (isFinished) => {
        if (isFinished) {
          top.value = withTiming(height);
        }
      });
      refSuccess.current.loop = false;
    }
  });
  const containerAnimStyle = useAnimatedStyle(() => ({
    top: top.value,
    opacity: opacity.value,
  }));
  return (
    <Animated.View style={[styles.container, containerAnimStyle]}>
      <LottieView
        source={require('../../assets/lottie-loading-fluid.json')}
        autoPlay={false}
        loop={true}
        ref={refSuccess}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
