import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import HeroesLayout from "@/heroes/layouts/HeroesLayout";
import HeroPage from "@/heroes/pages/hero/HeroPage";
import HomePage from "@/heroes/pages/home/HomePage";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"))
const AdminLayout = lazy(() => import("@/admin/layouts/AdminLayout"))
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"))


const router = createBrowserRouter([

    {
        path: '/',
        element: <HeroesLayout />,
        children: [{
            index: true,
            element: <HomePage />
        },
        {
            path: '/heroes/1',
            element: <HeroPage />
        },
        {
            path: '/search',
            element: <SearchPage />
        }]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [{
            index: true,
            element: <AdminPage />
        }]
    }


])


export const AppRouter = () => {
    return <RouterProvider router={router} />
}