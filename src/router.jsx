import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout/Layout";
import ItemUser from "./pages/ItemUser";
import User2 from "./pages/User2";
import Ali from "./pages/Ali";

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
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "contact/:idDrink",
                element: <User2 />
            },
            {
                path: "user/:id",
                element: <ItemUser />
            },  
            {
                path: "ali",
                element: <Ali />
            },
        ]
    },
])