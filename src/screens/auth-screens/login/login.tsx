import React, {FC} from 'react';
import {_Screen, _View, _Text, _Input, _Image, _Button} from 'components';
import {Background} from 'components';
import {Color} from 'const';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';

export const Login: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      <_View flex={1}>
        <_Image
          width={'80%'}
          style={{alignSelf: 'center'}}
          margins={{marginVertical: 20}}
          height={100}
          resizeMode={'contain'}
          source={require('assets/icons/appLogo.png')}
        />
        <_Text
          size="xlrg"
          paddings={{padding: 20}}
          font="Raleway-Bold"
          color={Color.Primary}>
          Login
        </_Text>
        <_Text
          size="base"
          paddings={{paddingHorizontal: 20}}
          color={Color.Gray}>
          You can continue to login for managing your own personal phones
          bussiness
        </_Text>

        <_Input
          style={styles.textInput}
          placeholder="User "
          iconFamily="FontAwesome5"
          iconName="user-alt"
        />
        <_Input
          style={styles.textInput}
          placeholder="Passwword"
          iconFamily="FontAwesome5"
          iconName="lock"
        />
        <_Button
          style={styles.buttons}
          margins={{marginTop: 40}}
          title={'Login'}
          onPress={() => navigation.navigate('home-screen')}
        />
        <_Button
          type="secondary"
          style={styles.buttons}
          margins={{marginTop: 20}}
          title={`Don't have an account?`}
          onPress={() => navigation.navigate('register-screen')}
        />
      </_View>
    </_Screen>
  );
};
