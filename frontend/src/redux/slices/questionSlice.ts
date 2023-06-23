import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionData } from "../../../types/shared";
import { QuizState } from "../../../types/shared";
import { MyQuiz } from "../../../types/shared";
import { DEFAULT_DIFFICULTY, DEFAULT_NUM_QUESTIONS } from "../../config";

export const initialQuizState: QuizState = {
	quizData: {
		numQuestions: DEFAULT_NUM_QUESTIONS,
		difficulty: DEFAULT_DIFFICULTY,
		topic: "",
		gpt4: false,
	},
	currentQuestionIndex: 0,
	data: [],
};

const questionSlice = createSlice({
	name: "question",
	initialState: initialQuizState,
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
		updateQuizData(state, action: PayloadAction<MyQuiz>) {
			state.currentQuestionIndex = 0;
			state.quizData.numQuestions = action.payload.numQuestions;
			state.quizData.difficulty = action.payload.difficulty;
			state.quizData.topic = action.payload.topic;
			state.quizData.gpt4 = action.payload.gpt4;
		},
	},
});

export default questionSlice;
