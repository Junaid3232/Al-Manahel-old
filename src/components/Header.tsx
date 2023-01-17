import React, { FC } from 'react';
import { _View, _Text, _Icon, _Image } from 'components';
import { Image, TouchableOpacity } from 'react-native';
import { Color } from 'const';
import { Fonts } from 'const/theme';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from 'navigation';

interface Props {
  name: string;
  goBack: boolean;
}
export const _Header: FC<Props> = ({ name, goBack }) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <_View
      paddings={{ paddingHorizontal: 20, paddingVertical: 5 }}
      flexDirection={'row'}
      justify={'space-between'}
    >
      {goBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <_Icon
            family='Feather'
            name='chevron-left'
            color={Color.black}
            size={30}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image
            source={require('assets/icons/hamburger.png')}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      )}
      <_Text font={Fonts.semibold} color={Color.Primary} size='med'>
        {name}
      </_Text>
      <_Image
        width={35}
        height={35}
        radius={18}
        source={require('assets/images/profile.jpeg')}
      />
    </_View>
  );
};
