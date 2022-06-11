import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Buttons = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B4DEA',
    borderRadius: 13,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  text: {
    color: '#FFF',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
});
