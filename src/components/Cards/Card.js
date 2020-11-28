import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = ({title, caption, subtitle, image, logo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image style={styles.image} source={{uri: image.url}} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.logo} source={{uri: logo.url}} />
        <View style={styles.wrapper}>
          <Text style={styles.caption}>{caption}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 300,
    height: 280,
    borderRadius: 14,
    marginHorizontal: 10,
    marginTop: 20,

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
    width: '100%',
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    color: 'white',
    width: 170,
  },
  content: {
    paddingLeft: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 44,
    height: 44,
  },
  caption: {
    color: '#3c4560',
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    color: '#b8bece',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 4,
  },
  wrapper: {
    marginLeft: 10,
  },
});

export default Card;
