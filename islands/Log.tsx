import { Signal } from "@preact/signals";

export default function Log(
  props: { log: Signal<{ time: number; status: "On" | "Off"; rep: number }[]> },
) {
  return (
    <div class="flex flex-col p-2">
      <div class="mb-2">Latest 20</div>
      {props.log.value.filter((item, index) => index < 20).map((item) => {
        return (
          <div key={item.time}>
            <div
              class={`flex border justify-between p-2 ${
                item.status === "On" ? "bg-green-400" : "bg-red-400"
              }`}
            >
              <div>
                {new Date(item.time).getHours()}:{new Date(item.time)
                  .getMinutes()}:{new Date(item.time).getSeconds()}
              </div>
              <div>{item.rep}</div>
            </div>
            {item.status === "On" && <div class="h-2"></div>}
          </div>
        );
      })}
    </div>
  );
}
