import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import Header from '../components/Header';
import {CATAGORIES} from '../constants/AppConstants';
import BannersList from '../components/BannersList';
import ProductsList from '../components/ProductsList';
import popularProductsHook from '../customHooks/popularProductsHook';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS} from '../constants/Colours';
import CatagoriesTabBar from '../components/CatagoriesTabBar';
import {POPULAR_PRODUCTS} from '../constants/end-points';

const Men = () => {
  return <HomeScreenContent catagory={CATAGORIES.MAN} />;
};

const Woman = () => {
  return <HomeScreenContent catagory={CATAGORIES.WOMAN} />;
};

const Kids = () => {
  return <HomeScreenContent catagory={CATAGORIES.KIDS} />;
};

const HomeScreenContent = ({catagory}) => {
  const [fetchPopularProducts, popularProducts, error] = popularProductsHook(
    catagory,
  );
  return (
    <View style={styles.homeScreenContent}>
      <BannersList />
      <ProductsList
        title="Most Popular Products"
        products={popularProducts}
        error={error}
        tryAgain={() => {
          fetchPopularProducts(POPULAR_PRODUCTS[catagory]);
        }}
      />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    <ScrollView style={styles.homePageConytainer}>
      <Header />
      <Tab.Navigator
        tabBar={(props) => <CatagoriesTabBar {...props} />}
        tabBarOptions={{tabStyle: styles.tabBar}}>
        <Tab.Screen name="Man" component={Men} />
        <Tab.Screen name="Woman" component={Woman} />
        <Tab.Screen name="Kids" component={Kids} />
      </Tab.Navigator>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homePageConytainer: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingTop: '10%',
  },
  homeScreenContent: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  tabBar: {
    marginTop: 20,
  },
  indicator: {
    borderBottomColor: 'red',
  },
});
