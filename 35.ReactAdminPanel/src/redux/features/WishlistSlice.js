import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    wishlist: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        updateWishlist: (state, action) => {
            console.log(action.payload)
            let existProduct = state.wishlist.find((product) => product.id == action.payload.id)
            if (existProduct) {
                state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id)
            } else {
                state.wishlist.push(action.payload)
            }
        },
        clearWishlist: (state) => {
            state.wishlist = []
        }
    },
})

export default wishlistSlice.reducer

export const { updateWishlist, clearWishlist } = wishlistSlice.actions