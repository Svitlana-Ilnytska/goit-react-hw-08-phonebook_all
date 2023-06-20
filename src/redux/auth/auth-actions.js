import { createAction } from "@reduxjs/toolkit";

export const tokenAuth = createAction('auth/token');

export const logInAuth= createAction('auth/loginauth')