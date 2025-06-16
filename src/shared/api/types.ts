type TPaginationMeta = {
  count: number;
  firstPageLink: string;
  from: number;
  lastPage: number;
  lastPageLink: string;
  limit: number;
  nextPageLink: string;
  page: number;
  to: number;
  total: number;
  totalNoFilters: number;
};

export type TResponseType<T> = {
  data: T[];
  meta: TPaginationMeta;
};
