import { Signal } from "@preact/signals";
import { formatNumberWithCommas } from "../helpers/formatNumberWithCommas.ts";
import { currentWR } from "../helpers/constants.ts";
import { countdownFrom24Hours } from "../helpers/countdownFrom24hours.ts";
import { formatDate } from "../helpers/formatDate.tsx";
import { calculatePercentage } from "../helpers/calculatePercentage.ts";

interface Props {
  progress: Signal<number>;
  startTime: Signal<Date | undefined>;
  countdown: Signal<string | undefined>;
}

export default function Progress(props: Props) {
  return (
    <div class="flex flex-col justify-center h-screen border-l border-l-zinc-700">
      <div class="w-[384px] flex p-5 gap-5">
        <div class="flex flex-col w-[253px]">
          <div class="flex flex-col gap-3 pt-14 pb-11">
            <div class="flex relative">
              <img
                class="w-[50px] absolute left-[10px] -bottom-[5px]"
                src="./image-artie.png"
                alt="Artie Christensen"
              />
              <img
                class="w-[18px] absolute -top-[12px] left-[63px]"
                src="./arrow.svg"
                alt="Arrow Icon"
              />
              <div class="pl-[78px] h-[38px] leading-[110%]">
                Artie Christensen<br /> is breaking the
              </div>
            </div>
            <div class="text-[47px] h-[104px] leading-[110%] text-orange-400 text-center">
              world record
            </div>
            <div class="text-center">of the most</div>
            <div class="text-center text-[47px] text-orange-400">
              PULL-ups
            </div>
            <div class="text-center">in 24 hours</div>
          </div>
          <div class="bg-zinc-700 h-[1px] w-full"></div>
          <div class="pt-11 pb-11 text-center flex flex-col gap-2">
            <div class="text-[17px] leading-[110%]">Total nb of pull-ups</div>
            <div class="text-[45px] text-orange-400 h-[50px] leading-none">
              {formatNumberWithCommas(props.progress.value)}
            </div>
            <div class="text-[17px] text-zinc-500 leading-[110%]">
              Remaining{" "}
              {formatNumberWithCommas(currentWR - props.progress.value)}
            </div>
          </div>
          <div class="bg-zinc-700 h-[1px] w-full"></div>
          <div class="pt-11 pb-11 text-center flex flex-col gap-2">
            <div class="text-[17px] leading-[110%]">time to finish</div>
            <div class="text-[45px] text-orange-400 h-[50px] leading-none">
              {props.countdown.value !== undefined
                ? props.countdown.value
                : "waiting"}
            </div>
            <div class="text-[17px] text-zinc-500 leading-[110%] w-56 mx-auto">
              {props.startTime.value !== undefined
                ? formatDate(props.startTime.value)
                : "hit space bar to start countdown, gl!"}
            </div>
          </div>
        </div>
        <div class="w-[71px] bg-zinc-900 border border-zinc-700 rounded-xl shadow-[0_0_10px_0px_rgba(0,0,0,.3)] p-[8px]">
          <div class="bg-zinc-950 relative h-full rounded outline outline-2 outline-zinc-950 border border-zinc-700">
            <div class="absolute w-full h-[80%] bottom-0">
              <div class="absolute w-full flex flex-col h-full bottom-0">
                <div class="absolute top-0 w-full -translate-y-full">
                  <div class="text-[11px] leading-none text-center h-[22px] mb-[7px]">
                    world<br />record
                  </div>
                  <div class="h-[1px] w-[69px] relative -left-[9px] bg-orange-400">
                  </div>
                </div>
                <div class="bg-[rgba(255,255,255,.05)] flex-grow w-full rounded-b-[3px]">
                </div>
              </div>
              <div
                class="absolute w-full bottom-0 flex flex-col transform-gpu"
                style={{
                  height: `${
                    calculatePercentage(props.progress.value, currentWR)
                  }%`,
                }}
              >
                <div class="absolute top-0 w-full -translate-y-full">
                  {currentWR - props.progress.value > 300 && (
                    <div class="text-[11px] leading-none text-center h-[11px] mb-[7px]">
                      Artie
                    </div>
                  )}
                  <div class="h-[1px] w-[69px] relative -left-[9px] bg-orange-400">
                  </div>
                </div>
                <div class="bg-[#FB923C] flex-grow w-full rounded-b-[3px]">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
