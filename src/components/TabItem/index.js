import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconDiscover,
  IconDiscoverActive,
  IconHistory,
  IconHistoryActive,
  IconSettings,
  IconSettingsActive,
  IconWishlist,
  IconWishlistActive,
} from '../../assets/icons';

const TabItem = ({label, isFocused, onLongPress, onPress}) => {
  const Icon = () => {
    if (label === 'Discover') {
      return isFocused ? <IconDiscover /> : <IconDiscoverActive />;
    }
    if (label === 'History') {
      return isFocused ? <IconHistoryActive /> : <IconHistory />;
    }
    if (label === 'Wishlist') {
      return isFocused ? <IconWishlistActive /> : <IconWishlist />;
    }
    if (label === 'Settings') {
      return isFocused ? <IconSettingsActive /> : <IconSettings />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.wrapper}>
        <Icon />
        <Text style={styles.text(isFocused)}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: isFocused => ({
    textAlign: 'center',
    fontFamily: isFocused ? 'Inter-Bold' : 'Inter-Regular',
    fontSize: 12,
    marginTop: 3,
    color: isFocused ? '#1B4DEA' : '#909FB4',
  }),
});
