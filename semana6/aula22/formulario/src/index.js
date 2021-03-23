import React from "react"
import Etapa1 from "./components/etapa1.js";
import Etapa2 from "./components/etapa2.js";
import Etapa3 from "./components/etapa3.js";
import Etapa4 from "./components/final.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
