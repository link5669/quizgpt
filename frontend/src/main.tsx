import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "../index.css";
import store from "./redux/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode><Provider store={store}>
		<Router>
		<App />
		</Router>
		</Provider></React.StrictMode>
);

