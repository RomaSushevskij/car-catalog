import { Card } from "antd";
import { CarsSorting } from "@/features/car/cars-filters/ui/cars-sorting";

export const CarsFilters = () => {
  return (
    <Card variant={"borderless"} styles={{ body: { padding: "0.75rem" } }}>
      <CarsSorting />
    </Card>
  );
};
