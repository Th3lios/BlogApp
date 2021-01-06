import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');
const Success = ({isActive}) => {
  const refSuccess = useRef();
  const top = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (isActive === true) {
      top.value = withTiming(0, {duration: 0});
      opacity.value = withTiming(1);
      refSuccess.current.play();
    } else if (isActive === false) {
      opacity.value = withTiming(0, {duration: 500}, (isFinished) => {
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
        source={require('../../assets/lottie-checked-done.json')}
        autoPlay={false}
        loop={false}
        ref={refSuccess}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Success;
