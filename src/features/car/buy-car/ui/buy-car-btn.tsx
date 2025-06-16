import { Button } from "antd";
import React from "react";

export const BuyCarBtn = () => {
  const handleClick = () => {
    console.log("buy car");
  };

  return (
    <Button size={"large"} type={"primary"} onClick={handleClick}>
      Купить
    </Button>
  );
};
