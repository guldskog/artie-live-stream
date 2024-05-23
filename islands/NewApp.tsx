export default function App() {
  return (
    <div class="flex justify-end pt-[55px] pl-[50px]">
      <div class="flex-grow flex flex-col gap-[50px] mr-[50px] justify-end">
        <div class="border border-zinc-700 p-6 flex flex-col gap-[18px]">
          <div class="flex justify-between">
            <div>pace selection</div>
            <div class="lowercase text-slate-400 text-[16px]">
              use ← and → for quick selection
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-[34px] h-[34px] bg-zinc-700 border border-zinc-600 rounded-full grid place-items-center cursor-pointer">
              <span>1</span>
            </div>
            <div class="w-[34px] h-[34px] bg-[#FB923C] border border-yellow-300 rounded-full grid place-items-center cursor-default">
              <span>2</span>
            </div>
            <div class="w-[34px] h-[34px] bg-zinc-700 border border-zinc-600 rounded-full grid place-items-center cursor-pointer">
              <span>3</span>
            </div>
            <div class="w-[34px] h-[34px] bg-zinc-700 border border-zinc-600 rounded-full grid place-items-center cursor-pointer">
              <span>4</span>
            </div>
            <div class="w-[34px] h-[34px] bg-zinc-700 border border-zinc-600 rounded-full grid place-items-center cursor-pointer">
              <span>5</span>
            </div>
            <div class="w-[34px] h-[34px] bg-zinc-700 border border-zinc-600 rounded-full grid place-items-center cursor-pointer">
              <span>6</span>
            </div>
            <div class="w-[34px] h-[34px] bg-zinc-700 border border-zinc-600 rounded-full grid place-items-center cursor-pointer">
              <span>7</span>
            </div>
            <div class="w-[34px] h-[34px] bg-zinc-700 border border-zinc-600 rounded-full grid place-items-center cursor-pointer">
              <span>8</span>
            </div>
            <div class="w-[34px] h-[34px] bg-zinc-700 border border-zinc-600 rounded-full grid place-items-center cursor-pointer">
              <span>9</span>
            </div>
            <div class="w-[34px] h-[34px] bg-zinc-700 border border-zinc-600 rounded-full grid place-items-center cursor-pointer">
              <span>10</span>
            </div>
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
              <div class="border-t border-zinc-700 flex text-zinc-500 gap-[10px] h-[30px] leading-[27px]">
                <div class="text-white">15:14:23</div>
                <div>→</div>
                <div>15:14:34</div>
                <div>12”</div>
                <div>+10</div>
                <div class="flex-grow flex justify-end gap-[10px]">
                  <div>203</div>
                  <div>→</div>
                  <div class="text-orange-400">213</div>
                </div>
              </div>
              <div class="border-t border-zinc-700 flex text-zinc-500 gap-[10px] h-[30px] leading-[27px]">
                <div class="text-white">99:99:99</div>
                <div>→</div>
                <div>15:14:01</div>
                <div>12”</div>
                <div>+10</div>
                <div class="flex-grow flex justify-end gap-[10px]">
                  <div>203</div>
                  <div>→</div>
                  <div class="text-orange-400">213</div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-6 flex-1">
            <div>errors</div>
            <div class="pt-[10px]">
              <div class="border-t border-zinc-700 flex text-zinc-500 gap-[10px] h-[30px] leading-[27px]">
                <div class="text-white">99:99:99</div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-zinc-700 pt-[50px] flex justify-end gap-6">
          <div class="bg-zinc-600 border border-zinc-500 h-[45px] px-5 cursor-pointer pt-[12px] hover:border-orange-300 hover:bg-orange-400 hover:text-zinc-900">
            clear app
          </div>
          <div class="bg-zinc-600 border border-zinc-500 h-[45px] px-5 cursor-pointer pt-[12px] hover:border-orange-300 hover:bg-orange-400 hover:text-zinc-900">
            export full log
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center h-[calc(100vh - 55px)] border-l border-l-zinc-700">
        <div class="w-[384px] flex p-5 gap-5">
          <div class="flex flex-col">
            <div class="flex flex-col gap-3 pt-14 pb-11">
              <div class="flex relative">
                <img
                  class="w-[50px] absolute left-[28px] -bottom-[5px]"
                  src="./image-artie.png"
                  alt="Artie Christensen"
                />
                <img
                  class="w-[18px] absolute -top-[12px] left-[82px]"
                  src="./arrow.svg"
                  alt="Arrow Icon"
                />
                <div class="pl-[99px] h-[38px] leading-[110%]">
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
                57,329
              </div>
              <div class="text-[17px] text-zinc-500 leading-[110%]">
                Remaining 11,420
              </div>
            </div>
            <div class="bg-zinc-700 h-[1px] w-full"></div>
            <div class="pt-11 pb-11 text-center flex flex-col gap-2">
              <div class="text-[17px] leading-[110%]">time to finish</div>
              <div class="text-[45px] text-orange-400 h-[50px] leading-none">
                22:42:00
              </div>
              <div class="text-[17px] text-zinc-500 leading-[110%]">
                started on may 24 2024<br /> at 4am CET
              </div>
            </div>
          </div>
          <div class="w-[70px] bg-zinc-900 border border-zinc-700 rounded-xl shadow-[0_0_10px_0px_rgba(0,0,0,.3)] p-[7px]">
            <div class="bg-zinc-950 relative h-full rounded outline outline-2 outline-zinc-950 border border-zinc-700">
              <div class="absolute w-full h-[80%] bottom-0">
                <div class="absolute w-full flex flex-col h-full bottom-0">
                  <div class="absolute top-0 w-full -translate-y-full">
                    <div class="text-[10px] leading-none text-center h-[22px] mb-[5px]">
                      world<br />record
                    </div>
                    <div class="h-[1px] w-[59px] relative -left-[8px] bg-orange-400">
                    </div>
                  </div>
                  <div class="bg-[rgba(255,255,255,.05)] flex-grow w-full rounded-b-[3px]">
                  </div>
                </div>
                <div class="absolute w-full bottom-0 flex flex-col h-[80%]">
                  <div class="absolute top-0 w-full -translate-y-full">
                    <div class="text-[11px] leading-none text-center h-[11px] mb-[5px]">
                      Artie
                    </div>
                    <div class="h-[1px] w-[59px] relative -left-[8px] bg-orange-400">
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
    </div>
  );
}
