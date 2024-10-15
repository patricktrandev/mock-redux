import { configureStore } from "@reduxjs/toolkit";
import rfpReducer from "./reducer";

const store = configureStore({
  reducer: {
    rfp: rfpReducer,
  },
});

export default store;
