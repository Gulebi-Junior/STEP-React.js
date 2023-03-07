import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { MainPage, PeoplePage, PlanetsPage, StarshipsPage } from "./routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        children: [
            { path: "/people", element: <PeoplePage /> },
            { path: "/planets", element: <PlanetsPage /> },
            { path: "/starships", element: <StarshipsPage /> },
        ],
    },
]);

export default router;
