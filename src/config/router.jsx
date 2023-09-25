import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Private from "../layout/PrivateLayout";
import  Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import CreateCardForm from "../pages/CreateCards";
import FavCards from "../pages/FavCard";
import EditCardForm from "../pages/updateCards";
import InfoUser from "../components/imagUser";
import AboutUs from "../pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
               path: "about",
               element: <AboutUs />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "/",
                element: <Private />,
                children: [
                    {
                       path:"favorite",
                       element: <FavCards />
                    },
                    {
                       path: "create-form",
                        element: <CreateCardForm />
                    },
                    {
                        path: "edit-card",
                        element: <EditCardForm/>
                    },
                    {
                       path: "info-user",
                       element: <InfoUser />
                    },
                    {
                        path: "home",
                        element: <Home />
                    }
                ],
            },
        ],
    },
]);
