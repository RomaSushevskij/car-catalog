import { CarCatalogPage } from "@/page-components/car-catalog-page";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <CarCatalogPage />
    </Suspense>
  );
}
