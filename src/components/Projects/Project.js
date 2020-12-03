import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {setPanStatuSaga} from '../../redux/actions/modalAction/modalAction';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
const {width, height} = Dimensions.get('window');
const tabHeight = 79;
const Project = ({title, author, text, image, setPanState, canOpen}) => {
  const dispatch = useDispatch();
  const [cardWidth] = useState(new Animated.Value(315));
  const [cardHeight] = useState(new Animated.Value(460));
  const [titleTop] = useState(new Animated.Value(20));
  const [closeButton] = useState(new Animated.Value(0.7));
  const [opacity] = useState(new Animated.Value(0));
  const openCard = () => {
    if (!canOpen) {
      return;
    }
    dispatch(setPanStatuSaga(false));
    Animated.spring(cardWidth, {
      toValue: width,
    }).start();
    Animated.spring(cardHeight, {
      toValue: height - tabHeight,
    }).start();
    Animated.spring(titleTop, {
      toValue: 60,
    }).start();
    Animated.spring(closeButton, {
      toValue: 1,
    }).start();
    Animated.spring(opacity, {
      toValue: 1,
    }).start();
    StatusBar.setHidden(true);
  };
  const closeCard = () => {
    dispatch(setPanStatuSaga(true));
    Animated.spring(cardWidth, {
      toValue: 315,
    }).start();
    Animated.spring(cardHeight, {
      toValue: 460,
    }).start();
    Animated.spring(titleTop, {
      toValue: 20,
    }).start();
    Animated.spring(closeButton, {
      toValue: 0.7,
    }).start();
    Animated.spring(opacity, {
      toValue: 0,
    }).start();
    StatusBar.setHidden(false);
  };
  return (
    <TouchableWithoutFeedback onPress={() => openCard()}>
      <Animated.View
        style={[styles.container, {width: cardWidth, height: cardHeight}]}>
        <View style={styles.cover}>
          <Image source={image} style={styles.image} />
          <Animated.Text style={[styles.title, {top: titleTop}]}>
            {title}
          </Animated.Text>
          <Text style={styles.author}>{author}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <TouchableOpacity
          style={styles.closeContainer}
          onPress={() => closeCard()}>
          <Animated.View
            style={[
              styles.closeView,
              {opacity: opacity, transform: [{scale: closeButton}]},
            ]}>
            <Icon name="close" size={32} color="#546bfb" />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 14,
    // ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.15,
    shadowRadius: 9.51,
    // android
    elevation: 5,
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
});

export default Project;
