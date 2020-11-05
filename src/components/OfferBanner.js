import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {COLORS} from '../constants/Colours';

export default ({offerDetails}) => {
  return (
    <View style={styles.bannerContainer}>
      <ImageBackground
        source={{uri: offerDetails.modelImg}}
        style={styles.backGroundImageContainer}
        imageStyle={styles.backGroundImage}>
        <View style={styles.offerContent}>
          <View style={styles.discountTextContainer}>
            <Text style={styles.discountText}>{offerDetails.discountText}</Text>
          </View>
          <View style={styles.codeAndSloganWrapper}>
            <View style={styles.codeWrapper}>
              <Text style={styles.offerText}>Use Code : </Text>
              <View style={styles.offerCodeView}>
                <Text style={[styles.offerText, styles.offerCode]}>
                  {offerDetails.discountCode}
                </Text>
              </View>
            </View>

            <Text style={[styles.slogan, styles.offerText]}>
              {offerDetails.discountSlogan}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    height: '100%',
    width: 300,
    backgroundColor: COLORS.GRAY,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  backGroundImageContainer: {
    height: '100%',
    width: '100%',
  },
  backGroundImage: {
    borderRadius: 10,
  },
  offerContent: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    height: '100%',
    justifyContent: 'flex-end',
    padding: 20,
  },
  discountTextContainer: {
    paddingBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'white',
  },
  discountText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
  offerText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },

  codeAndSloganWrapper: {},
  slogan: {
    marginTop: 20,
  },
  codeWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  offerCodeLabel: {},
  offerCodeView: {
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  offerCode: {},
});
