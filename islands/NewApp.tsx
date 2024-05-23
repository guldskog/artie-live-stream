import Progress from "../islands/NewProgress.tsx";
import Log from "../islands/NewLog.tsx";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { countdownFrom24Hours } from "../helpers/countdownFrom24hours.ts";
import { currentWR } from "../helpers/constants.ts";
import { formatNumberWithCommas } from "../helpers/formatNumberWithCommas.ts";
import Victory from "./Victory.tsx";

export default function App() {
  const startTime = useSignal<Date | undefined>(undefined);
  const countdown = useSignal<string | undefined>(undefined);
  const progress = useSignal<number>(currentWR - 80);
  const pace = useSignal<number>(10);
  const active = useSignal<boolean>(false);

  const updateCountdown = (currentTime: Date) =>
    countdown.value = countdownFrom24Hours(currentTime);

  useEffect(() => {
    const onKeyEvent = (event: KeyboardEvent) => {
      event.preventDefault();
      const space = event.key === " ";

      if (space && !startTime.value) {
        const currentTime = new Date();
        startTime.value = currentTime;
        updateCountdown(currentTime);
        setInterval(() => updateCountdown(currentTime), 1000);
      }

      if (space && active.value) {
        progress.value = progress.value + pace.value;
        active.value = false;
      } else if (space && !active.value) {
        active.value = true;
      }
    };

    document.addEventListener("keydown", onKeyEvent);

    return () => {
      document.removeEventListener("keydown", onKeyEvent);
    };
  }, []);

  return (
    <div class="flex justify-end">
      <Log />
      {currentWR - progress.value < 0
        ? (
          <Victory
            progress={progress}
            startTime={startTime}
            countdown={countdown}
          />
        )
        : (
          <Progress
            progress={progress}
            startTime={startTime}
            countdown={countdown}
          />
        )}
    </div>
  );
}
