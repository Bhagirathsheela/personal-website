// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const actions = commonSlice.actions;
export default commonSlice.reducer;
