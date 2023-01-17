import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import * as screens from 'screens';
import { RoutesRecord } from './models';

export const InventoryNavigator: FC = () => {
  const Stack = createNativeStackNavigator<RoutesRecord>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name='inventory-screen' component={screens.Inventory} />
      <Stack.Screen name='models-screen' component={screens.Models} />
    </Stack.Navigator>
  );
};
