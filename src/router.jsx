// router.js
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import Countries from "./pages/Countries";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Hotels from "./pages/Hotels";
import TourSelection from "./components/TourSelection";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tours", element: <Tours /> },
      { path: "/tours/:id", element: <TourDetail /> },
      { path: "/countries", element: <Countries /> },
      { path: "/hotels", element: <Hotels /> },
      { path: "/hotels/:id", element: <TourDetail /> },
      { path: "/tour-selection", element: <TourSelection /> },
      { path: "/booking/tour/:id", element: <Booking /> },
      { path: "/booking/hotels/:id", element: <Booking /> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
]);
