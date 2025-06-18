export const formatQueryParamsKeys = (
  queryParams: Record<string, string | number>,
): Record<string, string | number> => {
  return Object.keys(queryParams).reduce(
    (result, key) => {
      if (queryParams[key] !== "") {
        result[`_${key}`] = queryParams[key];
      }

      return result;
    },
    {} as Record<string, string | number>,
  );
};
