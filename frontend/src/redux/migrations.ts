import { PersistedState } from "redux-persist/lib/types";

interface v1State {
	question: {
		currentQuestionIndex: number;
		data: Array<{
			question: string;
			answers: string[];
			correctAnswer: number;
		}>;
		quizData: {
			numQuestions: number;
			difficulty: string;
			topic: string;
		};
	};
}

const migrationToV2 = (state: PersistedState): PersistedState => {
	if (!state) {
		return state;
	}

	const oldState = state as unknown as v1State;
	const newState = {
		...oldState,
		question: {
			quizData: {
				...oldState.question.quizData,
				gpt4: false,
			},
		},
	};

	return newState as unknown as PersistedState;
};

const migrations = {
	2: migrationToV2,
};

export default migrations;
