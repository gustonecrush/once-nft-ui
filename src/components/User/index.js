import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {IconNotification, ImageUser} from '../../assets';

const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <View style={styles.imageWrapper}>
          <Image style={styles.imageProfile} source={ImageUser} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Farhan Augustiansyah</Text>
          <Text style={styles.level}>Level 130</Text>
        </View>
      </View>
      <View style={styles.notifIcon}>
        <IconNotification />
      </View>
    </View>
  );
};

export default User;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    width: windowWidth,
  },
  userWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 60,
    height: 60,
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderColor: '#1B4DEA',
    borderWidth: 0.5,
    borderRadius: 100,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  info: {
    marginLeft: 15,
  },
  name: {
    fontFamily: 'Inter-Medium',
    color: '#0D1220',
    fontSize: 16,
  },
  level: {
    fontFamily: 'Inter-Regular',
    color: '#909FB4',
    fontSize: 12,
  },
  notifIcon: {
    backgroundColor: '#FFF',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
