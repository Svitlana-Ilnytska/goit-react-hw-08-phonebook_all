import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://connections-api.herokuapp.com";

export const authUserApi = createApi({
  reducerPath: "authUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
    tagTypes: ["User"],
      endpoints: (builder) => ({
    fetchUser: builder.query({
      query: (token) => ({
        url:  "/users/current",
      headers: {
        Authorization: token,
      },
    }),
    invalidatesTags: ['User'],
}),
    createUser: builder.mutation({
      query: (userNewData) => ({
        url: "/users/signup",
        method: "POST",
        body: userNewData,
      }),
      invalidatesTags: ["User"],
    }),
    logInUser: builder.mutation({
        query: (userData) => ({
          url: "/users/login",
          method: "POST",
          body: userData,
        }),
        invalidatesTags: ["User"],
      }),
    logOutUser: builder.mutation({
      query: (token) => ({
        url: '/users/logout',
        method: "POST",
        headers: {
            Authorization: token
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useFetchUserQuery,
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = authUserApi;