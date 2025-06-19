import { ReactNode } from "react";
import { Flex } from "antd";

import { CarCardsSkeletons } from "@/entities/car";

import { CarsGrid } from "./cars-grid";

export const PageLayout = ({
  filters,
  carCards,
  loading,
  pagination,
}: {
  filters: ReactNode;
  carCards: ReactNode;
  loading?: boolean;
  pagination: ReactNode;
}) => {
  return (
    <Flex
      style={{ flexDirection: "column", maxWidth: "120rem", marginInline: "auto" }}
      gap={"1rem"}
    >
      {filters}
      <CarsGrid>{loading ? <CarCardsSkeletons /> : carCards}</CarsGrid>
      <Flex justify={"center"}>{pagination}</Flex>
    </Flex>
  );
};
