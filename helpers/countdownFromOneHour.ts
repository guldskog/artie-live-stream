import { formatNumberTime } from "./formatNumberTime.ts";

export const countdownFromOneHour = (startTime: Date): string => {
  const currentTime = new Date();
  const elapsedTime = Math.floor(
    (currentTime.getTime() - startTime.getTime()) / 1000,
  );
  const remainingTimeInSeconds = 3600 - elapsedTime; // 24 hours in seconds

  if (remainingTimeInSeconds <= 0) {
    return "00:00:00";
  }

  return formatNumberTime(remainingTimeInSeconds);
};
