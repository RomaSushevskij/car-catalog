"use client";

import { Provider } from "react-redux";
import { ReactNode, useRef } from "react";

import { AppStore, makeStore } from "../config/store";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
