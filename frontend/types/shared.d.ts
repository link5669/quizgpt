export interface QuestionData {
	question: string;
	answers: string[];
	correctAnswer: number;
}

export interface MyQuiz {
	numQuestions: number;
	difficulty: string;
	topic: string;
	gpt4: boolean;
}

export interface QuizState {
	quizData: MyQuiz;
	currentQuestionIndex: number;
	data: QuestionData[];
}

export interface UserData {
	// add a username?
	score: number;
	quizState: QuizState;
}

export interface Score {
	username: string,
	topic: string,
	score: int
}
