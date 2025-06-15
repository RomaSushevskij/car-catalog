import { rtkApi } from "@/shared/api/rtk-api";

export type StateSchema = {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
};
