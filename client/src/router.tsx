import { createBrowserRouter } from "react-router";
import HomePage from "../src/pages/homePage/HomePage";
import NotFoundPage from "../src/pages/notFoundPage/NotFoundPage";
import App from "./App";
import ContactMePage from "./pages/personnal/contactMePage/ContactMePage";
import MyCVPage from "./pages/personnal/cvPage/MyCvPage";
import MyHistory from "./pages/personnal/HistoryPage/MyHistoryPage";
import MySkillsPage from "./pages/personnal/skillsPage/MySkillsPage";
import CoreexMenuiseriePage from "./pages/projects/CoreexMenuiseriePage/CoreexMenuiseriePage";
import FullstackStarterKitPage from "./pages/projects/fullstackStarterKitPage/FullstackStarterKitPage";
import GalleryProjectsPage from "./pages/projects/GalleryProjectsPage";
import GouyonCedricPage from "./pages/projects/gouyonCedricPage/GouyonCedricPage";
import PortfolioPage from "./pages/projects/portfolioPage/PortfolioPage";
import SchoolClickDevPage from "./pages/projects/schoolClickDevPage/SchoolClickDevPage";
import SchoolKartAlgoPage from "./pages/projects/schoolKartAlgoPage/SchoolKartAlgoPage";
import SchoolPackAndGoPage from "./pages/projects/schoolPackAndGoPage/SchoolPackAndGoPage";
import SchoolSeanZPage from "./pages/projects/schoolSeanZPage/SchoolSeanZPage";
import SchoolStreamFlixPage from "./pages/projects/schoolStreamFlixPage/SchoolStreamFlixPage";
import TealiiPage from "./pages/projects/tealiiPage/TealiiPage";

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
