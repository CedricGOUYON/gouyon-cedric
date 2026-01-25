import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import App from "./App";

// Pages de base
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));

// Pages Personnelles
const ContactMePage = lazy(
	() => import("./pages/personnal/contactMePage/ContactMePage"),
);
const MyCVPage = lazy(() => import("./pages/personnal/cvPage/MyCvPage"));
const MyHistory = lazy(
	() => import("./pages/personnal/HistoryPage/MyHistoryPage"),
);
const MySkillsPage = lazy(
	() => import("./pages/personnal/skillsPage/MySkillsPage"),
);

// Pages Projets
const CoreexMenuiseriePage = lazy(
	() => import("./pages/projects/CoreexMenuiseriePage/CoreexMenuiseriePage"),
);
const FullstackStarterKitPage = lazy(
	() =>
		import("./pages/projects/fullstackStarterKitPage/FullstackStarterKitPage"),
);
const GalleryProjectsPage = lazy(
	() => import("./pages/projects/GalleryProjectsPage"),
);
const GouyonCedricPage = lazy(
	() => import("./pages/projects/gouyonCedricPage/GouyonCedricPage"),
);
const PortfolioPage = lazy(
	() => import("./pages/projects/portfolioPage/PortfolioPage"),
);
const SchoolClickDevPage = lazy(
	() => import("./pages/projects/schoolClickDevPage/SchoolClickDevPage"),
);
const SchoolKartAlgoPage = lazy(
	() => import("./pages/projects/schoolKartAlgoPage/SchoolKartAlgoPage"),
);
const SchoolPackAndGoPage = lazy(
	() => import("./pages/projects/schoolPackAndGoPage/SchoolPackAndGoPage"),
);
const SchoolSeanZPage = lazy(
	() => import("./pages/projects/schoolSeanZPage/SchoolSeanZPage"),
);
const SchoolStreamFlixPage = lazy(
	() => import("./pages/projects/schoolStreamFlixPage/SchoolStreamFlixPage"),
);
const TealiiPage = lazy(() => import("./pages/projects/tealiiPage/TealiiPage"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFoundPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "projects", element: <GalleryProjectsPage /> },
			{ path: "portfolio", element: <PortfolioPage /> },
			{ path: "coreex-menuiserie", element: <CoreexMenuiseriePage /> },
			{ path: "fullstack-starter-kit", element: <FullstackStarterKitPage /> },
			{ path: "gouyon-cedric", element: <GouyonCedricPage /> },
			{ path: "school-clickdev", element: <SchoolClickDevPage /> },
			{ path: "school-kartalgo", element: <SchoolKartAlgoPage /> },
			{ path: "school-packandgo", element: <SchoolPackAndGoPage /> },
			{ path: "school-seanz", element: <SchoolSeanZPage /> },
			{ path: "school-streamflix", element: <SchoolStreamFlixPage /> },
			{ path: "tealii", element: <TealiiPage /> },
			{ path: "my-cv", element: <MyCVPage /> },
			{ path: "my-history", element: <MyHistory /> },
			{ path: "my-skills", element: <MySkillsPage /> },
			{ path: "contact-me", element: <ContactMePage /> },
		],
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

export default router;
