import React from 'react'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from "../pages/About";
import Contact from "../pages/Contact";


import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([

    {
     element: <Navbar/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"  ",
          element:<Contact/>
        },
      ]
    
    }
])

export default router
