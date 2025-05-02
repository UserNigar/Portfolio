import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    products:[],
}
const baseUrl="http://localhost:3000/product"

export const getProduct=createAsyncThunk("products", async()=>{
    let {data}=await axios(baseUrl);
    return data;

})
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase( getProduct.fulfilled,(state,action)=>{
        state.products=action.payload;
    })

  }
})


export default productSlice.reducer
export const { extraReducers} = productSlice.actions
