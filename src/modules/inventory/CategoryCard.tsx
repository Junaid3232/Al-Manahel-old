import React, { FC } from 'react';
import { _View, _Image, _Text, _Icon } from 'components';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Color } from 'const';
import { Fonts } from 'const/theme';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from 'navigation';
interface ItemEnum {
  name: string;
  image: any;
}

interface Props {
  item: Array<ItemEnum>;
}
export const CategoryCard: FC<Props> = ({ item }) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('models-screen');
      }}
    >
      <_View
        flex={1}
        paddings={{ paddingHorizontal: 20 }}
        style={styles.container}
        flexDirection={'row'}
      >
        <_View flex={0.5} height={100} justify={'center'} align={'center'}>
          <_Image
            width={40}
            style={styles.image}
            height={50}
            resizeMode={'contain'}
            source={item.image}
          />
        </_View>
        <_View flex={2} height={100} justify={'center'}>
          <_Text
            paddings={{ paddingLeft: 40 }}
            font={Fonts.semibold}
            size={'med'}
          >
            {item.name}
          </_Text>
          <_View
            flexDirection='row'
            align='center'
            paddings={{ paddingHorizontal: 20, paddingTop: 5 }}
          >
            <_View flexDirection='row' margins={{ marginLeft: 20 }}>
              <_Icon
                family='AntDesign'
                name='caretup'
                color={Color.Success}
                style={{ marginTop: 3 }}
              />
              <_Text paddings={{ paddingLeft: 5 }} color={Color.Success}>
                267
              </_Text>
            </_View>
            <_View flexDirection='row' margins={{ marginLeft: 20 }}>
              <_Icon
                family='AntDesign'
                name='caretdown'
                color={Color.Danger}
                style={{ marginTop: 3 }}
              />
              <_Text paddings={{ paddingLeft: 5 }} color={Color.Danger}>
                67
              </_Text>
            </_View>
          </_View>
        </_View>
        <_View flex={1} height={100} justify={'center'} align={'flex-end'}>
          <_Icon family='AntDesign' name='right' color={Color.Gray} />
        </_View>
      </_View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: Color.White + 70,
    marginTop: 5,
  },
  image: {
    backgroundColor: Color.White,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});
