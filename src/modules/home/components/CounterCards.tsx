import React, { FC } from 'react';
import { _View, _Text, _Icon, _Image } from 'components';
import { Image, StyleSheet } from 'react-native';
import { Color } from 'const';
import { shadow } from 'global-styles';
import { Fonts } from 'const/theme';
export const CounterCards: FC = () => {
  return (
    <_View paddings={{ paddingHorizontal: 20 }} justify={'space-between'}>
      <_View
        width={'100%'}
        align={'center'}
        flexDirection={'row'}
        justify={'space-between'}
        height={110}
        style={styles.container}
      >
        <_View
          width={'48%'}
          height={110}
          style={{
            backgroundColor: Color.Secondary,
            borderRadius: 10,
            justifyContent: 'center',
            paddingLeft: 25,
          }}
        >
          <Image
            style={{ width: 20, height: 20, tintColor: Color.White }}
            source={require('assets/icons/sellFill.png')}
          />
          <_Text
            font={Fonts.medium}
            color={Color.White}
            size='med'
            margins={{ marginTop: 5 }}
          >
            59
          </_Text>
          <_Text font='Raleway-SemiBold' size='tny' color={Color.PrimaryLight}>
            Total Sells
          </_Text>
        </_View>
        <_View
          width={'48%'}
          height={110}
          style={{
            backgroundColor: Color.Primary,
            borderRadius: 10,
            justifyContent: 'center',
            paddingLeft: 25,
          }}
        >
          <Image
            style={{ width: 20, height: 20, tintColor: Color.White }}
            source={require('assets/icons/shopFill.png')}
          />
          <_Text
            font={Fonts.medium}
            color={Color.White}
            size='med'
            margins={{ marginTop: 5 }}
          >
            49
          </_Text>
          <_Text font='Raleway-SemiBold' size='tny' color={Color.PrimaryLight}>
            Added Inventory
          </_Text>
        </_View>
      </_View>
    </_View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // backgroundColor: Color.White,
    borderRadius: 15,
    // paddingHorizontal: -10,
    // marginLeft: 10,
  },
  counterOne: {
    backgroundColor: '#afe6fb',
    borderRadius: 15,
    zIndex: 1,
  },
  lineLogo: { width: '100%', height: '80%', tintColor: Color.Primary },
  containerTwo: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 40,
  },
});
