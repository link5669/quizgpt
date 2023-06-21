import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionData } from "../../../types/shared";
import { QuizState } from "../../../types/shared";

const initialState: QuizState = {
  currentQuestionIndex: 0,
  topic: "",
  numQuestions: 0,
  difficulty: "",
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
