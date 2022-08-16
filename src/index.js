import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CalculatorDemo from "./CalculatorDemo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CalculatorDemo />
  </StrictMode>,
  rootElement
);
