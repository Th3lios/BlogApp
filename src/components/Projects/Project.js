import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const Project = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image
          source={require('../../assets/background1.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.author}>Elías Araya</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 460,
    width: 315,
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
    top: 20,
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
});

export default Project;
