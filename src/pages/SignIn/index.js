import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import {ImageDecoration, ImageDecoration2} from '../../assets';
import {Buttons} from '../../components';

class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={ImageDecoration} style={styles.decoration} />
        <View style={styles.wrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Start Collecting</Text>
            <Text style={styles.text}>Amazing Artworks</Text>
          </View>
          <View style={styles.signInForm}>
            <View style={styles.input}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Full Name"
                keyboardType="default"
              />
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput style={styles.textInput} placeholder="Enter Email" />
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Enter Password"
              />
            </View>
            <Buttons
              style={styles.button}
              title="Getting Started"
              onPress={() => this.props.navigation.navigate('MainApp')}
            />
          </View>
        </View>
        <Text style={styles.signInText}>Sign In to My Account</Text>
        <Image source={ImageDecoration2} style={styles.decoration2} />
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default SignIn;

const styles = StyleSheet.create({
  decoration: {
    position: 'absolute',
    top: -2,
    right: 0,
    width: 300,
    height: 300,
  },
  decoration2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    marginTop: -0.082 * windowHeight,
  },
  textWrapper: {
    marginBottom: 43,
  },
  text: {
    fontSize: 26,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    color: '#0D1220',
  },
  signInForm: {
    paddingHorizontal: 15,
    paddingTop: 33,
    paddingBottom: 30,
    borderRadius: 24,
    backgroundColor: '#FFF',
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#0D1220',
    marginBottom: 12,
  },
  input: {},
  textInput: {
    // borderColor: useIsFocused ? '#fff' : '#1B4DEA',
    // borderWidth: 0.5,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#0D1220',
    backgroundColor: '#F7F9FC',
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingVertical: 18,
    width: windowWidth * 0.768,
    marginBottom: 23,
  },
  signInText: {
    fontFamily: 'Inter-Regular',
    color: '#909FB4',
    fontSize: 16,
    position: 'absolute',
    bottom: 0.05 * windowHeight,
  },
});
