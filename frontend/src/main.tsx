import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "../index.css";
import { store, persistor } from "./redux/index";
import { Provider } from "react-redux";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

const baseURL =
	process.env.NODE_ENV === "production"
		? "https://quizgpt-ps.azurewebsites.net"
		: "http://localhost:5000";

axios.defaults.baseURL = baseURL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router>
				<App />
			</Router>
		</PersistGate>
	</Provider>
);
