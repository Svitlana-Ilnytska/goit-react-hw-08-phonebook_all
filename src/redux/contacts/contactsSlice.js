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
      query: (contactContent, token) => ({
        url: "/contacts",
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: contactContent,
      }),
      invalidatesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: (contactId, token) => ({
        url: `/contacts/${contactId}`,
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
  useDeleteContactMutation,
} = contactApi;


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://62039f4c4d21c200170b9eea.mockapi.io/";

// export const contactApi = createApi({
//   reducerPath: "contactApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: baseUrl,
//   }),
//     tagTypes: ["Contact"],
//       endpoints: (builder) => ({

//     fetchContacts: builder.query({
//       query: () => "/contacts",
//       providesTags: ["Contact"],
//     }),

//     createContact: builder.mutation({
//       query: (contactContent) => ({
//         url: "/contacts",
//         method: "POST",
//         body: contactContent,
//       }),
//       invalidatesTags: ["Contact"],
//     }),
    
//     deleteContact: builder.mutation({
//       query: (contactId) => ({
//         url: `/contacts/${contactId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Contact"],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useCreateContactMutation,
//   useDeleteContactMutation,
// } = contactApi;