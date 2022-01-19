import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Container } from "@mui/material";


import { MainLayout } from "./components/MainLayout/index";
import { configureStore } from "./store/configureStore";

import "./styles/normalize.css";

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Container>
				<MainLayout />
			</Container>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
