import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconEthereum} from '../../assets';

const BigCard = ({source, name, expiredDate, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.img} source={source} />
      </View>
      <View style={styles.info}>
        <View style={styles.description}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.expired}>
            Ends in <Text style={styles.date}>{expiredDate}</Text>{' '}
          </Text>
        </View>
        <View style={styles.price}>
          <IconEthereum />
          <Text style={styles.ether}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default BigCard;

const styles = StyleSheet.create({
  container: {
    width: 270,
    height: 268,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginRight: 25,
  },
  img: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 191,
    width: 270,
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
  expired: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#909FB4',
  },
  date: {
    color: '#F86780',
    fontFamily: 'Inter-Medium',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ether: {
    marginLeft: 5,
  },
});
