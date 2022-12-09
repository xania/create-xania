import { jsxFactory } from "@xania/view";

import "./App.css";
import Time from "./time";
import Clock from "./clock";

const jsx = jsxFactory();

export default function App() {
  return (
    <div class="App">
      <header class="App-header">
        <Clock />
        <Time />
        <hr style="width: 500px; border: 1px solid #EEEEEE55;"></hr>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class="App-link"
          href="https://gentle-rock-05c9ba810.2.azurestaticapps.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Xania
        </a>
      </header>
    </div>
  );
}
