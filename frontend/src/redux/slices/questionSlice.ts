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

export default questionSlice;
