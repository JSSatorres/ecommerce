import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { usersTypes,userAndTotalTypes } from "../../types"

/* interface user {
  user:usersTypes
} */

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/api'}),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<userAndTotalTypes,void>({
      query: () => `/users`,
      // Pick out data and prevent nested properties in a hook or selector
      /* transformResponse: (response: { data: Post }, meta, arg) => response.data, */
      /* providesTags: (result, error, id) => [{ type: 'Users', id }], */
    }),
    getUserById: builder.query< usersTypes,string>({
      query: (id) => `/users/${id}`,
    }),

    createUser: builder.mutation< usersTypes,string>({
      query: (id, ...body ) => ({
        url: `/users/${id}`,
        method: 'POST',
        body: body,
      }),
    }),

  }),
})

export const { useGetUsersQuery,useGetUserByIdQuery, useCreateUserMutation} = usersApi