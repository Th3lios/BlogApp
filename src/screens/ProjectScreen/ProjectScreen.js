import React, {useState, useEffect, useRef, useMemo} from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';
import Project from '../../components/Projects/Project';
import {rcards} from '../../data/cardData';

const ProjectScreen = () => {
  const [index, setIndex] = useState(0);
  const [pan] = useState(new Animated.ValueXY());
  const [scale] = useState(new Animated.Value(0.9));
  const [translateY] = useState(new Animated.Value(44));
  const [thirdScale] = useState(new Animated.Value(0.8));
  const [thirdTranslateY] = useState(new Animated.Value(-50));
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderGrant: () => {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: false,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
        Animated.spring(thirdScale, {
          toValue: 0.9,
          useNativeDriver: false,
        }).start();
        Animated.spring(thirdTranslateY, {
          toValue: 44,
          useNativeDriver: false,
        }).start();
      },
      onPanResponderRelease: () => {
        const positionY = pan.y.__getValue();
        if (positionY > 200) {
          Animated.timing(pan, {
            toValue: {x: 0, y: 1000},
            useNativeDriver: false,
          }).start(() => {
            scale.setValue(0.9);
            translateY.setValue(44);
            thirdScale.setValue(0.8);
            thirdTranslateY.setValue(-50);
            pan.x.setValue(0);
            pan.y.setValue(0);
            setIndex((prevState) => getNextIndex(prevState));
          });
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
          Animated.spring(scale, {
            toValue: 0.9,
            useNativeDriver: false,
          }).start();
          Animated.spring(translateY, {
            toValue: 44,
            useNativeDriver: false,
          }).start();
          Animated.spring(thirdScale, {
            toValue: 0.8,
            useNativeDriver: false,
          }).start();
          Animated.spring(thirdTranslateY, {
            toValue: -50,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const getNextIndex = (index) => {
    var nextIndex = index + 1;
    if (nextIndex > rcards.length - 1) {
      return 0;
    }
    return nextIndex;
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.project,
          {transform: [{scale: thirdScale}, {translateY: thirdTranslateY}]},
        ]}>
        <Project
          title={rcards[getNextIndex(index + 1)].title}
          author={rcards[getNextIndex(index + 1)].author}
          text={rcards[getNextIndex(index + 1)].caption}
          image={rcards[getNextIndex(index + 1)].image}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.project,
          {transform: [{scale: scale}, {translateY: translateY}]},
        ]}>
        <Project
          title={rcards[getNextIndex(index)].title}
          author={rcards[getNextIndex(index)].author}
          text={rcards[getNextIndex(index)].caption}
          image={rcards[getNextIndex(index)].image}
        />
      </Animated.View>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <Project
          title={rcards[index].title}
          author={rcards[index].author}
          text={rcards[index].caption}
          image={rcards[index].image}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  project: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
});

export default ProjectScreen;
