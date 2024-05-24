import { Signal } from "@preact/signals";
import { useEffect, useRef, useState } from "preact/hooks";
import { formatDate } from "../helpers/formatDate.tsx";
import { formatNumberWithCommas } from "../helpers/formatNumberWithCommas.ts";

interface Props {
  progress: Signal<number>;
  startTime: Signal<Date | undefined>;
  countdown: Signal<string | undefined>;
}

export default function Victory(props: Props) {
  const [wrBrokenAt, setWrBrokenAt] = useState(formatDate(new Date(), true));

  useEffect(() => {
    if (!window.localStorage.getItem("record-time")) {
      window.localStorage.setItem("record-time", wrBrokenAt);
    } else {
      setWrBrokenAt(window.localStorage.getItem("record-time") || "");
    }

    // deno-lint-ignore no-explicit-any
    const myConfetti = (window as any).confetti.create(
      document.getElementById("confetti"),
      {
        resize: true,
        useWorker: true,
      },
    );
    const runConfetti = () => {
      myConfetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    };

    runConfetti();
    const interval = setInterval(() => {
      runConfetti();
    }, 1700);

    setTimeout(() => {
      clearInterval(interval);
    }, 1000 * 60);
  }, []);

  return (
    <div class="flex flex-col justify-center bg-orange-400 h-screen relative">
      <canvas class="absolute w-full h-full" id="confetti" />
      <div class="relative w-[384px] flex p-5 gap-5 flex-col text-center text-zinc-900 text-[17px]">
        <div>
          <img
            class="w-[150px] ml-[90px]"
            src="./artie-image-winner.png"
            alt="Artie Christenson new WR"
          />
        </div>
        <div class="w-[150px] mx-auto">
          {wrBrokenAt}
        </div>
        <div class="text-3xl">
          Artie<br />
          Christensen
        </div>
        <div>broke the</div>
        <div class="text-3xl">
          world<br />record
        </div>
        <div>of the most</div>
        <div class="text-3xl">PULL-ups</div>
        <div>in 24 hours</div>
        <div class="w-full bg-zinc-700 h-[1px] opacity-20"></div>
        <div>total nb of pull-ups</div>
        <div class="text-3xl">
          {formatNumberWithCommas(props.progress.value)}
          <span class="absolute">
            <sup>*</sup>
          </span>
        </div>
        <div class="text-zinc-900 opacity-35">
          pending validation<sup>*</sup>
        </div>
        <div class="w-full bg-zinc-700 h-[1px] opacity-20"></div>
        <div>time remaining</div>
        <div class="text-3xl">{props.countdown.value}</div>
      </div>
    </div>
  );
}
