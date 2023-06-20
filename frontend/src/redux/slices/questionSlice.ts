import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionData } from "../../../types/shared";

interface QuestionState {
	currentQuestionIndex: number;
	topic: string;
	data: QuestionData[];
}

const initialState: QuestionState = {
	topic: "",
	currentQuestionIndex: 0,
	data: [],
};

const questionSlice = createSlice({
	name: "question",
	initialState,
	reducers: {
		incrementIndex(state) {
			state.currentQuestionIndex = state.currentQuestionIndex + 1;
		},
		setQuestionData(state, action: PayloadAction<QuestionData[]>) {
			state.data = action.payload;
		},
		newTopic(state, action: PayloadAction<string>) {
			state.topic = action.payload;
			state.currentQuestionIndex = 0;
			state.data = [];
		},
	},
});

export default questionSlice;
