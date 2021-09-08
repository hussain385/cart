import {createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';
import {data} from '../../views/home/cardData';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: data,
    totalCost: 0,
    totalQuantity: 0,
  },
  reducers: {
    addQuantity: (state, action) => {
      const {item, category} = action.payload;
      // const dataIndex = _.findIndex(state.items, d => {
      //   return d.category === category;
      // });
      // if (dataIndex) {
      //   const menuIndex = _.findIndex(state.items[dataIndex].menu, m => {
      //     return m.title === item.title;
      //   });
      //   if (menuIndex) {
      //     state.items[dataIndex].menu[menuIndex].quantity += 1;
      //   } else {
      //     state.items[dataIndex].menu.push({
      //       ...item,
      //       quantity: 0,
      //     });
      //   }
      // } else {
      //   state.items.push({
      //     menu: [{...item, quantity: 0}],
      //     category,
      //   });
      // }
      state.items.map(i => {
        if (i.category === category) {
          i.menu.map(m => {
            if (m.title === item.title) {
              // console.log('Found the item', m);
              if (m.quantity) {
                m.quantity += 1;
              } else {
                m.quantity = 1;
              }
            }
          });
        }
      });
    },
    removeQuantity: (state, action) => {
      const {item, category} = action.payload;
      // const dataIndex = _.findIndex(state.items, d => {
      //   return d.category === category;
      // });
      // if (dataIndex) {
      //   const menuIndex = _.findIndex(state.items[dataIndex].menu, m => {
      //     return m.title === item.title;
      //   });
      //   if (menuIndex) {
      //     state.items[dataIndex].menu[menuIndex].quantity -= 1;
      //   }
      // }
      state.items.map(i => {
        if (i.category === category) {
          i.menu.map(m => {
            if (m.title === item.title) {
              // console.log('Found the item', m);
              if (m.quantity) {
                m.quantity -= 1;
                if (m.quantity <= 0) {
                  m.quantity = 0;
                }
              } else {
                m.quantity = 0;
              }
              return;
            }
          });
        }
      });
    },
    getTotal: (state, action) => {
      const rawData = state.items.map(i => {
        return i.menu.reduce(
          (total, cart) => {
            // console.log(total, cart);
            total.totalCost += cart.price * cart?.quantity;
            total.totalQuantity += cart?.quantity;
            return total;
          },
          {
            totalCost: 0,
            totalQuantity: 0,
          },
        );
      });
      const totalCost = [];
      const totalQuantity = [];
      rawData.map(rdata => {
        totalCost.push(rdata.totalCost);
        totalQuantity.push(rdata.totalQuantity);
      });
      // console.log('the total cost will become = ', totalCost);
      state.totalCost = totalCost.reduce((pre, curr) => pre + curr, 0);
      state.totalQuantity = totalQuantity.reduce((pre, curr) => pre + curr, 0);
    },
  },
});

export const {addQuantity, getTotal, removeQuantity} = cartSlice.actions;

export default cartSlice.reducer;
