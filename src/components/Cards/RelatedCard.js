import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const RelatedCard = ({title, section, caption, author, image, logo, avatar}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image style={styles.image} source={image}/>
        <Image style={styles.logo} source={logo}/>
        <Text style={styles.section}>{section}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.avatar} source={avatar}/>
        <View style={styles.wrapper}>
          <Text style={styles.caption}>{caption}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 280,
    borderRadius: 14,
    marginHorizontal: 10,
    marginTop:20,
    // ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.15,
    shadowRadius: 9.51,
    // android
    elevation: 15,
  },
  cover: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    color: "white",
    width: 170,
    paddingBottom: 20
  },
  section: {
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 20,
    color: "white",
    width: 170,
    paddingBottom: 10,
    textTransform: "uppercase"
  },
  content: {
    paddingLeft: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22
  },
  caption: {
    color: "#3c4560",
    fontSize: 14,
    fontWeight: "500",
  },
  author: {
    color: "#b8bece",
    fontSize: 14,
    fontWeight: "400",
  },
  wrapper: {
    marginLeft: 10,
    marginRight: 30,
    flex:1
  },
  logo: {
    width: 48,
    height: 48,
    position: "absolute",
    bottom: "50%",
    left: "50%",
    marginLeft: -24,
  }

})

export default RelatedCard
