import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { QuestionData } from "../../types/shared";

interface QuestionState {
	currentQuestionIndex: number;
	topic: string;
	data: QuestionData[];
}

const initialState: QuestionState = {
	topic: "",
	currentQuestionIndex: 0,
	data: [
		{
			question: "",
			answers: [""],
			correctAnswer: 0,
		},
	],
};

const questionSlice = createSlice({
	name: "question",
	initialState,
	reducers: {
		setQuestionIndex(state, action: PayloadAction<number>) {
			state.currentQuestionIndex = action.payload;
		},
		setQuestionData(state, action: PayloadAction<QuestionData[]>) {
			state.data = action.payload;
		},
		setQuestionTopic(state, action: PayloadAction<string>) {
			state.topic = action.payload;
		},
	},
});

const userSlice = createSlice({
	name: "user",
	initialState: { score: 0 },
	reducers: {
		incrementScore(state) {
			state.score++;
		},
		resetScore(state) {
			state.score = 0;
		},
	},
});

const store = configureStore({
	reducer: { question: questionSlice.reducer, user: userSlice.reducer },
});

export const { setQuestionIndex, setQuestionData, setQuestionTopic } =
	questionSlice.actions;
export const { incrementScore } = userSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
