import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {RootNavigator} from './src/navigation/RootNavigator';
import {useTranslation} from 'react-i18next';
import './src/const/IMLocalize';
const App = () => {
  const {t, i18n} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;
