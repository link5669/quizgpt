import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./slices/questionSlice.ts";
import userSlice from "./slices/userSlice.ts";

const store = configureStore({
	reducer: { question: questionSlice.reducer, user: userSlice.reducer },
});

export const { setQuestionIndex, setQuestionData, setQuestionTopic } =
	questionSlice.actions;
export const { incrementScore } = userSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
