import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* setting globally state provider from redux and state from store. */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
