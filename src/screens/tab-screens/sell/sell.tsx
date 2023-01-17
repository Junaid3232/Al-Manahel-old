import React, { FC } from 'react';
import {
  _View,
  _Text,
  _Screen,
  Background,
  _Header,
  _Input,
  _Button,
  _Dropdown,
} from 'components';
import { Color } from 'const';
import { Fonts } from 'const/theme';
export const Sell: FC = () => {
  const category = [
    { name: 'Samsung' },
    { name: 'iPhone' },
    { name: 'Infinix' },
    { name: 'Oppo' },
    { name: 'Pocco' },
  ];
  const models = [
    { name: 'Samsung A30' },
    { name: 'iPhone 11 Pro' },
    { name: 'Infinix Hot 8' },
    { name: 'Oppo F7' },
    { name: 'Pocco X3' },
  ];
  return (
    <_Screen
      header={<_Header name={'Sell'} />}
      background={<Background color={Color.Negative} />}
      hideTopSafeArea
    >
      <_View flex={1} paddings={{ paddingHorizontal: 20 }}>
        <_Text
          font={Fonts.medium}
          size={'med'}
          color={Color.Primary}
          paddings={{ paddingVertical: 20 }}
        >
          Add Item for Selling
        </_Text>
        <_View style={{ zIndex: 2 }}>
          <_Dropdown storeData={category} title={'Select Category'} />
        </_View>
        <_View style={{ zIndex: 1 }}>
          <_Dropdown storeData={models} title={'Select Model'} />
        </_View>
        <_Input
          placeholder='Title'
          style={{ backgroundColor: Color.White, width: '100%' }}
        />
        <_Input
          placeholder='Price'
          style={{
            backgroundColor: Color.White,
            width: '50%',
            alignSelf: 'flex-start',
          }}
        />
        <_Input
          placeholder='Discount'
          style={{
            backgroundColor: Color.White,
            width: '50%',
            alignSelf: 'flex-start',
          }}
        />

        <_Input
          placeholder='Description'
          multiline
          style={{ backgroundColor: Color.White, width: '100%' }}
        />
        <_Button title='Add' />
      </_View>
    </_Screen>
  );
};
