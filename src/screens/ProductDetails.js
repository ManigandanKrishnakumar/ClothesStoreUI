import React, {useContext} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconButton from '../components/IconButton';
import {COLORS} from '../constants/Colours';
import CartContext from '../contexts/CartContext';

const isPresentInCart = (productDetail, cart) => {
  const item = cart.find((product) => product.id === productDetail.id);
  if (item) {
    return true;
  } else {
    return false;
  }
};

export default ({route, navigation}) => {
  const productDetail = route.params?.productDetail;
  const cartData = useContext(CartContext);
  const onAddToCart = () => {
    if (!isPresentInCart(productDetail, cartData.data)) {
      cartData.addToCart(productDetail);
    }
  };

  return (
    <View style={styles.pdpContainer}>
      <View style={styles.topButtons}>
        {/* START: BACK BUTTON */}
        <IconButton
          backgroundColor={COLORS.WHITE}
          shadowEffect={true}
          onClick={() => {
            navigation.navigate('Home');
          }}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.buttonImage}
          />
        </IconButton>
        {/* END: BACK BUTTON */}

        {/* START: CART BUTTON */}
        <IconButton backgroundColor={COLORS.WHITE} shadowEffect={true}>
          <Image
            source={require('../assets/icons/cart-icon.png')}
            style={styles.buttonImage}
          />

          {/* START: BADGE COUNT */}
          <View style={styles.badge}>
            <Text style={styles.badgeCount}>{cartData.data.length}</Text>
          </View>
          {/* END: BATCH COUNT */}
        </IconButton>
        {/* END: CART BUTTON */}
      </View>
      <ScrollView>
        <ImageBackground
          source={{uri: productDetail.product_image}}
          style={styles.productImage}
        />

        {/* START: PRODUCT DETAILS */}
        <View style={[styles.productDetailsContainer]}>
          <View style={styles.pullUpLine} />
          <Text style={styles.productName}>{productDetail.product_name}</Text>

          {/* START: PRICE AND RATING */}
          <View style={styles.priceAndRatingContainer}>
            {/* START: PRICE DETAILS */}
            <View style={styles.priceContainer}>
              {/* START: CURRENT PRICE */}
              <Text style={styles.currentPrice}>
                {productDetail.price_details.currency_code +
                  ' ' +
                  productDetail.price_details.current_price}{' '}
              </Text>
              {/* END: CURRENT PRICE */}

              {/* START: OFFER */}
              <View style={styles.offerWrapper}>
                <Text style={styles.actualPrice}>
                  {productDetail.price_details.currency_code +
                    ' ' +
                    productDetail.price_details.actual_price}
                </Text>
                <Text style={styles.discount}>
                  {productDetail.price_details.discount + ' OFF'}
                </Text>
              </View>
              {/* END: OFFER */}
            </View>
            {/* END: PRICE DETAILS */}
            <View style={styles.ratingContainer}>
              <Image
                source={require('../assets/icons/star.png')}
                style={styles.ratingIcon}
              />
              <Text style={styles.rating}>
                {productDetail.rating_details.rating +
                  '/' +
                  productDetail.rating_details.scale}
              </Text>
            </View>
          </View>
          {/* END: PRICE AND RATING */}

          {/* START: SIZE */}
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeLabel}>Size Available :</Text>
            <View style={styles.sizes}>
              {productDetail.available_sizes.map((size, i) => {
                return (
                  <Text style={styles.size} key={i}>
                    {size}
                  </Text>
                );
              })}
            </View>
          </View>
          {/* END: SIZE */}
        </View>
        {/* END: PRODUCT DETAILS  */}
        <View style={{height: 200}} />
      </ScrollView>
      {/* START: ACTIONS BAR */}
      <View style={[styles.actionsBar, styles.shadowEffect]}>
        <IconButton backgroundColor={COLORS.GRAY_LIGHT} shadowEffect={false}>
          <Image
            source={require('../assets/icons/heart.png')}
            style={styles.buttonImage}
          />
        </IconButton>
        <IconButton backgroundColor={COLORS.GRAY_LIGHT} shadowEffect={false}>
          <Image
            source={require('../assets/icons/hanger-2.png')}
            style={styles.buttonImage}
          />
        </IconButton>
        <TouchableOpacity
          style={[
            styles.addToCartButton,
            isPresentInCart(productDetail, cartData.data)
              ? styles.disabledButton
              : null,
          ]}
          onPress={onAddToCart}
          disabled={isPresentInCart(productDetail, cartData.data)}>
          <Text style={styles.addToCartButtonText}> Add to Cart</Text>
        </TouchableOpacity>
      </View>
      {/* END: ACTIONS BAR */}
    </View>
  );
};

const styles = StyleSheet.create({
  pdpContainer: {
    flex: 1,
  },
  productImage: {
    height: 500,
    width: '100%',
  },
  topButtons: {
    position: 'absolute',
    top: 50,
    zIndex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonImage: {
    height: 20,
    width: 25,
  },
  badge: {
    backgroundColor: COLORS.ORANGE,
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  badgeCount: {
    color: COLORS.WHITE,
    fontSize: 12,
    fontWeight: '600',
  },
  productDetailsContainer: {
    backgroundColor: COLORS.WHITE,
  },

  pullUpLine: {
    width: 100,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: COLORS.GRAY,
    marginTop: 10,
    alignSelf: 'center',
  },
  productName: {
    padding: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  priceAndRatingContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceContainer: {},
  currentPrice: {
    fontSize: 25,
    fontWeight: '500',
    color: COLORS.ORANGE,
  },
  offerWrapper: {
    marginTop: 5,
    flexDirection: 'row',
  },
  actualPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    color: COLORS.GRAY,
  },
  discount: {
    fontSize: 15,
    marginLeft: 5,
  },
  ratingContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  ratingIcon: {
    height: 20,
    width: 20,
  },
  rating: {
    fontSize: 15,
    color: COLORS.GRAY,
  },
  sizeContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: COLORS.GRAY_LIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeLabel: {
    fontSize: 15,
    color: COLORS.GRAY,
  },
  sizes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
  },
  size: {
    fontWeight: 'bold',
  },
  actionsBar: {
    height: 150,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  addToCartButton: {
    height: 60,
    backgroundColor: 'black',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: COLORS.GRAY,
  },
  addToCartButtonText: {
    color: COLORS.WHITE,
    fontSize: 20,
  },
});
