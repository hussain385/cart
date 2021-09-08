import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, SafeAreaView, Text, View} from 'react-native';
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
    <SafeAreaView>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontWeight: '500',
          color: 'black',
          fontSize: 14,
          marginHorizontal: '6%',
          marginTop: 10,
          marginBottom: -10,
        }}>
        Categories
      </Text>
      <View style={{justifyContent: 'space-evenly', margin: 'auto'}}>
        <ManageOrderTabs
          Tabs={Tabs}
          handleItemActive={handleItemActive}
          activeItem={activeItem}
        />
      </View>

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
        renderItem={({item, index}) => (
          <TileList key={index} item={item} category={menu[0].category} />
        )}
      />
      {/*{menu[0].menu.map(item => (*/}
      {/*  <TileList key={item.title} item={item} category={menu[0].category} />*/}
      {/*))}*/}
      <View
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: '#EF2E78',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '12%',
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
            justifyContent: 'flex-end',
            borderLeftWidth: 1,
            borderLeftColor: 'white',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontWeight: '600',
              fontSize: 15,
              color: 'white',
            }}>
            $ {data.totalCost}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontWeight: '600',
              fontSize: 15,
              color: 'white',
            }}>
            {data.totalQuantity} Items
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;