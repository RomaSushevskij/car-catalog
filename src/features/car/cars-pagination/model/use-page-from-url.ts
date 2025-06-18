import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { CARS_API_QUERY_KEYS } from "@/entities/car";

export const usePageFromUrl = () => {
  const searchParams = useSearchParams();

  const pageFromURL = useMemo(() => {
    const pageQueryParam = searchParams?.get(CARS_API_QUERY_KEYS.page);
    const parsedPage = parseInt(pageQueryParam ?? "");

    return Number.isNaN(parsedPage) ? 1 : parsedPage;
  }, [searchParams]);

  return { pageFromURL };
};
