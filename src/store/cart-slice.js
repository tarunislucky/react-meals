import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: { totalQuantity: 0, items: [] },
	reducers: {
		addItemsToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.id === newItem.id);
			if (existingItem) {
				existingItem.quantity++;
				existingItem.totalPrice = parseFloat((existingItem.totalPrice + existingItem.price).toFixed(2));

			} else {
				state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
				state.totalQuantity++;
			}
		},
		removeItemFromCart: (state, action) => {
			const indexOfExistingItem = state.items.findIndex(item => item.id === action.payload);
			const existingItem = state.items[indexOfExistingItem];

			if (existingItem.quantity > 1) {
				existingItem.quantity--;
				existingItem.totalPrice = parseFloat((existingItem.totalPrice - existingItem.price).toFixed(2));
			} else {
				state.items.splice(indexOfExistingItem, 1);
				state.totalQuantity--;
			}
		}
	}
})
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;