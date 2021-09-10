import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {addQuantity, removeQuantity} from '../../store/slices';

export default function TileList({item, category}) {
  const dispatch = useDispatch();
  return (
    <Card
      style={{
        marginLeft: 14,
        marginRight: 16,
        marginBottom: 10,
        shadowOpacity: 100,
        elevation: 5,
        borderRadius: 7,
      }}>
      <Card.Content>
        <Text style={{fontSize: 18, fontWeight: '500'}}>{item.title}</Text>
        <View
          style={{
            padding: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Paragraph>$ {item.price}</Paragraph>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                marginRight: 10,
              }}
              onPress={() => {
                dispatch(removeQuantity({item, category}));
              }}>
              <AntDesign name="minuscircle" size={14} color="#454868" />
            </TouchableOpacity>
            <Text style={{fontWeight: '700', fontSize: 15, marginTop: -3}}>
              {item?.quantity < 10
                ? ('0' + item?.quantity).slice(-2)
                : item?.quantity}
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 10,
              }}
              onPress={() => {
                dispatch(addQuantity({item, category}));
              }}>
              <AntDesign name="pluscircle" size={14} color="#EF2E78" />
            </TouchableOpacity>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
