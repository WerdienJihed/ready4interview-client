import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    initQuizzes: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { initQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;
