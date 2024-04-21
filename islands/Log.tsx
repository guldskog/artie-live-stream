import { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { useEffect, useState } from "preact/hooks";

export default function Log(
  props: { log: Signal<{ time: number; status: "On" | "Off"; rep: number }[]> },
) {
  const [errorLog, setErrorLog] = useState<{ time: number }[]>([]);

  useEffect(() => {
    setErrorLog(JSON.parse(
      atob(window.localStorage.getItem("errorLog") || "") || "[]",
    ));
  }, []);

  useEffect(() => {
    const onKeyEvent = (event: KeyboardEvent) => {
      event.preventDefault();
      const errorKey = event.key === "f";

      if (!errorKey) {
        return;
      }

      setErrorLog((currentErrorLog) => {
        const newErrorLog = [
          { time: new Date().getTime() },
          ...currentErrorLog,
        ];

        window.localStorage.setItem(
          "errorLog",
          btoa(JSON.stringify(currentErrorLog)),
        );

        return newErrorLog;
      });
    };

    document.addEventListener("keydown", onKeyEvent);

    return () => {
      document.removeEventListener("keydown", onKeyEvent);
    };
  }, []);

  return (
    <div class="flex flex-col p-2">
      <div class="flex gap-3">
        <div class="w-full">
          <div class="flex justify-between mb-2 items-center">
            <div>Latest 10</div>
            <Button
              onClick={() => {
                alert("export not yet implemeted");
              }}
            >
              Export full log
            </Button>
          </div>
          {props.log.value.filter((item, index) => index < 10).map((item) => {
            return (
              <div key={item.time}>
                <div
                  class={`flex border justify-between p-2 ${
                    item.status === "On" ? "bg-green-400" : "bg-red-400"
                  }`}
                >
                  <div>
                    {new Date(item.time).getHours() < 10
                      ? "0" + new Date(item.time).getHours()
                      : new Date(item.time)
                        .getHours()}:{new Date(item.time).getMinutes() < 10
                      ? "0" + new Date(item.time).getMinutes()
                      : new Date(item.time)
                        .getMinutes()}:{new Date(item.time).getSeconds() < 10
                      ? "0" + new Date(item.time).getSeconds()
                      : new Date(item.time).getSeconds()}
                  </div>
                  <div>{item.rep}</div>
                </div>
                {item.status === "On" && <div class="h-2"></div>}
              </div>
            );
          })}
        </div>
        <div class="w-full">
          <div class="flex justify-between mb-2 items-center">
            <div>All errors</div>
            <Button
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
            >
              Clear the whole app
            </Button>
          </div>
          {errorLog.map((item) => {
            return (
              <div key={item.time}>
                <div
                  class={`flex border justify-between p-2`}
                >
                  <div>
                    {new Date(item.time).getHours() < 10
                      ? "0" + new Date(item.time).getHours()
                      : new Date(item.time)
                        .getHours()}:{new Date(item.time).getMinutes() < 10
                      ? "0" + new Date(item.time).getMinutes()
                      : new Date(item.time)
                        .getMinutes()}:{new Date(item.time).getSeconds() < 10
                      ? "0" + new Date(item.time).getSeconds()
                      : new Date(item.time).getSeconds()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
