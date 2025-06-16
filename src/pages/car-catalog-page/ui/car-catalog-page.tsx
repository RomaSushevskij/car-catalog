"use client";

import { useCarsQuery } from "@/entities/car/api/use-cars-api";
import { CarCard } from "@/entities/car";
import { BuyCarBtn } from "@/features/car/buy-car";
import { AddCarToFavoritesBtn } from "@/features/car/add-car-to-favorites";
import { CompareCarBtn } from "@/features/car/compare-car";

export const CarCatalogPage = () => {
  const { data } = useCarsQuery();
  console.log(data);

  const car = data?.data[0];

  if (!car) {
    return null;
  }
  return (
    <div>
      <CarCard
        data={car}
        buySlot={<BuyCarBtn />}
        addToFavouriteSlot={<AddCarToFavoritesBtn />}
        compareSlot={<CompareCarBtn />}
      />
    </div>
  );
};
