import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { rtkApi } from "@/shared/api/rtk-api";

import { type StateSchema } from "./state-schema";

export const makeStore = () => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    [rtkApi.reducerPath]: rtkApi.reducer,
  };
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(rtkApi.middleware);
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
