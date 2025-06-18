import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

import { CARS_API_QUERY_KEYS, CARS_ORDER_VALUES, CARS_SORT_VALUES } from "@/entities/car";

import { TSortingType } from "./types";

export const useSortParamsFromUrl = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const sortingParamsFromURL = useMemo(() => {
    const result = {} as TSortingType;
    const sort = searchParams?.get(CARS_API_QUERY_KEYS.sort);
    const order = searchParams?.get(CARS_API_QUERY_KEYS.order);

    const isValidSort = sort === CARS_SORT_VALUES.price;
    const isValidOrder = order === CARS_ORDER_VALUES.asc || order === CARS_ORDER_VALUES.desc;

    if (isValidSort && isValidOrder) {
      result[CARS_API_QUERY_KEYS.sort] = sort;
      result[CARS_API_QUERY_KEYS.order] = order;
    }

    return result;
  }, [searchParams]);

  useEffect(() => {
    if (!searchParams) return;

    const sort = searchParams.get(CARS_API_QUERY_KEYS.sort);
    const order = searchParams.get(CARS_API_QUERY_KEYS.order);

    const invalidSort = sort && sort !== CARS_SORT_VALUES.price;
    const invalidOrder =
      order && order !== CARS_ORDER_VALUES.asc && order !== CARS_ORDER_VALUES.desc;
    const incompletePair = (sort && !order) || (!sort && order);

    if (invalidSort || invalidOrder || incompletePair) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(CARS_API_QUERY_KEYS.sort);
      params.delete(CARS_API_QUERY_KEYS.order);
      replace(`${pathname}?${params.toString()}`);
    }
  }, [searchParams, pathname, replace]);

  return { sortingParamsFromURL };
};
