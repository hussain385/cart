import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import ManageOrderTabs from '../../components/ManageTabs/ManageTabs';
import {useDispatch, useSelector} from 'react-redux';
import TileList from '../../components/TileList/TileList';
import {getTotal} from '../../store/slices';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
// import {data} from './cardData';

const Home = () => {
  const data = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const Tabs = data.items.filter(item => {
    return item;
  });
  const [activeItem, setActiveItem] = useState(Tabs[0].category);
  const handleItemActive = itemToActive => {
    setActiveItem(itemToActive);
  };

  const menu = data.items.filter(item => {
    return item.category === activeItem;
  });

  useEffect(() => {
    dispatch(getTotal());
  }, [data.items, dispatch]);

  return (
    <View style={{height: Dimensions.get('screen').height * 0.81}}>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontWeight: '500',
          color: '#454868',
          fontSize: 15,
          marginHorizontal: 15,
          marginTop: 10,
          marginBottom: -10,
        }}>
        Categories
      </Text>
      <ManageOrderTabs
        Tabs={Tabs}
        handleItemActive={handleItemActive}
        activeItem={activeItem}
      />

      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 10,
          marginTop: -9,
          borderBottomColor: '#C4C4C4',
          borderBottomWidth: 1,
        }}
      />
      <FlatList
        style={{height: Dimensions.get('screen').height * 0.62}}
        data={menu[0].menu}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TileList key={index} item={item} category={menu[0].category} />
        )}
      />
      <View
        style={{
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          backgroundColor: '#EF2E78',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 70,
          alignItems: 'center',
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <FontAwesome5 name="shopping-basket" size={20} color="white" />
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontWeight: '600',
              fontSize: 15,
              color: 'white',
              paddingLeft: 10,
            }}>
            Checkout
          </Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            borderLeftWidth: 1,
            borderLeftColor: 'white',
            paddingLeft: 19,
            paddingRight: 30,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontWeight: '600',
              fontSize: 15,
              color: 'white',
            }}>
            $ {data.totalCost.toFixed(2)}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontWeight: '600',
              fontSize: 12,
              color: 'white',
            }}>
            {data.totalQuantity} Items
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
