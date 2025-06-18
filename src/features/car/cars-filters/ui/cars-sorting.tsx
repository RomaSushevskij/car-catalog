"use client";

import { Select } from "antd";
import { useMemo } from "react";
import { DefaultOptionType } from "rc-select/lib/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useSortParamsFromUrl } from "@/features/car/cars-filters";
import { CARS_API_QUERY_KEYS, CARS_ORDER_VALUES, CARS_SORT_VALUES } from "@/entities/car";

import { SORTING_VALUES } from "../model/types";

const options: DefaultOptionType[] = [
  {
    value: SORTING_VALUES.default,
    label: "Сортировка по умолчанию",
  },
  {
    value: SORTING_VALUES.priceAsc,
    label: "По возрастанию цены",
  },
  {
    value: SORTING_VALUES.priceDesc,
    label: "По убыванию цены",
  },
];

export const CarsSorting = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { sortingParamsFromURL } = useSortParamsFromUrl();

  const value = useMemo(() => {
    const { sort, order } = sortingParamsFromURL;

    if (sort === CARS_SORT_VALUES.price && order === CARS_ORDER_VALUES.asc) {
      return SORTING_VALUES.priceAsc;
    }

    if (sort === CARS_SORT_VALUES.price && order === CARS_ORDER_VALUES.desc) {
      return SORTING_VALUES.priceDesc;
    }

    return SORTING_VALUES.default;
  }, [sortingParamsFromURL]);

  const handleChange = (value: SORTING_VALUES) => {
    if (!searchParams) return;

    const params = new URLSearchParams(searchParams.toString());

    switch (value) {
      case SORTING_VALUES.default:
        params.delete(CARS_API_QUERY_KEYS.sort);
        params.delete(CARS_API_QUERY_KEYS.order);
        params.set(CARS_API_QUERY_KEYS.page, "1");
        break;
      case SORTING_VALUES.priceAsc:
        params.set(CARS_API_QUERY_KEYS.sort, CARS_SORT_VALUES.price);
        params.set(CARS_API_QUERY_KEYS.order, CARS_ORDER_VALUES.asc);
        params.set(CARS_API_QUERY_KEYS.page, "1");
        break;
      case SORTING_VALUES.priceDesc:
        params.set(CARS_API_QUERY_KEYS.sort, CARS_SORT_VALUES.price);
        params.set(CARS_API_QUERY_KEYS.order, CARS_ORDER_VALUES.desc);
        params.set(CARS_API_QUERY_KEYS.page, "1");
        break;
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      value={value ?? options[0].value}
      options={options}
      onChange={handleChange}
      style={{ width: "14rem" }}
    />
  );
};
