import ErrorLog from "./ErrorLog.tsx";
import SeriesLog from "./SeriesLog.tsx";
import { LogItem } from "./NewApp.tsx";
import { Signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

interface Props {
  pace: Signal<number>;
  log: Signal<LogItem[]>;
}

export default function Log(props: Props) {
  useEffect(() => {
    const onKeyEvent = (event: KeyboardEvent) => {
      event.preventDefault();

      if (event.key === "ArrowLeft") {
        props.pace.value = Math.max(props.pace.value - 1, 1);
      }

      if (event.key === "ArrowRight") {
        props.pace.value = Math.min(props.pace.value + 1, 10);
      }
    };

    document.addEventListener("keydown", onKeyEvent);

    return () => {
      document.removeEventListener("keydown", onKeyEvent);
    };
  }, []);

  return (
    <div class="flex-grow flex flex-col gap-[50px] pl-[50px] py-[55px] mr-[50px] justify-end">
      <div class="border border-zinc-700 p-6 flex flex-col gap-[18px]">
        <div class="flex justify-between">
          <div>pace selection</div>
          <div class="lowercase text-slate-400 text-[16px]">
            use ← and → for quick selection
          </div>
        </div>
        <div class="flex gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
            return (
              <div
                key={number}
                class={`w-[34px] h-[34px] ${
                  number === props.pace.value
                    ? "bg-[#FB923C] border-yellow-300"
                    : "bg-zinc-700 border-zinc-600"
                } border  rounded-full grid place-items-center cursor-pointer`}
              >
                <span>{number}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div class="flex-grow flex">
        <div class="px-6 flex-1">
          <div class="flex justify-between">
            <div>
              latest series
            </div>
            <div class="text-slate-500 lowercase">
              press the <span class="text-orange-400">f</span>{" "}
              key to flag an error
            </div>
          </div>
          <div class="pt-[10px]">
            <SeriesLog log={props.log} />
          </div>
        </div>
        <div class="px-6 flex-1">
          <div>errors</div>
          <div class="pt-[10px]">
            <ErrorLog />
          </div>
        </div>
      </div>
      <div class="border-t border-zinc-700 pt-[50px] flex justify-end gap-6">
        <div
          onClick={() => {
            const clearAll = confirm(
              "You sure you want to clear everything?",
            );

            if (clearAll) {
              const superSure = confirm(
                "Are you super sure? Everything will be lost!!! 😱‼️⛔️⚠️",
              );

              if (superSure) {
                window.localStorage.clear();
                window.location.reload();
              }
            }
          }}
          class="bg-zinc-600 border border-zinc-500 h-[45px] px-5 cursor-pointer pt-[13px] hover:border-orange-300 hover:bg-orange-400 hover:text-zinc-900"
        >
          clear app
        </div>
        <div class="bg-zinc-600 border border-zinc-500 h-[45px] px-5 cursor-pointer pt-[13px] hover:border-orange-300 hover:bg-orange-400 hover:text-zinc-900">
          export full log
        </div>
      </div>
    </div>
  );
}
