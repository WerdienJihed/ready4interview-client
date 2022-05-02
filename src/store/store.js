import { configureStore } from "@reduxjs/toolkit";
import quizzesResultReducer from "./quizzesResultSlice";
import settingsReducer from "./settingsSlice";

const store = configureStore({
  reducer: {
    quizzesResult: quizzesResultReducer,
    settings: settingsReducer,
  },
});

export default store;
