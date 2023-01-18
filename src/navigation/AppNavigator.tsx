import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import * as screens from 'screens';
import {RoutesRecord} from './models';

export const AppNavigator: FC = () => {
  const Stack = createNativeStackNavigator<RoutesRecord>();
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="home" component={screens.Home} />
    </Stack.Navigator>
  );
};
