import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination, PaginationProps } from "antd";

import { usePageFromUrl } from "./use-page-from-url";

export const useCarsPagination = ({ total }: { total: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { pageFromURL } = usePageFromUrl();

  const onPageChange: PaginationProps["onChange"] = (page) => {
    if (!searchParams) return;

    const currentPage = searchParams?.get("page");

    if (String(page) === currentPage) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (!searchParams) return;

    const hasPage = searchParams.has("page");

    if (!hasPage) {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
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
