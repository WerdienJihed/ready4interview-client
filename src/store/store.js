import { configureStore } from "@reduxjs/toolkit";
import quizzesResultReducer from "./quizzesResultSlice";
import settingsReducer from "./settingsSlice";
import quizzesReducer from "./quizzesSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    quizzesResult: quizzesResultReducer,
    quizzes: quizzesReducer,
  },
});

export default store;
