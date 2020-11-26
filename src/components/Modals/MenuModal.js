import React, {Component} from 'react';
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
import {connect} from 'react-redux';
import {setMenuModal} from '../../redux/actions/modalAction/modalAction';
Icon.loadFont();
IconF.loadFont();

const {width, height} = Dimensions.get('window');

class MenuModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: new Animated.Value(height),
      modal: false,
    };
  }

  componentDidMount() {
    this.props.setMenuModal(false);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action === true) {
      Animated.spring(this.state.top, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }

    if (this.props.action === false) {
      Animated.spring(this.state.top, {
        toValue: height,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    return (
      <Animated.View style={[styles.container, {top: this.state.top}]}>
        <View style={styles.cover}>
          <Image
            style={styles.image}
            source={require('../../assets/background12.jpg')}
          />
          <Text style={styles.author}>Elías Araya</Text>
          <Text style={styles.subtitle}>Front-end Developer</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.setMenuModal(false)}
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
  }
}

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

const mapStateToProps = (state) => {
  return {
    action: state.modal.action,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMenuModal: (value) => dispatch(setMenuModal(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuModal);
