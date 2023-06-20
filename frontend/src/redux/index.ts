import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { QuestionData } from "../../types/shared";

interface QuestionState {
	currentQuestion: number;
	topic: string;
	data: QuestionData[];
}

const initialState: QuestionState = {
	topic: "",
	currentQuestion: 0,
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
			state.currentQuestion = action.payload;
		},
		setQuestionData(state, action: PayloadAction<QuestionData[]>) {
			state.data = action.payload;
		},
		setQuestionTopic(state, action: PayloadAction<string>) {
			state.topic = action.payload;
		},
	},
});

const scoreSlice = createSlice({
	name: "score",
	initialState: { score: 0 },
	reducers: {
		increment(state) {
			state.score++;
		},

		decrement(state) {
			state.score--;
		},
	},
});

const store = configureStore({
	reducer: { question: questionSlice.reducer, score: scoreSlice.reducer },
});

export const { setQuestionIndex, setQuestionData, setQuestionTopic } =
	questionSlice.actions;
export const scoreActions = scoreSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
