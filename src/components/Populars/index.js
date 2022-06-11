import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import BigCard from '../BigCard';
import {Image1, Image2, Image3, Image4, Image5} from '../../assets';

const Populars = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Bids</Text>
      <View style={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <BigCard
            source={Image1}
            name="The Masa"
            expiredDate="35m 11s"
            price={12.4}
          />
          <BigCard
            source={Image2}
            name="Centre Power"
            expiredDate="40m 11s"
            price={15.6}
          />
          <BigCard
            source={Image3}
            name="Bauhauss"
            expiredDate="54m 11s"
            price={20.31}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Populars;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingHorizontal: 25,
  },
  header: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
  },
});
