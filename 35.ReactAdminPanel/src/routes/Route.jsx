import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/header/layout/Layout'
import Home from '../pages/Home'
import NotFoundPage from '../pages/NotFoundPage'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/auth/register/login/Login'
import Register from '../pages/auth/register/Register'
import Wishlist from '../pages/Wishlist'
import Basket from '../pages/Basket'
import ProductDetailPage from '../pages/productdetail/ProductDetailPage'
import AdminPanel from '../pages/admin/AdminPanel'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/wishlist",
                element: <Wishlist />,
            },
            {
                path: "/basket",
                element: <Basket />,
            },
            {
                path: "/productdetail/:id",
                element: <ProductDetailPage />,
            },
            {
                path: "/admin",
                element: <AdminPanel/>
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "*",
        element: <NotFoundPage/>,
    }
])
