import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const quizzesResultSlice = createSlice({
  name: "quizzesResult",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    reset: (state) => {
      state.value = [];
    },
  },
});

export const { add, reset } = quizzesResultSlice.actions;
export default quizzesResultSlice.reducer;
