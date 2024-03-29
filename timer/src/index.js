import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./components/Timer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Timer />
        <Timer />
        <Timer />
    </React.StrictMode>
);
