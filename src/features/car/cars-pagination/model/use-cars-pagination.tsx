import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination, PaginationProps } from "antd";

import { CARS_API_QUERY_KEYS } from "@/entities/car";

import { usePageFromUrl } from "./use-page-from-url";

export const useCarsPagination = ({ total }: { total: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const { pageFromURL } = usePageFromUrl();

  const onPageChange: PaginationProps["onChange"] = (page) => {
    if (!searchParams) return;

    const currentPage = searchParams?.get(CARS_API_QUERY_KEYS.page);

    if (String(page) === currentPage) return;

    const params = new URLSearchParams(searchParams);
    params.set(CARS_API_QUERY_KEYS.page, String(page));
    push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (!searchParams) return;

    const hasPage = searchParams.has(CARS_API_QUERY_KEYS.page);

    if (!hasPage) {
      const params = new URLSearchParams(searchParams);
      params.set(CARS_API_QUERY_KEYS.page, "1");
      replace(`${pathname}?${params.toString()}`);
    }
  }, [searchParams, pathname, replace]);

  const pagination = (
    <Pagination
      current={pageFromURL}
      onChange={onPageChange}
      defaultCurrent={1}
      pageSize={12}
      total={total}
      showSizeChanger={false}
    />
  );

  return { pagination };
};
