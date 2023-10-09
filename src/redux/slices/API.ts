import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type GetShopResponse = {
  data: Shop[]
}

type Shop = {
  store: string;
  city: string;
  division: string;
  type_format: number;
  loc: number;
  size: number;
  is_active: boolean;
};

// Define a service using a base URL and expected endpoints
export const API = createApi({
  reducerPath: 'shops',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost/api/' }),
  endpoints: (builder) => ({
    getShops: builder.query<GetShopResponse, void>({
      query: () => 'shops/',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShopsQuery } = API