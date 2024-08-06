// use cart in redux store
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            let index = state.findIndex(value => value.product.id === action.payload.id)
            if (index !== -1) {
                state[index].quantity += 1;
            } else {
                state.push({
                    product: action.payload,
                    quantity: 1
                })
            }
        },
        removeProduct: (state, action) => {
            return state.filter(item => item.product.id !== action.payload);
        },
        incrementQuantity: (state, action) => {

        },
        decrementQuantity: (state, action) => {

        }
    }
});

export const {addProduct, removeProduct, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;