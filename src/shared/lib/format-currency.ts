export const formatCurrency = (
  amount: number,
  options?: {
    currency?: string;
    locale?: string;
  },
): string => {
  const { currency = "RUB", locale = "ru-RU" } = options ?? {};
  const normalizedCurrency = currency === "RUR" ? "RUB" : currency;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: normalizedCurrency,
    maximumFractionDigits: 0,
  }).format(amount);
};
