"use client";

import { CarCard, CarCardsSkeletons, useCarsQuery } from "@/entities/car";
import { BuyCarBtn } from "@/features/car/buy-car";
import { AddCarToFavoritesBtn } from "@/features/car/add-car-to-favorites";
import { CompareCarBtn } from "@/features/car/compare-car";

import { CarsGrid } from "./cars-grid";

export const CarCatalogPage = () => {
  const { data, isLoading } = useCarsQuery({ page: 1, limit: 12 });

  const renderCars = data?.data.map((car) => (
    <CarCard
      key={car.uniqueId}
      data={car}
      buySlot={<BuyCarBtn />}
      addToFavouriteSlot={<AddCarToFavoritesBtn />}
      compareSlot={<CompareCarBtn />}
    />
  ));

  if (isLoading) {
    return (
      <CarsGrid>
        <CarCardsSkeletons />
      </CarsGrid>
    );
  }

  return <CarsGrid>{renderCars}</CarsGrid>;
};
