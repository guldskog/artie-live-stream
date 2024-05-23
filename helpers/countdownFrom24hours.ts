import { formatTime } from "./formatTime.ts";

export const countdownFrom24Hours = (startTime: Date): string => {
  const currentTime = new Date();
  const elapsedTime = Math.floor(
    (currentTime.getTime() - startTime.getTime()) / 1000,
  );
  const remainingTimeInSeconds = 86400 - elapsedTime; // 24 hours in seconds

  if (remainingTimeInSeconds <= 0) {
    return "00:00:00";
  }

  return formatTime(remainingTimeInSeconds);
};
