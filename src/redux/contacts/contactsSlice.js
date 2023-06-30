import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://connections-api.herokuapp.com";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: (token) => ({
        url: "/contacts",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["Contact"],
    }),

    createContact: builder.mutation({
      query: ({ contactName, token }) => ({
        url: "/contacts",
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: contactName,
      }),
      invalidatesTags: ["Contact"],
    }),

    editContact: builder.mutation({
      query: ({id, contactName, token}) => ({
        url: `/contacts/${id}`,
        method: "PATCH",
        headers: {
          Authorization: token,
        },
        body: contactName,
      }),
      invalidatesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: ({id, token}) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useEditContactMutation,
  useDeleteContactMutation,
  } = contactApi;

