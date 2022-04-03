import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import filterContact from "./contacts-actions";
import { contactApi } from "./contactsSlice";

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});
export const items = combineReducers({
  [contactApi.reducerPath]: contactApi.reducer,
  filter,
});