import { formatDateTime } from "./formatDateTime.ts";

export const formatDate = (date: Date, finished?: boolean) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  const hours = date.getHours();
  const period = hours >= 12 ? "pm" : "am";
  const adjustedHour = hours % 12 === 0 ? 12 : hours % 12;

  return `${
    finished ? "" : "started"
  } on ${month.toLowerCase()} ${day} ${year} at ${
    finished ? formatDateTime(date) : `${adjustedHour}${period}`
  } CEST`;
};
