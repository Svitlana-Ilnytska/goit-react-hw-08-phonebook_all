import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactApi } from "./contacts/contactsSlice";
import { authUserApi } from "./auth/authSlice";
import { token, isLogInAuth } from "./auth/auth-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  filter from "./contacts/contacts-reducer";


const tokenPersistConfig = {
  key: 'token',
  storage,
  whitelist:["token"]
}

export const rootReducer = combineReducers({
  [authUserApi.reducerPath]: authUserApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  filter,
  token,
  isLogInAuth,
});

const persistedReducer = persistReducer(tokenPersistConfig, rootReducer);

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
  authUserApi.middleware,
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);