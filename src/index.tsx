import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);


root.render(<App />) ;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

