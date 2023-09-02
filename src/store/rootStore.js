// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Create this file with your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
