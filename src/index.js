import * as serviceWorker from "serviceWorker";
import React from "react";
import { createRoot } from "react-dom/client";

import "styles/index.css";
import App from "App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

const render = (Component) => {
  root.render(<Component />);
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}

serviceWorker.unregister();
