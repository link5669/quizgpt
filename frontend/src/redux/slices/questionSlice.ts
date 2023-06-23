import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionData } from "../../../types/shared";
import { QuizState } from "../../../types/shared";
import { MyQuiz } from "../../../types/shared";
import { DEFAULT_DIFFICULTY, DEFAULT_NUM_QUESTIONS } from "../../config";
import { PersistedState } from "redux-persist/lib/types";

export const initialQuizState: QuizState = {
	quizData: {
		numQuestions: DEFAULT_NUM_QUESTIONS,
		difficulty: DEFAULT_DIFFICULTY,
		topic: "",
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
			state.quizData.numQuestions = action.payload.numQuestions;
			state.quizData.difficulty = action.payload.difficulty;
			state.quizData.topic = action.payload.topic;
		},
	},
});

interface OldState {
	topic: string;
	currentQuestionIndex: number;
	data: Array<{
		question: string;
		answers: string[];
		correctAnswer: number;
	}>;
	numQuestions: number;
	difficulty: string;
}

export const questionMigration = (state: PersistedState): PersistedState => {
	if (!state) {
		return state;
	}

	const oldState = state as unknown as OldState;

	const newState = {
		...oldState,
		quizData: {
			numQuestions: oldState.numQuestions,
			difficulty: oldState.difficulty,
			topic: oldState.topic,
		},
		currentQuestionIndex: 0,
		data: [],
	};

	return newState as unknown as PersistedState;
};

export default questionSlice;
