// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { contactApi } from "./contacts/contactsSlice";
// import { authUserApi } from "./auth/authSlice";
// import { token, isLogInAuth } from "./auth/auth-reducer";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import  filter from "./contacts/contacts-reducer";


// const tokenPersistConfig = {
//   key: 'token',
//   storage,
//   whitelist:["token"]
// }

// export const rootReducer = combineReducers({
//   [authUserApi.reducerPath]: authUserApi.reducer,
//   [contactApi.reducerPath]: contactApi.reducer,
//   filter,
//   token,
//   isLogInAuth,
// });

// const persistedReducer = persistReducer(tokenPersistConfig, rootReducer);

// const middleware = (getDefaultMiddleware) => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   contactApi.middleware,
//   authUserApi.middleware,
// ];

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: middleware,
// });

// export const persistor = persistStore(store);

// setupListeners(store.dispatch);


// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// // import { setupListeners } from "@reduxjs/toolkit/query";
// import { contactApi } from "./contacts/contactsSlice";
// // import { authUserApi } from "./auth/authSlice";
// import {authUserApi} from './auth/operations';
// import authReducer from './auth/slice'
// // import { token, isLogInAuth } from "./auth/auth-reducer";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import  filter from "./contacts/contacts-reducer";


// const persistConfig  = {
//   key: 'root',
//   storage,
// }

// export const rootReducer = combineReducers({
//   [authUserApi.reducerPath]: authUserApi.reducer,
//   [contactApi.reducerPath]: contactApi.reducer,
//   auth: authReducer,
//   filter,
//   // token,
//   // isLogInAuth,
// });

// const persistedReducer = persistReducer(persistConfig , rootReducer);

// const middleware = (getDefaultMiddleware) => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   contactApi.middleware,
//   authUserApi.middleware,

// ];

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: middleware,
// });

// export const persistor = persistStore(store);

// // setupListeners(store.dispatch);










import { configureStore } from '@reduxjs/toolkit';
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
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './auth/slice'
import {authUserApi} from './auth/operations';
import { contactApi } from "./contacts/contactsSlice";
import  filter from "./contacts/contacts-reducer";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [authUserApi.reducerPath]: authUserApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authUserApi.middleware,
    contactApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);
export { store, persistor };

setupListeners(store.dispatch);