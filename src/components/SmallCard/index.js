import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const SmallCard = ({source, name, items}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.img} source={source} />
      </View>
      <View style={styles.info}>
        <View style={styles.description}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.items}>{items} items</Text>
        </View>
      </View>
    </View>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: 140,
    height: 197,
    borderRadius: 15,
    marginRight: 25,
  },
  img: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 120,
    width: 140,
  },
  info: {
    paddingTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0D1220',
    marginBottom: 3,
  },
  items: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#909FB4',
  },
});
