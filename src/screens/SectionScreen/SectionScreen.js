import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SectionScreen extends Component {
  render() {
    return (
      <View style={styles.rootView}>
        <View style={styles.container}>
          <Text>Test view</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: 'black',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
})

export default SectionScreen;
