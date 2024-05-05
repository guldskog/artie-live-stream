import { Signal } from "@preact/signals";
import { useEffect, useRef, useState } from "preact/hooks";

export default function Progress(
  props: { log: Signal<{ time: number; status: "On" | "Off"; rep: number }[]> },
) {
  const [rep, setRep] = useState(0);
  const [currentPace, setCurrentPace] = useState(10);
  const [minutesLeft, setMinutesLeft] = useState(24 * 60);

  const repRef = useRef(rep);
  const currentPaceRef = useRef(currentPace);

  useEffect(() => {
    const storedRep = Number(window.localStorage.getItem("rep"));
    setRep(storedRep);
    repRef.current = storedRep;
  }, []);

  const WR = 8940;
  const goal = 12000;
  const max = 17000;
  const currentPaceEstimate = (minutesLeft * currentPace) + rep;

  useEffect(() => {
    const diffMilliseconds = Number(window.localStorage.getItem("end")) -
      new Date().getTime();

    if (diffMilliseconds > 0) {
      setMinutesLeft(Math.ceil(diffMilliseconds / (1000 * 60)));
    }
  }, [currentPace]);

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

      if (/^[0-9]$/i.test(event.key)) {
        setCurrentPace(() => {
          const newPace = Number(event.key) || 10;
          currentPaceRef.current = newPace;
          return newPace;
        });
      }

      if (!space) {
        return;
      }

      if (debounce) {
        return;
      } else {
        debounce = true;
        setTimeout(() => {
          debounce = false;
        }, 1000);
      }

      if (onTheBar) {
        setRep((currentRep) => {
          const newRep = currentRep + currentPaceRef.current;
          repRef.current = newRep;

          props.log.value = [
            { time: new Date().getTime(), status: "Off", rep: newRep },
            ...props.log.value,
          ];

          return newRep;
        });
        onTheBar = false;
      } else {
        if (!props.log.value.length) {
          window.localStorage.setItem("start", new Date().getTime().toString());
          window.localStorage.setItem(
            "end",
            (new Date().getTime() + (24 * 60 * 60 * 1000)).toString(),
          );
        }

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
    <div class="fixed bottom-0 w-full">
      <div class="bg-white p-2">
        <table>
          <tr>
            <th>Pace</th>
            <th>Estimate</th>
          </tr>
          <tr>
            <td>10 {currentPace === 10 && "🔥"}</td>
            <td>{(minutesLeft * 10) + rep}</td>
          </tr>
          <tr>
            <td>9 {currentPace === 9 && "🔥"}</td>
            <td>{(minutesLeft * 9) + rep}</td>
          </tr>
          <tr>
            <td>8 {currentPace === 8 && "🔥"}</td>
            <td>{(minutesLeft * 8) + rep}</td>
          </tr>
          <tr>
            <td>7 {currentPace === 7 && "🔥"}</td>
            <td>{(minutesLeft * 7) + rep}</td>
          </tr>
          <tr>
            <td>6 {currentPace === 6 && "🔥"}</td>
            <td>{(minutesLeft * 6) + rep}</td>
          </tr>
          <tr>
            <td>5 {currentPace === 5 && "🔥"}</td>
            <td>{(minutesLeft * 5) + rep}</td>
          </tr>
          <tr>
            <td>4 {currentPace === 4 && "🔥"}</td>
            <td>{(minutesLeft * 4) + rep}</td>
          </tr>
          <tr>
            <td>3 {currentPace === 3 && "🔥"}</td>
            <td>{(minutesLeft * 3) + rep}</td>
          </tr>
          <tr>
            <td>2 {currentPace === 2 && "🔥"}</td>
            <td>{(minutesLeft * 2) + rep}</td>
          </tr>
          <tr>
            <td>1 {currentPace === 1 && "🔥"}</td>
            <td>{(minutesLeft * 1) + rep}</td>
          </tr>
        </table>
      </div>
      <div class="h-[120px] w-full bg-blue-100">
        <div class="h-10 w-full relative bg-blue-200 top-10">
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
            style={{ left: `${currentPaceEstimate / max * 100}%` }}
            class="absolute -translate-x-1/2 bottom-full p-2 text-nowrap"
          >
            Current Pace Estimate - {currentPaceEstimate}
            <div class="absolute left-1/2 -translate-x-1/2 top-[200%] -translate-y-full bg-orange-500 w-2 h-full">
            </div>
          </div>
          <div
            style={{ left: `${rep / max * 100}%` }}
            class="absolute flex left-0 h-full items-center px-2 text-xl text-nowrap"
          >
            {rep}
          </div>
        </div>
      </div>
    </div>
  );
}
