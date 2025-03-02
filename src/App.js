import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import TNC from "./component/TNC";

function ExternalRedirect({ url }) {
	useEffect(() => {
		window.location.href = url;
	}, [url]);

	return null; // No UI to render
}

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/download-app"
					element={
						<ExternalRedirect url="https://play.google.com/store/apps/details?id=com.dts.freefiremax&pcampaignid=merch-FCC-gpg-dynasty-free-fire-max-websky&hl=en" />
					}
				/>

				<Route path="/terms-and-conditions" element={<TNC />}></Route>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
