import { CarCard } from "./car-card";
import { TCar } from "../model/types";

const skeletonData = new Array(12)
  .fill(0)
  .map((item, index) => `product-card-skeleton-${item + index}`);

export const CarCardsSkeletons = () => {
  return skeletonData.map((item) => <CarCard key={item} data={{} as TCar} loading />);
};
