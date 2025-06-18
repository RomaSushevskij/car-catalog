"use client";

import { CarCard, CARS_API_QUERY_KEYS, useCarsQuery } from "@/entities/car";
import { BuyCarBtn } from "@/features/car/buy-car";
import { AddCarToFavoritesBtn } from "@/features/car/add-car-to-favorites";
import { CompareCarBtn } from "@/features/car/compare-car";
import { useCarsPagination, usePageFromUrl } from "@/features/car/cars-pagination";

import { PageLayout } from "./page-layout";
import { CarsFilters, useSortParamsFromUrl } from "@/features/car/cars-filters";

export const CarCatalogPage = () => {
  const { pageFromURL } = usePageFromUrl();
  const { sortingParamsFromURL } = useSortParamsFromUrl();

  const { data, isLoading, isFetching } = useCarsQuery({
    [CARS_API_QUERY_KEYS.page]: pageFromURL,
    limit: 12,
    ...sortingParamsFromURL,
  });

  const { pagination } = useCarsPagination({ total: data?.meta.total ?? 0 });

  const carCards = data?.data.map((car) => (
    <CarCard
      key={car.uniqueId}
      data={car}
      buySlot={<BuyCarBtn />}
      addToFavouriteSlot={<AddCarToFavoritesBtn />}
      compareSlot={<CompareCarBtn />}
    />
  ));

  return (
    <PageLayout
      loading={isLoading || isFetching}
      filters={<CarsFilters />}
      carCards={carCards}
      pagination={pagination}
    />
  );
};
