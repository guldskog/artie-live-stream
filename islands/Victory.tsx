import { Signal } from "@preact/signals";
import { formatNumberWithCommas } from "../helpers/formatNumberWithCommas.ts";
import { currentWR } from "../helpers/constants.ts";
import { formatDate } from "../helpers/formatDate.tsx";
import { calculatePercentage } from "../helpers/calculatePercentage.ts";
import { countdownFrom24Hours } from "../helpers/countdownFrom24hours.ts";

interface Props {
  progress: Signal<number>;
  startTime: Signal<Date | undefined>;
  countdown: Signal<string | undefined>;
}

export default function Victory(props: Props) {
  return (
    <div class="flex flex-col justify-center bg-orange-400 h-screen">
      <div class="w-[384px] flex p-5 gap-5 flex-col text-center text-zinc-900 text-[17px]">
        <div>
          <img
            class="w-[217px] ml-[57px]"
            src="./artie-image-winner.png"
            alt="Artie Christensen new WR"
          />
        </div>
        <div>
          on june 23 2024<br />
          at 17:32:43 cet
        </div>
        <div class="text-[47px]">
          Artie<br />
          Christensen
        </div>
        <div>broke the</div>
        <div class="text-[47px]">
          world<br />record
        </div>
        <div>of the most</div>
        <div class="text-[47px]">PULL-ups</div>
        <div>in 24 hours</div>
        <div class="w-full bg-zinc-700 h-[1px] opacity-20"></div>
        <div>total nb of pull-ups</div>
        <div class="text-[47px]">
          {formatNumberWithCommas(props.progress.value)}
          <span class="absolute">*</span>
        </div>
        <div class="text-zinc-900 opacity-35">pending validation*</div>
        <div class="w-full bg-zinc-700 h-[1px] opacity-20"></div>
        <div>time remaining</div>
        <div class="text-[47px]">{props.countdown.value}</div>
      </div>
    </div>
  );
}
