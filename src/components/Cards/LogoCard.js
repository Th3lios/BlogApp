import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
const LogoCard = ({image, text}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 60,
    padding: 12,
    alignItems: "center",
    borderRadius: 10,
    // ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    // android
    elevation: 15,
    marginHorizontal: 8
  },
  image: {
    width: 36,
    height: 36
  },
  text: {
    fontWeight: "600",
    fontSize: 17,
    marginLeft: 8
  }
})

export default LogoCard
