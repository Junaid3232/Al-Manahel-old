import React, { FC, useState } from 'react';
import { _View, _Text, _Input, _Icon } from 'components';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Color } from 'const';
import { shadow } from 'global-styles';

interface EnumItem {
  name: string;
}
interface Props extends Array<EnumItem> {
  storeData: any;
  title: string;
}
export const _Dropdown: FC<Props> = ({ storeData, title }) => {
  const [showDropdown, setShowdropdown] = useState<boolean>(false);
  const [stores, setStores] = useState<Array<EnumItem>>(storeData);

  const onSearch = (text: string) => {
    text.length > 0 ? setShowdropdown(true) : setShowdropdown(false);
    let results: Array<EnumItem> = storeData.filter(
      (item: any) => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1
    );
    setStores(results);
  };

  return (
    <_View>
      <_View width={'100%'}>
        <_Input
          placeholder={title}
          defaultValue=''
          style={styles.dropdown}
          onChangeText={(text) => onSearch(text)}
        />
        <TouchableOpacity
          style={{ position: 'absolute', right: 20, top: 20 }}
          onPress={() => setShowdropdown(!showDropdown)}
        >
          <_Icon
            name={showDropdown ? 'up' : 'down'}
            family='AntDesign'
            color={Color.Primary}
          />
        </TouchableOpacity>
      </_View>
      {showDropdown && (
        <ScrollView style={styles.dropContainer}>
          <_View style={{ marginBottom: 20, ...shadow, zIndex: 3 }}>
            {stores?.map((item, index) => (
              <TouchableOpacity key={index} style={styles.dropItem}>
                <_Text>{item.name}</_Text>
              </TouchableOpacity>
            ))}
            {Boolean(stores.length <= 0) && (
              <_Text style={{ marginTop: 10 }}>{'No Results Found'}</_Text>
            )}
          </_View>
        </ScrollView>
      )}
    </_View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: Color.White,
    width: '100%',
  },
  dropContainer: {
    zIndex: 1,
    width: '100%',
    maxHeight: 300,
    backgroundColor: Color.White,
    borderRadius: 15,
    position: 'absolute',
    top: 60,
    paddingHorizontal: 20,
    paddingTop: 10,
    borderWidth: 0.3,
    borderColor: Color.Secondary,
  },
  dropItem: {
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: Color.PrimaryLight,
  },
});
