import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {ImageDecoration, ImageDecoration2} from '../../assets';
import {Browse, Populars, User} from '../../components';

const Discover = () => {
  return (
    <View style={styles.container}>
      <Image source={ImageDecoration} style={styles.decoration} />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <User />
        <Populars />
        <Browse />
      </ScrollView>
      <Image source={ImageDecoration2} style={styles.decoration2} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Discover;

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
});
