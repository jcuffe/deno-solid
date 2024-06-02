import { renderToStream } from "npm:solid-js/web";
import { jsx as _jsx } from "npm:solid-js/jsx-runtime";

function App() {
  return '<h1>Hello, world!</h1>';
}

function handler(_req: Request): Response {
  const passthrough = new TransformStream();
  renderToStream(() => <App />).pipeTo(passthrough.writable);
  return new Response(passthrough.readable);
}
Deno.serve(handler);
