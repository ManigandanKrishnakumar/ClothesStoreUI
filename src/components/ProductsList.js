import React from 'react';
import {withNavigation} from '@react-navigation/compat';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ApiError from './ApiError';

const PopularProduct = ({productDetail, navigation}) => {
  const navigateToPDP = () => {
    navigation.navigate('ProductDetails', {productDetail});
  };
  return (
    <TouchableOpacity onPress={navigateToPDP} style={styles.productImageButton}>
      <ImageBackground
        style={[styles.popularProductImageBackground]}
        source={{uri: productDetail.product_image}}
        imageStyle={styles.productImage}
      />
    </TouchableOpacity>
  );
};

const ProductsList = ({title, products, error, tryAgain, navigation}) => {
  console.log('error::::', error);
  let content;
  if (!products.length && error.length === 0) {
    console.log('1');
    content = (
      <View style={styles.loader}>
        <ActivityIndicator size="small" color="black" />
      </View>
    );
  } else if (error.length !== 0) {
    content = <ApiError error={error + ''} onClick={tryAgain} />;
  } else {
    content = products.map((product, i) => {
      return (
        <PopularProduct
          productDetail={product}
          navigation={navigation}
          key={i}
        />
      );
    });
  }

  return (
    <View styles={styles.popularProductsListContainer}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.products}>{content}</View>
    </View>
  );
};

export default withNavigation(ProductsList);

const styles = StyleSheet.create({
  popularProductsListContainer: {},
  heading: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 20,
    marginLeft: 20,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-between',
  },
  productsList: {
    padding: 20,
  },
  productImageButton: {
    flexBasis: '31.333%',
    marginBottom: 10,
  },
  popularProductImageBackground: {
    height: 175,
    width: '100%',
  },
  padding: {},
  productImage: {
    borderRadius: 5,
  },
  loader: {
    minHeight: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
