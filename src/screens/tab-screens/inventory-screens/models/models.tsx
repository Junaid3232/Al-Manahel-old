import React, { FC } from 'react';
import {
  _View,
  _Screen,
  _Header,
  Background,
  _Text,
  _Image,
  _Icon,
} from 'components';
import { Color } from 'const';
import { Fonts } from 'const/theme';
import { FlatList, StyleSheet } from 'react-native';
import { CategoryCard } from 'modules';

const category = [
  { image: require('assets/images/phone.png'), name: 'Samsung Galaxy S3' },
  { image: require('assets/images/phone.png'), name: 'Samsung Galaxy J7' },
  { image: require('assets/images/phone.png'), name: 'Samsung S10+' },
  { image: require('assets/images/phone.png'), name: 'Samsung A33' },
  { image: require('assets/images/phone.png'), name: 'Samsung J4' },
  { image: require('assets/images/phone.png'), name: 'Samsung ' },
  { image: require('assets/images/phone.png'), name: 'Samsung' },
];
export const Models: FC = () => {
  return (
    <_Screen
      header={<_Header goBack name={'Models'} />}
      background={<Background color={Color.Negative} />}
      hideTopSafeArea
    >
      <_View flex={1} paddings={{ paddingHorizontal: 20 }}>
        <_View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
            style={{ width: '100%' }}
            data={category}
            renderItem={({ item }) => (
              <_View
                flex={1}
                paddings={{ paddingHorizontal: 20 }}
                style={styles.container}
                flexDirection={'row'}
              >
                <_View
                  flex={0.5}
                  height={100}
                  justify={'center'}
                  align={'center'}
                >
                  <_Image
                    width={40}
                    style={styles.image}
                    height={50}
                    resizeMode={'contain'}
                    source={item.image}
                  />
                </_View>
                <_View flex={2} height={100} justify={'center'}>
                  <_Text paddings={{ paddingLeft: 40 }} font={Fonts.semibold}>
                    {item.name}
                  </_Text>
                  <_View
                    flexDirection='row'
                    align='center'
                    justify='space-around'
                    paddings={{ paddingHorizontal: 20, paddingTop: 5 }}
                  >
                    <_View>
                      <_Text color={Color.Primary} font={Fonts.semibold}>
                        In Stock
                      </_Text>
                      <_Text>230</_Text>
                    </_View>
                    <_View>
                      <_Text color={Color.Primary} font={Fonts.semibold}>
                        Price
                      </_Text>
                      <_Text>14500</_Text>
                    </_View>
                  </_View>
                </_View>
              </_View>
            )}
          />
        </_View>
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: Color.White + 70,
    marginTop: 5,
  },
  image: {
    backgroundColor: Color.White,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});
