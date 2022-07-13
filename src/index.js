import React from "react";
import ReactDOM  from "react-dom/client"
import "./index.css"
import { DataProvider } from "./utils/Datacontext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <DataProvider>
        <App />
    </DataProvider>
)