import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    
    updateWishlist: (state, action) => {
      const existsProduct = state.wishlist.find(
        (product) => product.id === action.payload.id
      );
      if (existsProduct) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== action.payload.id);
      }else{
        state.wishlist.push(action.payload)
      }
    },
  },
});


export const { updateWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
