import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView,
  SafeAreaView
} from 'react-native'
import Card from '../../components/Cards/Card'
import { CARDDATA } from '../../data/cardData';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView style={{height:"100%"}}>
            <View style={styles.titleBar}>
              <Image  style={styles.avatar} source={require('../../assets/avatar.jpg')}/>
              <Text style={styles.title}>Welcome back</Text>
              <Text style={styles.name}>Elías</Text>
            </View>
            <Text style={styles.subtitle}>Continue Learning</Text>
            <ScrollView 
              style={styles.scroll} 
              horizontal={true} 
              showsHorizontalScrollIndicator={false}>
              { CARDDATA.map((item, key) => <Card {...item} />)}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f0f3f5",
  },
  title: {
    fontSize: 16,
    color: "#b8bece",
    fontWeight: "500"
  },
  subtitle:{
    color: "#b8bece",
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 20,
    marginTop: 50,
    textTransform: "uppercase"
  },
  name: {
    fontSize: 20,
    color: "#3c4560",
    fontWeight: "bold"
  },
  titleBar: {
    width: "100%",
    marginTop: 50,
    paddingLeft: 80
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "black",
    marginLeft: 20,
    position: "absolute",
    top: 0,
    left: 0
  },
  scroll:{
    marginHorizontal: 10,
    overflow: "visible",
    paddingBottom: 30,
    borderWidth:1,
    borderColor: "red"
  }
})

export default HomeScreen
