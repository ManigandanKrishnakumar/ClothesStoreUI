import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../constants/Colours';
import OfferBanner from './OfferBanner';
import offersHook from '../customHooks/offersHook';

export default () => {
  const [offers, error] = offersHook();
  return (
    <View style={styles.bannersContainer}>
      {!offers.length ? (
        <ActivityIndicator size="small" color="black" />
      ) : (
        <FlatList
          horizontal
          data={offers}
          keyExtractor={(offer) => offer.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <OfferBanner offerDetails={item} />;
          }}
          style={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bannersContainer: {
    backgroundColor: COLORS.GRAY_LIGHT,
    height: 450,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {},
});
