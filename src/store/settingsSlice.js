import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    topic: "javascript",
    difficulty: "easy",
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    initSettings: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { initSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
