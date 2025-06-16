import { rtkApi, TResponseType } from "@/shared/api";

import { TCar } from "../model/types";

const carsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    cars: build.query<TResponseType<TCar>, void>({
      query: () => ({
        url: "/cars",
      }),
    }),
  }),
});

export const { useCarsQuery, util: carsUtil } = carsApi;
