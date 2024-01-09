
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems:[],
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state:any, action: PayloadAction<any>) => {
            const newItem = action.payload;
            state.cartItems.push(newItem);
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer