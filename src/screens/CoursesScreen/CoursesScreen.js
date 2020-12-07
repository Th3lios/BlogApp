import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
const CoursesScreen = () => {
  const move = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: move.value}],
  }));

  useEffect(() => {
    setTimeout(() => {
      move.value = withTiming(50);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, animatedStyle]}>Text</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default CoursesScreen;

// import React from 'react';
// import {View, Text} from 'react-native';

// const CoursesScreen = () => {
//   return (
//     <View>
//       <Text>text</Text>
//     </View>
//   );
// };

// export default CoursesScreen;
