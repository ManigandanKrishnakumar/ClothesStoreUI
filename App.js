/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';

import Home from './src/screens/Home';
import ProductDetails from './src/screens/ProductDetails';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CartContext from './src/contexts/CartContext';
const Root = createStackNavigator();

export default () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <CartContext.Provider value={{data: cartItems, addToCart}}>
      <NavigationContainer>
        <Root.Navigator headerMode="none" initialRouteName="Home">
          <Root.Screen header name="Home" component={Home} />
          <Root.Screen name="ProductDetails" component={ProductDetails} />
        </Root.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
};
