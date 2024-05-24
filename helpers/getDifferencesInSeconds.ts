export const getDifferenceInSeconds = (date1: Date, date2: Date) => {
  const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
  const diffInSeconds = diffInMilliseconds / 1000;
  return Math.ceil(diffInSeconds);
};
