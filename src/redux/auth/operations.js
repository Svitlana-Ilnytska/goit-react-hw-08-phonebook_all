import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const apiSlice = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://connections-api.herokuapp.com",
//   }),
//   endpoints: (builder) => ({
//     register: builder.mutation({
//       query: (credentials) => ({
//         url: "/users/signup",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: "/users/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: "/users/logout",
//         method: "POST",
//       }),
//     }),
//     refreshUser: builder.query({
//       query: () => "/users/current",
//       headers: (headers, { getState }) => {
//         const state = getState();
//         const persistedToken = state.auth.token;

//         if (persistedToken) {
//           headers.set("Authorization", `Bearer ${persistedToken}`);
//         }

//         return headers;
//       },
//     }),
//   }),
// });

// export const {
//   useRegisterMutation,
//   useLoginMutation,
//   useLogoutMutation,
//   useRefreshUserQuery,
// } = apiSlice;

export const authUserApi = createApi({
  reducerPath: "authUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
        // console.log(getState())
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    logInUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
    fetchUser: builder.query({
      query: () => "/users/current",
      // headers: (headers, { getState }) => {
      //   const state = getState();
      //   const persistedToken = state.auth.token;

      //   if (persistedToken) {
      //     headers.set("Authorization", `Bearer ${persistedToken}`);
      //   }

      //   return headers;
      // },
    }),
  }),
});

export const {
    useFetchUserQuery,
    useCreateUserMutation,
    useLogInUserMutation,
    useLogOutUserMutation,
} = authUserApi;
