import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {
  setSuccessSaga,
  setMenuModal,
} from '../../redux/actions/modalAction/modalAction';
Icon.loadFont();

const MenuItem = ({icon, title, text}) => {
  const dispatch = useDispatch();
  const options = (icon) => {
    switch (icon) {
      case 'settings':
        console.log('settings');
        break;
      case 'card':
        console.log('card');
        break;
      case 'exit':
        console.log('exit');
        dispatch(setMenuModal(false));
        dispatch(setSuccessSaga(false));
        break;
      default:
        console.log('default');
    }
  };

  return (
    <TouchableOpacity onPress={() => options(icon)}>
      <View style={styles.container}>
        <Icon style={styles.icon} name={icon} size={44} color="#546bfb" />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
  },
  icon: {},
  content: {
    paddingLeft: 25,
  },
  title: {
    color: '#3c4560',
    fontSize: 24,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    color: '#3c4560',
    opacity: 0.6,
  },
});

export default MenuItem;
