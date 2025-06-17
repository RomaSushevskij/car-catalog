import { formatQueryParamsKeys, rtkApi, TResponseType } from "@/shared/api";

import { TCar } from "../model/types";

type TGetCarsQueryParams = {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
};

const carsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    cars: build.query<TResponseType<TCar>, TGetCarsQueryParams>({
      query: (queryParams) => ({
        url: "/cars",
        params: {
          ...formatQueryParamsKeys(queryParams),
        },
      }),
    }),
  }),
});

export const { useCarsQuery, util: carsUtil } = carsApi;
