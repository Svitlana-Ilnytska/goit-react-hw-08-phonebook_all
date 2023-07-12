import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://connections-api.herokuapp.com";

export const authUserApi = createApi({
  reducerPath: "authUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
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
      // headers: {
      //   Authorization: '',
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
