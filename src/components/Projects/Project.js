import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Extrapolate,
} from 'react-native-reanimated';
import {setPanStatuSaga} from '../../redux/actions/modalAction/modalAction';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
const {width, height} = Dimensions.get('window');
const tabHeight = Platform.OS === 'ios' ? 79 : 49;
const Project = ({title, author, text, image, setPanState, canOpen}) => {
  const dispatch = useDispatch();
  // const [cardWidth] = useState(new Animated.Value(315));
  // const [cardHeight] = useState(new Animated.Value(460));
  // const [titleTop] = useState(new Animated.Value(20));
  // const [closeButton] = useState(new Animated.Value(0.7));
  // const [opacity] = useState(new Animated.Value(0));
  // const [textHeight] = useState(new Animated.Value(140));
  // const [backColor] = useState(new Animated.Value(0));
  // const [borderRadius] = useState(new Animated.Value(14));
  const cardWidth = useSharedValue(315);
  const cardHeight = useSharedValue(460);
  const titleTop = useSharedValue(20);
  const closeButton = useSharedValue(0.7);
  const opacity = useSharedValue(0);
  const textHeight = useSharedValue(140);
  const backColor = useSharedValue(0);
  const borderRadius = useSharedValue(14);
  const [gradientState, setGradientState] = useState(true);
  const boxInterpolation = Animated.interpolateColors(backColor.value, {
    inputRange: [0, 1],
    outputColorRange: ['rgba(255,255,255, 1)', 'rgba(0,0,0, 1)'],
  });

  const openCard = () => {
    if (!canOpen) {
      return;
    }
    dispatch(setPanStatuSaga(false));
    setGradientState(false);
    textHeight.value = withTiming(0, {duration: 300});
    if (Platform.OS === 'android') {
      borderRadius.value = withTiming(0);
      backColor.value = withTiming(1);
    }
    cardWidth.value = withTiming(width);
    cardHeight.value = withTiming(height - tabHeight);
    titleTop.value = withSpring(60);
    closeButton.value = withSpring(1);
    opacity.value = withSpring(1);
    StatusBar.setHidden(true);
  };
  const closeCard = () => {
    setGradientState(true);
    dispatch(setPanStatuSaga(true));
    textHeight.value = withTiming(140, {duration: 200});
    if (Platform.OS === 'android') {
      borderRadius.value = withTiming(14);
      backColor.value = withTiming(0);
    }
    cardWidth.value = withTiming(315);
    cardHeight.value = withTiming(460);
    titleTop.value = withSpring(20);
    closeButton.value = withSpring(0.7);
    opacity.value = withSpring(0);
    StatusBar.setHidden(false);
  };

  const wrapperAnimStyle = useAnimatedStyle(() => ({
    borderRadius: borderRadius.value,
  }));

  const containerAnimStyle = useAnimatedStyle(() => ({
    width: cardWidth.value,
    height: cardHeight.value,
  }));

  const titleAnimStyle = useAnimatedStyle(() => ({
    top: titleTop.value,
  }));

  const closeViewAnimStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: closeButton.value}],
  }));

  return (
    <TouchableWithoutFeedback onPress={() => openCard()}>
      <Animated.View
        style={[
          styles.wrapper,
          Platform.OS === 'android'
            ? wrapperAnimStyle
            : {backgroundColor: '#0000', borderRadius: 14},
        ]}>
        <Animated.View style={[styles.container, containerAnimStyle]}>
          <View style={styles.cover}>
            <Image source={image} style={styles.image} />
            <Animated.Text style={[styles.title, titleAnimStyle]}>
              {title}
            </Animated.Text>
            <Text style={styles.author}>{author}</Text>
          </View>
          <View style={[styles.content]}>
            <Text style={styles.text}>{text}</Text>
          </View>
          {gradientState && (
            <LinearGradient
              style={styles.gradient}
              colors={[
                'rgba(255,255,255,0)',
                'rgba(255,255,255,0)',
                'rgba(255,255,255,0)',
                'rgba(255,255,255,0)',
                'rgba(255,255,255,0)',
                'rgba(255,255,255,1)',
              ]}
            />
          )}
          <TouchableOpacity
            style={styles.closeContainer}
            onPress={() => closeCard()}>
            <Animated.View style={[styles.closeView, closeViewAnimStyle]}>
              <Icon name="close" size={32} color="#546bfb" />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.15,
    shadowRadius: 9.51,
    // android
    elevation: 10,
  },
  container: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 14,
  },
  cover: {
    height: 290,
    backgroundColor: '#cccc',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  title: {
    position: 'absolute',
    left: 20,
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
    width: 170,
  },
  author: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    width: 170,
    textTransform: 'uppercase',
  },
  content: {},
  text: {
    margin: 20,
    fontSize: 17,
    lineHeight: 24,
    color: '#3c4560',
  },
  closeContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeView: {
    height: 32,
    width: 32,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default Project;
