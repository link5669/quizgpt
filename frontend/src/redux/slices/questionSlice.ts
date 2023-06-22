import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionData } from "../../../types/shared";
import { QuizState } from "../../../types/shared";
import { DEFAULT_DIFFICULTY, DEFAULT_NUM_QUESTIONS } from "../../config";

const initialState: QuizState = {
	currentQuestionIndex: 0,
	topic: "",
	numQuestions: DEFAULT_NUM_QUESTIONS,
	difficulty: DEFAULT_DIFFICULTY,
	data: [],
};

const questionSlice = createSlice({
	name: "question",
	initialState,
	reducers: {
		incrementIndex(state) {
			state.currentQuestionIndex = state.currentQuestionIndex + 1;
		},
		resetIndex(state) {
			state.currentQuestionIndex = 0;
		},
		setQuestionData(state, action: PayloadAction<QuestionData[]>) {
			state.data = action.payload;
		},
		newNumQuestions(state, action: PayloadAction<number>) {
			state.numQuestions = action.payload;
		},
		newDifficulty(state, action: PayloadAction<string>) {
			state.difficulty = action.payload;
		},
		newTopic(state, action: PayloadAction<string>) {
			state.topic = action.payload;
			state.currentQuestionIndex = 0;
			state.data = [];
		},
	},
});

export default questionSlice;
