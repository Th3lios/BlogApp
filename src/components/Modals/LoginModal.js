import React, {useState} from 'react';
import {View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo-dc.png')}
        />
        <Text style={styles.text}>Start learning access pro content</Text>
        <TextInput
          style={styles.username}
          onChangeText={(mail) => setEmail(mail)}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Image
          style={styles.iconEmail}
          source={require('../../assets/icon-email.png')}
        />
        <Image
          style={styles.iconPass}
          source={require('../../assets/icon-password.png')}
        />
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(1,1,1, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: 270,
    width: 250,
    backgroundColor: '#f0f3f5',
    borderRadius: 15,
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    marginBottom: 5,
    alignSelf: 'center',
  },
  text: {
    textTransform: 'uppercase',
    color: '#b8bece',
    fontWeight: '700',
    fontSize: 13,
    width: 150,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 5,
  },
  username: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 40,
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 40,
    paddingVertical: 0,
  },
  password: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 40,
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 40,
    paddingVertical: 0,
  },
  button: {
    height: 40,
    backgroundColor: '#5263ff',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.15,
    shadowRadius: 9.51,
    // android
    //elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  iconEmail: {
    width: 24,
    height: 16,
    position: 'absolute',
    top: 125,
    left: 20,
  },
  iconPass: {
    width: 18,
    height: 24,
    position: 'absolute',
    top: 170,
    left: 23,
  },
});

export default LoginModal;
