import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { QuestionData } from '../../types/shared';

interface QuestionState {
    currentQuestion: number;
    questionData: QuestionData[] | null;
}

const initialState: QuestionState = {
    currentQuestion: 0,
    questionData: null
}

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setQuestionIndex(state, action: PayloadAction<number>) {
            state.currentQuestion = action.payload;
        },
        setQuestionData(state, action: PayloadAction<QuestionData[]>) {
            state.questionData = action.payload;
        }
    }
});

const scoreSlice = createSlice({
    name: 'score',
    initialState: { score: 0},
    reducers: {
        increment(state) {
            state.score++;
        },

        decrement(state) {
            state.score--;
        }
    }
});


const store = configureStore({
    reducer: {question: questionSlice.reducer, score: scoreSlice.reducer},
});

export const { setQuestionIndex } = questionSlice.actions;
export const scoreActions = scoreSlice.actions;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;