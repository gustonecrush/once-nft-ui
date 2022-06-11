import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import SmallCard from '../SmallCard';
import {Image3, Image4, Image5} from '../../assets';

const Browse = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Browse</Text>
      <View style={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SmallCard source={Image3} name="Vector" items={12049} />
          <SmallCard source={Image4} name="3D" items={589} />
          <SmallCard source={Image5} name="Abstract" items={215} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Browse;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingHorizontal: 25,
    paddingVertical: 30,
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
