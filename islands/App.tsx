import { useSignal } from "@preact/signals";
import Log from "../islands/Log.tsx";
import Progress from "../islands/Progress.tsx";
import { useEffect } from "preact/hooks";

export default function App() {
  const log = useSignal<{ time: number; status: "On" | "Off"; rep: number }[]>(
    [],
  );

  useEffect(() => {
    log.value = JSON.parse(
      atob(window.localStorage.getItem("WR") || "") || "[]",
    ).map((
      item: { a: number; b: string; c: string },
    ) => ({ time: item.a, status: item.b, rep: item.c }));
  }, []);

  return (
    <div class="pb-56">
      <Log log={log} />
      <Progress log={log} />
    </div>
  );
}
