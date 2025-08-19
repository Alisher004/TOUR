import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Tours from "./pages/Tours";
import Hotels from "./pages/Hotels";
import Countries from "./pages/Countries";
// import Booking from "./pages/Booking";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import TourDetail from "./pages/TourDetail";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/tours",
                element: <Tours />,
            },
            {
                path: "/tours/:id",
                element: <TourDetail />,
            },
            {
                path: "/hotels",
                element: <Hotels />,
            },
            {
                path: "/countries",
                element: <Countries />,
            },
            // {
            //     path: "/booking/:id",
            //     element: <Booking />,
            // },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/success",
                element: <Success />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            }
        ]
    },
]);