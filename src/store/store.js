import { configureStore } from "@reduxjs/toolkit";
import quizzesResultReducer from "./quizzesResultSlice";

const store = configureStore({
  reducer: {
    quizzesResult: quizzesResultReducer,
  },
});

export default store;
