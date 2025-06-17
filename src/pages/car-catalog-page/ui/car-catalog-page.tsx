"use client";

import { CarCard, useCarsQuery } from "@/entities/car";
import { BuyCarBtn } from "@/features/car/buy-car";
import { AddCarToFavoritesBtn } from "@/features/car/add-car-to-favorites";
import { CompareCarBtn } from "@/features/car/compare-car";
import { useCarsPagination, usePageFromUrl } from "@/features/car/cars-pagination";

import { PageLayout } from "./page-layout";

export const CarCatalogPage = () => {
  const { pageFromURL } = usePageFromUrl();

  const { data, isLoading } = useCarsQuery({ page: pageFromURL, limit: 12 });

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
      loading={isLoading}
      filters={<div>Filters</div>}
      carCards={carCards}
      pagination={pagination}
    />
  );
};
