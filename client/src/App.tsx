import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import { constants } from "../../setup/constants";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "react-toastify/dist/ReactToastify.css";

declare global {
	interface Window {
		gtag?: (command: string, id: string, config?: object) => void;
	}
}

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		const formatTitle = (path: string): string => {
			if (!path || path === "/") return "Accueil";
			return path
				.replace("/", "")
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");
		};

		const pageTitle = formatTitle(pathname);
		const fullTitle = `${pageTitle} | ${constants.APP_NAME}`;

		document.title = fullTitle;
		window.scrollTo({ top: 0, behavior: "instant" });

		if (typeof window.gtag === "function") {
			window.gtag("config", "G-K3B9749HKQ", {
				page_title: fullTitle,
				page_path: pathname,
			});
		}
	}, [pathname]);

	return (
		<div className="app-container">
			<Header />
			<main className="main-content" style={{ minHeight: "80vh" }}>
				<Suspense fallback={<div aria-busy="true" style={{ height: "50vh" }} />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
			<ToastContainer position="top-center" autoClose={3000} theme="colored" />
		</div>
	);
}

export default App;
