import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constants/Colours';

export default ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.catagoriesTabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.catagoryTabButton,
              isFocused
                ? styles.catagorySelected
                : styles.catagoriesNotSelected,
            ]}>
            <Text
              style={[
                styles.catagoryName,
                isFocused
                  ? styles.catagorySelectedText
                  : styles.catagoriesNotSelectedText,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  catagoriesTabContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  catagoryTabButton: {
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
