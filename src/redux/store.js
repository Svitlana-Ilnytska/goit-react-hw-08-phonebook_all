import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactApi } from "./contacts/contactsSlice";
import { items } from "./contacts/contacts-reducer";

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  contactApi.middleware,
];

export const store = configureStore({
  reducer: items,
  // [contactApi.reducerPath]: contactApi.reducer,
  middleware: middleware,
});

setupListeners(store.dispatch);