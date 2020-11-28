import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
// icons
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
IconF.loadFont();

const SectionScreen = (props) => {
  useEffect(() => {
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);
    return () => {
      Platform.OS === 'ios' && StatusBar.setBarStyle('dark-content', true);
    };
  });

  const {title, caption, subtitle, image, logo} = props.route.params;
  return (
    <View style={styles.rootView}>
      {Platform.OS === 'ios' && <StatusBar hidden />}
      <View style={styles.container}>
        <View style={styles.cover}>
          <Image style={styles.image} source={{uri: image.url}} />
          <View style={styles.wrapper}>
            <Image style={styles.logo} source={{uri: logo.url}} />
            <Text style={styles.caption}>{caption}</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <TouchableOpacity
            style={styles.closed}
            onPress={() => props.navigation.goBack()}>
            <Icon name="close" size={24} color="#546bfb" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: Platform.OS === 'ios' ? '#f0f3f5' : 'black',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  cover: {
    height: 375,
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
    color: 'white',
    position: 'absolute',
    top: 78,
    left: 20,
    width: '50%',
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.8,
    color: 'white',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  closed: {
    height: 34,
    width: 34,
    borderRadius: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  wrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    left: 20,
    alignItems: 'center',
  },
  logo: {
    height: 24,
    width: 24,
  },
  caption: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
    textTransform: 'uppercase',
  },
});

export default SectionScreen;
