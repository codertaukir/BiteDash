import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            const itemExist = state.find((item) => item.id === action.payload.id);
            if (itemExist) {
                itemExist.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 })
            }
        },
        removeCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        increment: (state, action) => {
            const update = state.find((item) => item.id === action.payload)
            if (update) {
                update.quantity++;
            }
        },
        decrement: (state, action) => {
            const updateItem = state.find((item) => item.id === action.payload);

            if (updateItem.quantity === 1) {
                state.filter((item) => item.id !== action.payload)
            } else {
                updateItem.quantity--;
            }
        }
    }
})

export const { addCart, removeCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;