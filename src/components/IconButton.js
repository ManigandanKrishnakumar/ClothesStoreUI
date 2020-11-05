import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/Colours';

export default ({children, backgroundColor, shadowEffect, onClick}) => {
  return (
    <TouchableOpacity
      style={[
        styles.iconButtonContainer,
        shadowEffect ? styles.shadowEffect : null,
        backgroundColor ? {backgroundColor: backgroundColor} : null,
      ]}
      onPress={onClick}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButtonContainer: {
    backgroundColor: COLORS.WHITE,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowEffect: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
});
