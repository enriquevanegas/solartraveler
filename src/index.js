import React from 'react';
import { createRoot } from 'react-dom/client';
import { Crew } from './Pages/Crew/Crew';
import { Destinations } from './Pages/Destinations/Destinations';
import { Home } from './Pages/Home/Home';
import { PageNotFound } from './Pages/PageNotFound/PageNotFound';
import { Technology } from './Pages/Technology/Technology';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './styles.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <PageNotFound />
    },
    {
        path: "/crew",
        element: <Crew />,
    },
    {
        path: "/destinations",
        element: <Destinations />,
    },
    {
        path: "/technology",
        element: <Technology />,
    },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <RouterProvider router={router} />
);