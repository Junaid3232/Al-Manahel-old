import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './AuthNavigator';
import {TabNavigator} from './TabNavigator';
import {Splash, Terms} from '../screens';

export const RootNavigator: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash-screen"
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="splash-screen" component={Splash} />
        <Stack.Screen name="terms-screen" component={Terms} />
        <Stack.Screen name="auth" component={AuthNavigator} />
        <Stack.Screen name="home-screen" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
