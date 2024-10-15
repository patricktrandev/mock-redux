import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAnswerFailed,
  fetchAnswerStart,
  fetchAnswerSuccess,
} from "./actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const rfpReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchAnswerStart, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAnswerSuccess, (state, action) => {
      state.loading = false;
      //console.log(action.payload);
      state.data.push(action.payload);
      //console.log(state.data);
    })
    .addCase(fetchAnswerFailed, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
);
export default rfpReducer;
