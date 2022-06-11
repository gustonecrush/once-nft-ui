import React from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';

const Input = ({isFocused, placeholder, secure}) => {
  return (
    <TextInput
      style={styles.textInput}
      secureTextEntry={secure}
      placeholder={placeholder}
    />
  );
};

export default Input;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  textInput: {
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
});
