import { useSignal } from "@preact/signals";
import Log from "../islands/Log.tsx";
import Progress from "../islands/Progress.tsx";

export default function App() {
  const log = useSignal<{ time: number; status: "On" | "Off"; rep: number }[]>(
    JSON.parse(atob(localStorage.getItem("WR") || "") || "[]").map((
      item: { a: number; b: string; c: string },
    ) => ({ time: item.a, status: item.b, rep: item.c })),
  );

  return (
    <div>
      <Log log={log} />
      <Progress log={log} />
    </div>
  );
}