import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePi, triplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

//Can also import "ALL"

// import * as pi from "./math";
//   <ul>
//     <li>{pi.default}</li>
//     <li>{pi.doublePi()}</li>
//     <li>{pi.triplePi()}</li>
//   </ul>
