import { CARS_API_QUERY_KEYS, CARS_ORDER_VALUES, CARS_SORT_VALUES } from "@/entities/car";

export type TSortingType = {
  [CARS_API_QUERY_KEYS.sort]?: CARS_SORT_VALUES;
  [CARS_API_QUERY_KEYS.order]?: CARS_ORDER_VALUES;
};
export enum SORTING_VALUES {
  default = "default",
  priceAsc = "priceAsc",
  priceDesc = "priceDesc",
}
