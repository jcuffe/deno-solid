import { masked } from "solid-imask";

const mask = {
  mask: "0000 0000 0000 0000",
  lazy: false, // make placeholder always visible
};

export default function NumberComponent() {
  return <input inputMode="numeric" use:masked={{ mask }} />;
}
