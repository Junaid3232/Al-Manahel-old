import React, {FC} from 'react';
import {
  _Screen,
  _View,
  _Text,
  _Image,
  _Button,
  _Checkbox,
  _Header,
} from 'components';
import {Background} from 'components';
import {Color} from 'const';
import {LineChartCard, CounterCards} from 'modules';

export const Homed: FC = () => {
  return (
    <_Screen
      header={<_Header name={'Dashboard'} />}
      background={<Background color={Color.Gray} />}
      hideTopSafeArea>
      <_View flex={1}>
        <CounterCards />
        <LineChartCard name={'Sells'} />

        <LineChartCard name={'Inventory Added'} />
      </_View>
    </_Screen>
  );
};
