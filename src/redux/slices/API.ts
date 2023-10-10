import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type GetShopResponse = {
  data: Shop[]
}

type GetProductsResponse = {
  data: Product[]
}

type Product = {
  shops: string
  sku: string,
  group: string,
  category: string,
  subcategory: string,
  uom: string,
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

type Params = {
  store: string,
  group: string,
  category: string,
  subcategory: string,
  sku: string,
}

// Define a service using a base URL and expected endpoints
export const API = createApi({
  reducerPath: 'shops',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost/api/' }),
  endpoints: (builder) => ({
    getShops: builder.query<GetShopResponse, void>({
      query: () => 'shops/',
    }),
    getProducts: builder.query<GetProductsResponse, Params>({
      query: (params) => `categories/?store=${params.store ? params.store : ''}&group=${params.group}&category=${params.category}&subcategory=${params.subcategory}&sku=${params.sku}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShopsQuery, useGetProductsQuery } = API