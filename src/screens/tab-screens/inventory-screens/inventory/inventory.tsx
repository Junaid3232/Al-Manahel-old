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
import { FlatList } from 'react-native';
import { CategoryCard } from 'modules';

const category = [
  { image: require('assets/images/samsung.png'), name: 'Samsung' },
  { image: require('assets/images/apple.png'), name: 'iPhone' },
  { image: require('assets/images/infinix.png'), name: 'Infinix' },
  { image: require('assets/images/oppo.png'), name: 'Oppo' },
  { image: require('assets/images/poco.png'), name: 'Pocco' },
  { image: require('assets/images/huawei.png'), name: 'Huawei' },
  { image: require('assets/images/sony.png'), name: 'Sony' },
];
export const Inventory: FC = () => {
  return (
    <_Screen
      header={<_Header name={'Inventory'} />}
      background={<Background color={Color.Negative} />}
      hideTopSafeArea
    >
      <_View flex={1} paddings={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <_View
          flexDirection='row'
          justify='space-between'
          paddings={{ paddingHorizontal: 20 }}
        >
          <_View>
            <_Text font={Fonts.semibold} color={Color.Gray}>
              Total Inventories
            </_Text>
            <_Text size={'xxlrg'} font={Fonts.bold} color={Color.Secondary}>
              128
            </_Text>
          </_View>
          <_View>
            <_Text font={Fonts.semibold} color={Color.Gray}>
              Stock in Hand
            </_Text>
            <_Text size={'xxlrg'} font={Fonts.bold} color={Color.Secondary}>
              2350
            </_Text>
          </_View>
        </_View>
        <_View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 180 }}
            style={{ width: '100%' }}
            ListHeaderComponent={() => (
              <_Text
                font={Fonts.semibold}
                size='sml'
                color={Color.Gray}
                paddings={{ paddingTop: 20, paddingLeft: 10 }}
              >
                Inventory List
              </_Text>
            )}
            data={category}
            renderItem={({ item }) => <CategoryCard item={item} />}
          />
        </_View>
      </_View>
    </_Screen>
  );
};
