import { Signal } from "@preact/signals";
import { useEffect, useRef, useState } from "preact/hooks";

export default function Progress(
  props: { log: Signal<{ time: number; status: "On" | "Off"; rep: number }[]> },
) {
  const [rep, setRep] = useState(0);

  const repRef = useRef(rep);

  useEffect(() => {
    const storedRep = Number(window.localStorage.getItem("rep"));
    setRep(storedRep);
    repRef.current = storedRep;
  }, []);

  const WR = 8000;
  const goal = 12000;
  const max = 13334;

  useEffect(() => {
    let debounce = false;

    const allLog = JSON.parse(
      atob(window.localStorage.getItem("WR") || "") || "[]",
    ).map(
      (
        item: { a: number; b: string; c: string },
      ) => ({ time: item.a, status: item.b, rep: item.c }),
    );

    let onTheBar = allLog[0]?.status === "On";

    const onKeyEvent = (event: KeyboardEvent) => {
      event.preventDefault();
      const space = event.key === " ";

      if (!space) {
        return;
      }

      if (debounce) {
        return;
      } else {
        debounce = true;
        setTimeout(() => {
          debounce = false;
        }, 2000);
      }

      if (onTheBar) {
        setRep((currentRep) => {
          const newRep = currentRep + 10;
          repRef.current = newRep;

          props.log.value = [
            { time: new Date().getTime(), status: "Off", rep: newRep },
            ...props.log.value,
          ];

          return newRep;
        });
        onTheBar = false;
      } else {
        props.log.value = [
          { time: new Date().getTime(), status: "On", rep: repRef.current },
          ...props.log.value,
        ];
        onTheBar = true;
      }

      const minifiedLog = props.log.value.map((item) => ({
        a: item.time,
        b: item.status,
        c: item.rep,
      }));
      window.localStorage.setItem("rep", repRef.current.toString());
      window.localStorage.setItem("WR", btoa(JSON.stringify(minifiedLog)));
    };

    document.addEventListener("keydown", onKeyEvent);

    return () => {
      document.removeEventListener("keydown", onKeyEvent);
    };
  }, []);

  return (
    <div class="h-20 fixed bottom-0 w-full bg-blue-100">
      <div class="h-10 w-full relative bg-blue-200">
        <div
          style={{ width: `${rep / max * 100}%` }}
          class="absolute h-full bg-red-400 flex items-center"
        >
        </div>
        <div
          style={{ left: `${WR / max * 100}%` }}
          class="absolute -translate-x-1/2 top-full p-2 text-nowrap"
        >
          <div class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full bg-red-500 w-2 h-full">
          </div>
          WR - {WR}
        </div>
        <div
          style={{ left: `${goal / max * 100}%` }}
          class="absolute -translate-x-1/2 top-full p-2 text-nowrap"
        >
          <div class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full bg-green-500 w-2 h-full">
          </div>
          Goal - {goal}
        </div>
        <div
          style={{ left: `${rep / max * 100}%` }}
          class="absolute flex left-0 h-full items-center px-2 text-xl text-nowrap"
        >
          {rep}
        </div>
      </div>
    </div>
  );
}
