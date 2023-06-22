import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionData } from "../../../types/shared";
import { QuizState } from "../../../types/shared";
import { MyQuiz } from "../../../types/shared";

const initialState: QuizState = {
  quizData: {numQuestions: 0, difficulty: "", topic: ""},
  currentQuestionIndex: 0,
  data: []
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
    updateQuizData(state, action: PayloadAction<MyQuiz>) {
      state.quizData.numQuestions = action.payload.numQuestions;
      state.quizData.difficulty = action.payload.difficulty;
      state.quizData.topic = action.payload.topic;
    },
  },
});

export default questionSlice;
