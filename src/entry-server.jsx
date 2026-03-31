import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export function render(pathname = "/") {
  return renderToString(
    <React.StrictMode>
      <App initialPathname={pathname} />
    </React.StrictMode>
  );
}
