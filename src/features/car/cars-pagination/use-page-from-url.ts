import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const usePageFromUrl = () => {
  const searchParams = useSearchParams();

  const pageFromURL = useMemo(() => {
    const pageQueryParam = searchParams?.get("page");
    const parsedPage = parseInt(pageQueryParam ?? "");

    return Number.isNaN(parsedPage) ? 1 : parsedPage;
  }, [searchParams]);

  return { pageFromURL };
};
