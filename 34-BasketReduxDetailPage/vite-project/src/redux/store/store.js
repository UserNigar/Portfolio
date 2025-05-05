import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from '../features/productSlice'
import wishlistSlice from '../features/wishlistSlice'
import  basketSlice  from '../features/basketSlice'



export const store= configureStore({
  reducer: {products: productSlice ,
    wishlist: wishlistSlice,
  basket:basketSlice}
})