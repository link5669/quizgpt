import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit'
import { QuestionData } from '../../types/shared'

//Quiz state & slice: stores questions and the index the user is on
interface QuizState {
  currentQuestion: number,
  questionData: QuestionData[] | null
}

//add topic
const initialState: QuizState = {
  currentQuestion: 0,
  questionData: null
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload
    },
    setQuestionData: (state, action: PayloadAction<QuestionData[]>) => {
        state.questionData = action.payload
    }
  }
})

const scoreSlice = createSlice({
    name: 'score',
    initialState: 0,
    reducers: {
        increment: (state) => {
            state += 1;
        },
        decrement: (state) => {
            state -= 1;
        }
    }
})

const store = configureStore({
    reducer: {quiz: quizSlice.reducer, score: scoreSlice.reducer}
})

// Export the action creators
export const { setCurrentQuestion } = quizSlice.actions;
export const { increment, decrement} = scoreSlice.actions;

export default store;

