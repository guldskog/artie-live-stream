export default function Log() {
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
        <div class="bg-zinc-600 border border-zinc-500 h-[45px] px-5 cursor-pointer pt-[13px] hover:border-orange-300 hover:bg-orange-400 hover:text-zinc-900">
          clear app
        </div>
        <div class="bg-zinc-600 border border-zinc-500 h-[45px] px-5 cursor-pointer pt-[13px] hover:border-orange-300 hover:bg-orange-400 hover:text-zinc-900">
          export full log
        </div>
      </div>
    </div>
  );
}
