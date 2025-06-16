"use client";

import { Card, Flex, Space, Typography } from "antd";
import React, { FC, ReactNode, SVGProps } from "react";
import Image from "next/image";

import CarIcon from "public/assets/icons/car-icon.svg";
import MileageIcon from "public/assets/icons/mileage-icon.svg";
import GearboxIcon from "public/assets/icons/gearbox-icon.svg";
import GasStationIcon from "public/assets/icons/gas-station-icon.svg";
import ColorIcon from "public/assets/icons/color-icon.svg";
import CalendarIcon from "public/assets/icons/calendar-icon.svg";
import { formatCurrency } from "@/shared/lib/format-currency";

import { TCar } from "../model/types";

const { Title, Text } = Typography;

export const CarCard = ({
  data,
  buySlot,
  addToFavouriteSlot,
  compareSlot,
}: {
  data: TCar;
  buySlot?: ReactNode;
  addToFavouriteSlot?: ReactNode;
  compareSlot?: ReactNode;
}) => {
  const {
    images,
    markId,
    folderId,
    price,
    modificationId,
    run,
    gearbox,
    engineType,
    color,
    year,
    currency,
  } = data;

  const image = images.image[0];
  const title = `${markId} ${folderId}`;
  const formattedPrice = formatCurrency(price, { currency });

  return (
    <Card
      variant="borderless"
      cover={
        <div
          style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden" }}
        >
          <Image alt="car image" src={image} fill objectFit={"cover"} />
        </div>
      }
    >
      <Title style={{ fontSize: "1.15rem" }} level={1}>
        {title}
      </Title>
      <Space direction={"vertical"} size={4}>
        <Text style={{ fontWeight: "bold", fontSize: "1rem" }}>{formattedPrice}</Text>
        <Item title={modificationId} Icon={CarIcon} />
        <Flex gap={"0.5rem"} wrap>
          <Item title={run} Icon={MileageIcon} />
          <Item title={gearbox} Icon={GearboxIcon} />
        </Flex>
        <Flex gap={"0.5rem"} wrap>
          <Item title={engineType} Icon={GasStationIcon} />
          <Item title={color} Icon={ColorIcon} />
          <Item title={year} Icon={CalendarIcon} />
        </Flex>
      </Space>

      <Flex gap={"1.5rem"} justify={"space-between"} style={{ marginBlockStart: "1rem" }}>
        <Flex gap={"0.5rem"}>
          {addToFavouriteSlot}
          {compareSlot}
        </Flex>
        {buySlot}
      </Flex>
    </Card>
  );
};

const Item = ({ title, Icon }: { title: string | number; Icon: FC<SVGProps<SVGSVGElement>> }) => {
  return (
    <Flex align={"center"} gap={"0.25rem"}>
      <Icon width={"1rem"} height={"1rem"} />
      <Text style={{ fontSize: "0.875rem", whiteSpace: "nowrap" }}>{title}</Text>
    </Flex>
  );
};
