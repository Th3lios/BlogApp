import React, {useState, useEffect, useRef, useMemo} from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';
import Project from '../../components/Projects/Project';
import {pcards} from '../../data/cardData';
import {useDispatch, useSelector} from 'react-redux';
const ProjectScreen = () => {
  const [index, setIndex] = useState(0);
  const [pan] = useState(new Animated.ValueXY());
  const [scale] = useState(new Animated.Value(0.9));
  const [translateY] = useState(new Animated.Value(44));
  const [thirdScale] = useState(new Animated.Value(0.8));
  const [thirdTranslateY] = useState(new Animated.Value(-50));
  const [maskOpacity] = useState(new Animated.Value(0));
  const panState = useSelector((state) => state.modal.panStatus);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      if (gestureState.dx === 0 && gestureState.dy === 0) {
        return false;
      } else {
        return panState;
      }
    },
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
    onPanResponderGrant: () => {
      Animated.timing(maskOpacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
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
      if (positionY > 150) {
        Animated.timing(pan, {
          toValue: {x: 0, y: 700},
          useNativeDriver: false,
        }).start(() => {
          setIndex((prevState) => getNextIndex(prevState));
          scale.setValue(0.9);
          translateY.setValue(44);
          thirdScale.setValue(0.8);
          thirdTranslateY.setValue(-50);
          pan.x.setValue(0);
          pan.y.setValue(0);
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
      Animated.timing(maskOpacity, {
        toValue: 0,
      }).start();
    },
  });

  const getNextIndex = (index) => {
    var nextIndex = index + 1;
    if (nextIndex > pcards.length - 1) {
      return 0;
    }
    return nextIndex;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.mask, {opacity: maskOpacity}]} />
      <Animated.View
        style={[
          styles.project,
          {transform: [{scale: thirdScale}, {translateY: thirdTranslateY}]},
        ]}>
        <Project
          title={pcards[getNextIndex(index + 1)].title}
          author={pcards[getNextIndex(index + 1)].author}
          text={pcards[getNextIndex(index + 1)].caption}
          image={pcards[getNextIndex(index + 1)].image}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.project,
          {transform: [{scale: scale}, {translateY: translateY}]},
        ]}>
        <Project
          title={pcards[getNextIndex(index)].title}
          author={pcards[getNextIndex(index)].author}
          text={pcards[getNextIndex(index)].caption}
          image={pcards[getNextIndex(index)].image}
        />
      </Animated.View>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
          zIndex: 999,
        }}
        {...panResponder.panHandlers}>
        <Project
          title={pcards[index].title}
          author={pcards[index].author}
          text={pcards[index].caption}
          image={pcards[index].image}
          canOpen={true}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
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
    zIndex: 1,
  },
});

export default ProjectScreen;
