import { baseApi } from "./baseApi";

export const flightsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFlightsData: build.query({
      query: () => ({
        url: `/flightsData/zoo-flight-search.json`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetFlightsDataQuery } = flightsApi;
