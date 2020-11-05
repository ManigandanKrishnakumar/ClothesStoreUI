import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {CATAGORIES} from '../constants/AppConstants';
import {COLORS} from '../constants/Colours';

export default ({selectedCatagory, onChange}) => {
  return (
    <View style={styles.catagoriesButtonContainer}>
      {/* START: MAN CATAGORY */}
      <TouchableOpacity
        style={[
          styles.catagoryButton,
          selectedCatagory === CATAGORIES.MAN
            ? styles.catagorySelected
            : styles.catagoriesNotSelected,
        ]}
        onPress={() => {
          onChange(CATAGORIES.MAN);
        }}>
        <Text
          style={[
            styles.catagoryName,
            selectedCatagory === CATAGORIES.MAN
              ? styles.catagorySelectedText
              : styles.catagoriesNotSelectedText,
          ]}>
          Man
        </Text>
      </TouchableOpacity>
      {/* END: MAN CATAGORY */}

      {/* START: WOMAN CATAGORY */}
      <TouchableOpacity
        style={[
          styles.catagoryButton,
          selectedCatagory === CATAGORIES.WOMAN
            ? styles.catagorySelected
            : styles.catagoriesNotSelected,
        ]}
        onPress={() => {
          onChange(CATAGORIES.WOMAN);
        }}>
        <Text
          style={[
            styles.catagoryName,
            selectedCatagory === CATAGORIES.WOMAN
              ? styles.catagorySelectedText
              : styles.catagoriesNotSelectedText,
          ]}>
          Woman
        </Text>
      </TouchableOpacity>
      {/* END: WOMAN CATAGORY */}

      {/* START: KIDS CATAGORY */}
      <TouchableOpacity
        style={[
          styles.catagoryButton,
          selectedCatagory === CATAGORIES.KIDS
            ? styles.catagorySelected
            : styles.catagoriesNotSelected,
        ]}
        onPress={() => {
          onChange(CATAGORIES.KIDS);
        }}>
        <Text
          style={[
            styles.catagoryName,
            selectedCatagory === CATAGORIES.KIDS
              ? styles.catagorySelectedText
              : styles.catagoriesNotSelectedText,
          ]}>
          Kids
        </Text>
      </TouchableOpacity>
      {/* END: KIDS CATAGORY */}
    </View>
  );
};

const styles = StyleSheet.create({
  catagoriesButtonContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  catagoryButton: {
    // borderWidth: 1,
    padding: 20,
  },

  catagoryName: {
    fontSize: 20,
  },
  catagorySelected: {
    borderBottomWidth: 5,
  },
  catagorySelectedText: {
    fontWeight: '600',
  },
  catagoriesNotSelected: {},
  catagoriesNotSelectedText: {
    color: COLORS.GRAY,
  },
});
