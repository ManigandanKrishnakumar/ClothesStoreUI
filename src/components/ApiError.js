import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../constants/Colours';

export default ({error, onClick}) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMessage}>{error}</Text>
      <TouchableOpacity
        style={styles.tryAgainButton}
        onPress={() => {
          onClick();
        }}>
        <Text style={styles.tryAgainText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorMessage: {},
  tryAgainButton: {
    backgroundColor: COLORS.ORANGE,
    margin: 15,
    padding: 10,
    borderRadius: 5,
  },
  tryAgainText: {
    color: COLORS.PRIMARY,
  },
});
