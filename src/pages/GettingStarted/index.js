import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {ImageBanner, ImageDecoration, ImageDecoration2} from '../../assets';
import {Buttons} from '../../components';

const GettingStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={ImageDecoration} style={styles.decoration} />
      <Image source={ImageBanner} style={styles.banner} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Collect NFTs As</Text>
        <Text style={styles.text}>Your Own Collection</Text>
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.desc}>NFT is gonna help us to keep what</Text>
        <Text style={styles.desc}>is belong to us, like forever</Text>
      </View>
      <Buttons
        title="Getting Started"
        onPress={() => navigation.navigate('SignIn')}
      />
      {/* <View>
        <TouchableOpacity style={styles.containerBtn}>
          <Text style={styles.textBtn}>Getting Started</Text>
        </TouchableOpacity>
      </View> */}
      <Image source={ImageDecoration2} style={styles.decoration2} />
    </View>
  );
};

export default GettingStarted;

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
  banner: {
    width: 337.28,
    height: 187.41,
    marginBottom: 65,
  },
  textWrapper: {
    marginBottom: 35,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 26,
    color: '#0D1220',
  },
  descWrapper: {
    marginBottom: 53,
  },
  desc: {
    fontFamily: 'Inter-Regular',
    color: '#909FB4',
    fontSize: 16,
    textAlign: 'center',
  },
  containerBtn: {
    backgroundColor: '#1B4DEA',
    borderRadius: 13,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: 180,
  },
  textBtn: {
    color: '#FFF',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
});
