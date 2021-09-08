import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {addQuantity, removeQuantity} from '../../store/slices';

export default function TileList({item, category}) {
  const dispatch = useDispatch();
  return (
    <Card
      style={{margin: 5, shadowOpacity: 100, elevation: 5, borderRadius: 7}}>
      <Card.Title style={{fontFamily: 'Poppins-Medium'}} title={item.title} />
      <Card.Content>
        <View
          style={{
            padding: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Paragraph>$ {item.price}</Paragraph>
          </View>
          <View style={{flexDirection: 'row', height: 29}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#454868',
                padding: 11,
                marginRight: 10,
                borderRadius: 100,
              }}
              onPress={() => {
                dispatch(removeQuantity({item, category}));
              }}>
              <Text style={{fontSize: 20, marginTop: -12, color: 'white'}}>
                -
              </Text>
            </TouchableOpacity>
            <Paragraph>{item?.quantity}</Paragraph>
            <TouchableOpacity
              style={{
                backgroundColor: '#EF2E78',
                padding: 10,
                borderRadius: 100,
                marginLeft: 10,
              }}
              onPress={() => {
                dispatch(addQuantity({item, category}));
              }}>
              <Text style={{fontSize: 15, marginTop: -6, color: 'white'}}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
