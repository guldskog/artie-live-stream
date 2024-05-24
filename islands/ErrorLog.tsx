import { useEffect, useState } from "preact/hooks";
import { formatDateTime } from "../helpers/formatDateTime.ts";

export default function ErrorLog() {
  const [errorLog, setErrorLog] = useState<
    { time: string }[]
  >([]);

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
        const newTime = formatDateTime(new Date());

        if (currentErrorLog[0]?.time === newTime) {
          return currentErrorLog;
        }

        const newErrorLog = [
          { time: formatDateTime(new Date()) },
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
    <>
      {errorLog.map((item) => {
        return (
          <div
            key={item.time}
            class="border-t border-zinc-700 flex text-zinc-500 gap-[10px] h-[30px] leading-[27px] justify-between"
          >
            <div class="text-white">{item.time}</div>
            <div>
              <input type="checkbox" />
            </div>
          </div>
        );
      })}
    </>
  );
}
