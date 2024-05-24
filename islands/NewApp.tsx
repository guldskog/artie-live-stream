import Progress from "../islands/NewProgress.tsx";
import Log from "../islands/NewLog.tsx";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { countdownFrom24Hours } from "../helpers/countdownFrom24hours.ts";
import { currentWR } from "../helpers/constants.ts";
import Victory from "./Victory.tsx";
import { getDifferenceInSeconds } from "../helpers/getDifferencesInSeconds.ts";

export interface LogItem {
  time: number;
  seconds: number;
  pace: number;
  progress: number;
}

export interface StoredLogItem {
  a: number;
  b: number;
  c: number;
  d: number;
}

export default function App() {
  const startTime = useSignal<Date | undefined>(undefined);
  const countdown = useSignal<string | undefined>(undefined);
  const progress = useSignal<number>(0);
  const pace = useSignal<number>(10);
  const active = useSignal<boolean>(false);

  const log = useSignal<LogItem[]>(
    [],
  );

  const updateCountdown = (currentTime: Date) =>
    countdown.value = countdownFrom24Hours(currentTime);

  useEffect(() => {
    log.value = JSON.parse(
      atob(window.localStorage.getItem("log") || "") || "[]",
    ).map((
      item: StoredLogItem,
    ) => ({ time: item.a, seconds: item.b, pace: item.c, progress: item.d }));

    if (log.value[0]) {
      progress.value = log.value[0].progress + log.value[0].pace;
      pace.value = log.value[0].pace ? log.value[0].pace : 10;
      active.value = log.value[0].seconds === 0;
      startTime.value = new Date(log.value[log.value.length - 1].time);

      updateCountdown(new Date(log.value[log.value.length - 1].time));
      setInterval(
        () => updateCountdown(new Date(log.value[log.value.length - 1].time)),
        1000,
      );
    }
  }, []);

  useEffect(() => {
    let debounce = false;

    const updateLog = (addNew: boolean) => {
      if (addNew) {
        log.value = [
          {
            time: new Date().getTime(),
            seconds: 0,
            pace: 0,
            progress: progress.value,
          },
          ...log.value,
        ];
      } else {
        const [firstItem, ...rest] = log.value;
        log.value = [{
          ...firstItem,
          seconds: getDifferenceInSeconds(new Date(firstItem.time), new Date()),
          pace: pace.value,
        }, ...rest];
      }

      window.localStorage.setItem(
        "log",
        btoa(JSON.stringify(log.value.map((item) => ({
          a: item.time,
          b: item.seconds,
          c: item.pace,
          d: item.progress,
        })))),
      );
    };

    const onKeyEvent = (event: KeyboardEvent) => {
      event.preventDefault();

      const space = event.key === " ";

      if (space) {
        if (debounce) {
          return;
        } else {
          debounce = true;
          setTimeout(() => {
            debounce = false;
          }, 500);
        }
      }

      if (space && !countdown.value) {
        const currentTime = new Date();
        startTime.value = currentTime;
        updateCountdown(currentTime);
        setInterval(() => updateCountdown(currentTime), 1000);
      }

      if (space && active.value) {
        progress.value = progress.value + pace.value;
        updateLog(false);
        active.value = false;
      } else if (space && !active.value) {
        updateLog(true);
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
      <Log pace={pace} log={log} progress={progress} countdown={countdown} />
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
