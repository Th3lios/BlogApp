import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StatusBar,
  Easing,
  Platform,
} from 'react-native';
import Card from '../../components/Cards/Card';
import LogoCard from '../../components/Cards/LogoCard';
import RelatedCard from '../../components/Cards/RelatedCard';
import MenuModal from '../../components/Modals/MenuModal';
import {cards, rcards, logos} from '../../data/cardData';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {setMenuModal} from '../../redux/actions/modalAction/modalAction';
import styles from './HomeScreenStyle';
Icon.loadFont();
IconF.loadFont();

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1),
      opacity: new Animated.Value(1),
    };
  }

  componentDidMount() {
    Platform.OS === 'android'
      ? StatusBar.setBarStyle('light-content', true)
      : StatusBar.setBarStyle('dark-content', true);
    Platform.OS === 'android' && StatusBar.setBackgroundColor('black', true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action === true) {
      Animated.spring(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();
      Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);
    }

    if (this.props.action === false) {
      Animated.spring(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      Platform.OS === 'ios' && StatusBar.setBarStyle('dark-content', true);
    }
  };

  render() {
    return (
      <View style={styles.rootView}>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{scale: this.state.scale}],
              opacity: this.state.opacity,
            },
          ]}>
          <SafeAreaView>
            <ScrollView
              style={styles.scroll}
              showsVerticalScrollIndicator={false}>
              <View style={styles.titleBar}>
                <IconF
                  style={styles.icon}
                  name="bell"
                  size={32}
                  color="#4775f2"
                />
                <TouchableOpacity
                  style={styles.avatarContainer}
                  onPress={() => this.props.setMenuState(true)}>
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar.jpg')}
                  />
                </TouchableOpacity>
                <Text style={styles.title}>Welcome back</Text>
                <Text style={styles.name}>Elías</Text>
              </View>
              <ScrollView
                style={styles.logoScroll}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {logos.map((item, key) => (
                  <LogoCard {...item} key={key} />
                ))}
              </ScrollView>
              <Text style={styles.subtitle}>Continue Learning</Text>
              <ScrollView
                style={styles.cardScroll}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {cards.map((item, key) => (
                  <Card {...item} key={key} />
                ))}
              </ScrollView>
              <Text style={styles.subtitle}>Related Courses</Text>
              <View style={styles.relatedCardScroll}>
                {rcards.map((item, key) => (
                  <RelatedCard {...item} key={key} />
                ))}
              </View>
            </ScrollView>
          </SafeAreaView>
        </Animated.View>
        <MenuModal />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  action: state.modal.action,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (value) => dispatch(setMenuModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
