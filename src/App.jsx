import React from 'react';
import './App.css';
import { Home } from './Pages/Home/Home';
import { Destinations } from './Pages/Destinations/Destinations';
import { Crew } from './Pages/Crew/Crew';
import { Technology } from './Pages/Technology/Technology';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* import { Link, Route, Routes } from 'react-router-dom'; */



export function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/",
            element: <Crew />,
        },
        {
            path: "/",
            element: <Destinations />,
        },
        {
            path: "/",
            element: <Technology />,
        },
    ]);

    
}


/* 
App Component

return (
        <div className='App'>
            <Routes>
                <Route excat path="/home" component={<Home />} />
                <Route excat path="/destinations" component={<Destinations />} />
                <Route excat path="/crew" component={<Crew />} />
                <Route excat path="/technology" component={<Technology />} />
            </Routes>
        </div>
    )
*/
