import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import userInterfaceSlice from "./ui-slice";
const store = configureStore({
	reducer: {
		cart: cartSlice,
		ui: userInterfaceSlice
	}
})

export default store;