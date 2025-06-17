import { PropsWithChildren } from "react";

export const CarsGrid = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(19.375rem, 1fr))",
        gap: "1rem",
        flexGrow: 1,
      }}
    >
      {children}
    </div>
  );
};
