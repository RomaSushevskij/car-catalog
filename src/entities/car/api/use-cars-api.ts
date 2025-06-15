import { rtkApi } from "@/shared/api/rtk-api";

import { TCar } from "../model/types";

const carsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    cars: build.query<TCar[], void>({
      query: () => ({
        url: "/cars",
      }),
    }),
  }),
});

export const { useCarsQuery, util: carsUtil } = carsApi;
