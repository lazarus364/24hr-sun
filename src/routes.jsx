import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Search from "./assets/search";
import MoviesSeriesNews from "./pages/MSNews"
import Movies from ".pages/Movies"
import LatestMovies from ".pages/LatestMovies"
import TopMovies from ".pages/TopMovies"
import Series from "./pages/Series"
import LatestSeries from "./pages/LatestSeries"
import TopSeries from "/pages/TopSeries"
import Animations from "./pages/Animations"
import Others from "./pages/Others";
import Articles from "./pages/Articles";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <MoviesSeriesNews />,
            },
            {
                path: "movies",
                element: <Movies />,
            },
            {
                path: "latest movies",
                element: <LatestMovies />,
            },
            {
                path: "top movies",
                element: <TopMovies />,
            },
            {
                path: "series",
                element: <Series />,
            },
            {
                path: "latest series",
                element: <LatestSeries />,
            },
            {
                path: "top series",
                element: <TopSeries />,
            },
            {
                path: "animations",
                element: <Animations />,
            },
            {
                path: "others",
                element: <Others />,
            },
            {
                path: "search",
                element: <Search />,
            },
           
        ]

    },

];

export default routes;