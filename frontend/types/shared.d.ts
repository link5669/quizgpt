export interface QuestionData {
	question: string;
	answers: string[];
	correctAnswer: number;
}

export interface QuizState {
	currentQuestionIndex: number;
	numQuestions: number;
	difficulty: string;
	topic: string;
	data: QuestionData[]
}

export interface UserData {
	// add a username?
	score: number;
	quizState: QuizState;
}