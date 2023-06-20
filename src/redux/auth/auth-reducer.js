import { createReducer } from "@reduxjs/toolkit";
import * as authAction from './auth-actions';

export const token = createReducer('', {
    [authAction.tokenAuth]: (_, { payload }) => payload
  });
  
export const isLogInAuth = createReducer(false, {
    [authAction.logInAuth]: (_, { payload }) => payload
  });