import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Easing,
  Platform,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
// components
import Card from '../../components/Cards/Card';
import LogoCard from '../../components/Cards/LogoCard';
import RelatedCard from '../../components/Cards/RelatedCard';
import MenuModal from '../../components/Modals/MenuModal';
import LoginModal from '../../components/Modals/LoginModal';
// style
import styles from './HomeScreenStyle';
// data
import {cards, rcards, logos} from '../../data/cardData';
// redux
import {
  setMenuModal,
  getUsersSaga,
} from '../../redux/actions/modalAction/modalAction';
// graphql
import {useQuery} from '@apollo/client';
import {CardsQuery} from '../../graphql/graphql';
// icons
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
IconF.loadFont();

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const action = useSelector((state) => state.modal.action);
  const currUser = useSelector((state) => state.modal.user);
  const {loading, error, data} = useQuery(CardsQuery);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const radius = useSharedValue(0);
  useEffect(() => {
    Platform.OS === 'android'
      ? StatusBar.setBarStyle('light-content', true)
      : StatusBar.setBarStyle('dark-content', true);
    Platform.OS === 'android' && StatusBar.setBackgroundColor('black', true);
    dispatch(getUsersSaga());
  }, [dispatch]);
  useEffect(() => {
    toggleMenu();
  });

  const toggleMenu = () => {
    if (action === true) {
      scale.value = withTiming(0.9, {duration: 300});
      opacity.value = withTiming(0.5);
      radius.value = withTiming(25);
      Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);
    }

    if (action === false) {
      scale.value = withTiming(1, {duration: 300});
      opacity.value = withTiming(1);
      radius.value = withTiming(0);
      Platform.OS === 'ios' && StatusBar.setBarStyle('dark-content', true);
    }
  };

  const containerAnimStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
    opacity: opacity.value,
    borderTopLeftRadius: Platform.OS === 'android' ? radius.value : 25,
    borderTopRightRadius: Platform.OS === 'android' ? radius.value : 25,
  }));

  if (loading) {
    return <Text>'Loading...'</Text>;
  }
  if (error) {
    return <Text>{`Error! ${error.message}`}</Text>;
  }
  return (
    <View style={styles.rootView}>
      <Animated.View style={[styles.container, containerAnimStyle]}>
        <SafeAreaView>
          <ScrollView
            scrollEnabled={!action}
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
                onPress={() => dispatch(setMenuModal(true))}>
                <Image
                  style={styles.avatar}
                  source={{uri: currUser?.picture.large}}
                />
                <View style={styles.avatarBorders} />
              </TouchableOpacity>
              <Text style={styles.title}>Welcome back</Text>
              <Text style={styles.name}>{currUser?.name.first}</Text>
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
              {data.cardsCollection.items.map((item, key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => props.navigation.push('Section', {...item})}>
                  <Card {...item} />
                </TouchableOpacity>
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
      <LoginModal />
    </View>
  );
};

export default HomeScreen;
