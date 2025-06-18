import { formatQueryParamsKeys, rtkApi, TResponseType } from "@/shared/api";

import { TCar } from "../model/types";

export enum CARS_API_QUERY_KEYS {
  page = "page",
  limit = "limit",
  sort = "sort",
  order = "order",
}

export enum CARS_SORT_VALUES {
  price = "price",
}

export enum CARS_ORDER_VALUES {
  asc = "asc",
  desc = "desc",
}

export type TGetCarsQueryParams = {
  [CARS_API_QUERY_KEYS.page]?: number;
  [CARS_API_QUERY_KEYS.limit]?: number;
  [CARS_API_QUERY_KEYS.sort]?: CARS_SORT_VALUES;
  [CARS_API_QUERY_KEYS.order]?: CARS_ORDER_VALUES;
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
