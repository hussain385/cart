import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('screen').width;
const ManageOrderTabs = props => {
  const {Tabs, handleItemActive, activeItem} = props;
  return (
    <View style={styles.flexerRow}>
      <FlatList
        horizontal={true}
        data={Tabs}
        style={{marginHorizontal: 15}}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={item.category}
            onPress={() => handleItemActive(item.category)}>
            <View
              style={
                item.category === activeItem ? styles.tab : styles.unactive
              }>
              <Text
                style={
                  item.category === activeItem
                    ? styles.text
                    : styles.unactiveText
                }>
                {item.category}
              </Text>
            </View>
            {item.category === activeItem ? (
              <View style={styles.activeLine} />
            ) : (
              <View style={styles.inActiveLine} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ManageOrderTabs;

const styles = StyleSheet.create({
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
  },
  tab: {
    backgroundColor: '#EF2E78',
    width: 100,
    textAlign: 'center',
    padding: 8,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#EF2E78',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 10,
    textAlign: 'center',
  },
  activeLine: {
    backgroundColor: 'transparent',
    height: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  unactive: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  unactiveText: {
    color: 'black',
    fontSize: 12,
  },
  inActiveLine: {
    marginTop: 13,
  },
});
