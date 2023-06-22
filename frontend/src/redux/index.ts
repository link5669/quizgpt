import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import questionSlice from "./slices/questionSlice.ts";
import userSlice from "./slices/userSlice.ts";

// Create a persist configuration object
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  question: questionSlice.reducer,
  user: userSlice.reducer,
});

// Wrap your rootReducer with the persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore the non-serializable values in the `persist/PERSIST` action
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

const persistor = persistStore(store);

export const {
  incrementIndex,
  setQuestionData,
  updateQuizData,
} = questionSlice.actions;
export const { incrementScore, resetScore } = userSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
