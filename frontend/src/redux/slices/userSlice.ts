import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	score: 0,
};

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		incrementScore(state) {
			state.score++;
		},
		resetScore(state) {
			state.score = 0;
		},
	},
});

export default userSlice;
