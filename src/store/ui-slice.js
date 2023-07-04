import { createSlice } from "@reduxjs/toolkit";

const userInterfaceSlice = createSlice({
	name: "ui",
	initialState: { cartVisibility: false },
	reducers: {
		toggleCart: (state) => {
			state.cartVisibility = !state.cartVisibility;
		}
	}
})
export const userInterfaceAction = userInterfaceSlice.actions;
export default userInterfaceSlice.reducer;