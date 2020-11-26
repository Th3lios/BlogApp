import React, {Component} from 'react';
import {
  View,
  Text,
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
import styles from './HomeScreenStyle';
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
                onPress={() => this.props.setMenuState(true)}>
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
