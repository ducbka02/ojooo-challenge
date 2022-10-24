import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const questionApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: builder => ({
    getQuestions: builder.query<Question[], void>({
      query: () => 'api/questions',
    }),
  }),
})

export const { useGetQuestionsQuery } = questionApi
