import { Signal } from "@preact/signals";
import { LogItem } from "./NewApp.tsx";
import { formatDateTime } from "../helpers/formatDateTime.ts";

interface Props {
  log: Signal<LogItem[]>;
}

export default function SeriesLog(props: Props) {
  return (
    <>
      {props.log.value.filter((_, index) => index < 10).map(
        ({ time, seconds, pace, progress }) => {
          const newDate = new Date(time);
          newDate.setSeconds(newDate.getSeconds() + seconds);

          const start = formatDateTime(new Date(time));
          const finished = formatDateTime(newDate);

          return (
            <div
              key={time}
              class="border-t border-zinc-700 flex text-zinc-500 gap-[10px] h-[30px] leading-[27px]"
            >
              <div class="text-white">{formatDateTime(new Date(time))}</div>
              <div>→</div>
              {start !== finished && <div>{formatDateTime(newDate)}</div>}
              {seconds ? <div>{String(seconds).padStart(2, "0")}”</div> : null}
              {pace ? <div>+{pace}</div> : null}
              <div class="flex-grow flex justify-end gap-[10px]">
                <div>{progress}</div>
                <div>→</div>
                {progress !== progress + pace
                  ? <div class="text-orange-400">{progress + pace}</div>
                  : <div class="opacity-0">{progress}</div>}
              </div>
            </div>
          );
        },
      )}
    </>
  );
}
