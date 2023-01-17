import React, {FC, useEffect} from 'react';

import {
  _View,
  _Screen,
  Background,
  _Image,
  _Text,
  _Button,
  _Icon,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet} from 'react-native';
export const Terms: FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <_Screen background={<Background color={Color.White} />} hideTopSafeArea>
      <_View flex={1} align="center" justify="center">
        <_Image
          height={130}
          width={'100%'}
          resizeMode="contain"
          style={{alignSelf: 'center'}}
          margins={{marginBottom: 20}}
          source={require('assets/icons/appLogo.png')}
        />
        <_Text style={{width: '80%', textAlign: 'center'}}>
          Lorem ipsum dolor sit amet, etiam eu turpis dictum est a, mattis
          tellus. Sed dignissim, metus nec fringilla accumsan.
        </_Text>
      </_View>
      <_View style={{position: 'absolute', bottom: 30, alignSelf: 'center'}}>
        <_Button
          onPress={() => navigation.navigate('register-screen')}
          title="Continue"
          style={styles.loginBtn}
        />
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({
  loginBtn: {width: 350, height: 50},
  registerBtn: {
    width: 350,
    height: 50,
    marginBottom: 50,
    backgroundColor: Color.White,
  },
});
