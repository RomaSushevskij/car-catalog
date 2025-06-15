import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosInstance } from "./axios-instance";

const axiosBaseQuery = ({ baseUrl }: { baseUrl: string } = { baseUrl: "" }) => {
  const baseQueryFn: BaseQueryFn<AxiosRequestConfig, unknown, unknown> = async (config) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + config.url,
        ...config,
      });

      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };

  return baseQueryFn;
};

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Cars"],
  endpoints: () => ({}),
});
