export const formatNumberWithCommas = (number: number) => {
  const integerPart = Math.floor(number);

  return integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
