import { createAction } from "@reduxjs/toolkit";

export const fetchAnswerStart = createAction("fetchAnswerStart");
export const fetchAnswerSuccess = createAction("fetchAnswerSuccess");
export const fetchAnswerFailed = createAction("fetchAnswerFailed");
