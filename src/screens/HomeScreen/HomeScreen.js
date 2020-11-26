import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
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
Icon.loadFont();
IconF.loadFont();

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView style={{height: '100%'}}>
            <View style={styles.titleBar}>
              <IconF
                style={styles.icon}
                name="bell"
                size={32}
                color="#4775f2"
              />
              <TouchableOpacity
                style={styles.avatarContainer}
                onPress={() => this.props.setMenuModal(true)}>
                <Image
                  style={styles.avatar}
                  source={require('../../assets/avatar.jpg')}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Welcome back</Text>
              <Text style={styles.name}>
                Elías {this.props.action === true ? 'true' : 'false'}
              </Text>
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
              style={styles.wrapper}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {cards.map((item, key) => (
                <Card {...item} key={key} />
              ))}
            </ScrollView>
            <Text style={styles.subtitle}>Related Courses</Text>
            <View style={styles.wrapper}>
              {rcards.map((item, key) => (
                <RelatedCard {...item} key={key} />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
        <MenuModal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5',
  },
  title: {
    fontSize: 16,
    color: '#b8bece',
    fontWeight: '500',
  },
  subtitle: {
    color: '#b8bece',
    fontWeight: '500',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 30,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 20,
    color: '#3c4560',
    fontWeight: 'bold',
  },
  titleBar: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 80,
  },
  avatar: {
    width: 45,
    height: 45,
    backgroundColor: 'black',
  },
  avatarContainer: {
    borderRadius: 22,
    position: 'absolute',
    width: 45,
    height: 45,
    top: 0,
    left: 0,
    marginLeft: 20,
    overflow: 'hidden',
  },
  wrapper: {
    marginHorizontal: 10,
    overflow: 'visible',
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 20,
  },
  logoScroll: {
    marginHorizontal: 12,
    overflow: 'visible',
    marginTop: 30,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
