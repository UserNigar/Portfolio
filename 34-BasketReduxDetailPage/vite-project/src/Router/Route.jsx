import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../component/Layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Wishlist from '../pages/Wishlist';
import Basket from '../pages/Basket';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '/basket',
    element: <Basket />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
