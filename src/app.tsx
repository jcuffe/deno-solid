import { clientOnly } from "@solidjs/start";
import NumberInput from "./NumberInput";

// const NumberInput = clientOnly(() => import("./NumberInput"));

export default function App() {
  return (
    <div>
      <NumberInput />
    </div>
  );
}
