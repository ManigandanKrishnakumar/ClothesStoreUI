import React, {useContext} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import CartContext from '../contexts/CartContext';
import {COLORS} from '../constants/Colours';

export default () => {
  const cartData = useContext(CartContext);
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.appName}>FSHN</Text>
      <ImageBackground
        style={styles.cartIcon}
        source={require('../assets/icons/cart-icon.png')}>
        {/* START: BADGE COUNT */}
        <View style={styles.badge}>
          <Text style={styles.badgeCount}>{cartData.data.length}</Text>
        </View>
        {/* END: BATCH COUNT */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  badge: {
    backgroundColor: COLORS.ORANGE,
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -10,
    right: -5,
  },
  badgeCount: {
    color: COLORS.WHITE,
    fontSize: 12,
    fontWeight: '600',
  },
  appName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
