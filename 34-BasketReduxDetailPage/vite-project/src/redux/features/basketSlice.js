import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const existProduct = state.basket.find(item => item.id === action.payload.id);
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
    },

    removeBasket: (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload);
    },

    clearBasket: (state) => {
      state.basket = [];
    },
  }
});

export default basketSlice.reducer;
export const { addBasket, removeBasket, clearBasket } = basketSlice.actions;
