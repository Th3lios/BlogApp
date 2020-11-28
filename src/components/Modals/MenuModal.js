import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import MenuItem from '../Items/MenuItem';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import {mitem} from '../../data/cardData';
import {setMenuModal} from '../../redux/actions/modalAction/modalAction';
Icon.loadFont();
IconF.loadFont();

const {width, height} = Dimensions.get('window');

const MenuModal = (props) => {
  const dispatch = useDispatch();
  const action = useSelector((state) => state.modal.action);
  const [anim, setAnim] = useState({
    top: new Animated.Value(height),
    modal: false,
  });

  useEffect(() => {
    dispatch(setMenuModal(false));
  }, []);

  useEffect(() => {
    toggleMenu();
  }, [action]);

  const toggleMenu = () => {
    if (action === true) {
      Animated.spring(anim.top, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }

    if (action === false) {
      Animated.spring(anim.top, {
        toValue: height,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }
  };
  return (
    <Animated.View style={[styles.container, {top: anim.top}]}>
      <View style={styles.cover}>
        <Image
          style={styles.image}
          source={require('../../assets/background12.jpg')}
        />
        <Text style={styles.author}>Elías Araya</Text>
        <Text style={styles.subtitle}>Front-end Developer</Text>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(setMenuModal(false))}
        style={styles.iconButton}>
        <IconF style={styles.closed} name="close" size={24} color="#546bfb" />
      </TouchableOpacity>
      <View style={styles.content}>
        {mitem.map((item, key) => (
          <MenuItem {...item} key={key} />
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#f0f3f5',
    height: height,
    width: width,
    borderRadius: 25,
    overflow: 'hidden',
    left: 0,
    marginTop: 50,
  },
  cover: {
    height: 142,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  content: {
    justifyContent: 'center',
    padding: 50,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: 22,
  },
  iconButton: {
    backgroundColor: 'white',
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 142 - 22,
    left: '50%',
    marginLeft: -22,
    // ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.15,
    shadowRadius: 9.51,
    // android
    elevation: 15,
  },
  author: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default MenuModal;
