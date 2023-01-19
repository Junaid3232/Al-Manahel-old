import React, {FC} from 'react';
import {_View, _Text, _Icon, _Image, _Screen} from 'components';
import {Image, TouchableOpacity, StatusBar} from 'react-native';
import {Color} from 'const';
import {Fonts} from 'const/theme';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';

interface Props {
  name: string;
  goBack: boolean;
}
export const _Header: FC<Props> = ({name, goBack}) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <_View
      paddings={{paddingHorizontal: 10, paddingVertical: 5}}
      style={{backgroundColor: Color.Primary, height: 84}}
      flexDirection={'row'}
      align={'flex-end'}
      justify={'space-between'}>
      <StatusBar backgroundColor={Color.Primary} barStyle={'dark-content'} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <_Icon
          family="Feather"
          name="chevron-left"
          color={Color.White}
          size={30}
        />
      </TouchableOpacity>

      <_Text
        style={{marginLeft: -25}}
        font={Fonts.bold}
        color={Color.White}
        size="med">
        {name}
      </_Text>
      <_View></_View>
    </_View>
  );
};
