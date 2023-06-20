import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "../index.css";
import store from "./redux/index";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);
