import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route, createRoutesFromElements, Router, Routes, BrowserRouter
} from "react-router-dom";
import React from "react";
import HomeView from "./view/HomeView";
import BookShow from "./components/BookShow";
import Shopping from "./components/Shopping";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import BookDetail from "./components/BookDetail";
import LoginView from "./view/LoginView";
import ManagerView from "./view/ManagerView";
import ManagerBook from "./components/ManagerBook";
import ManagerUser from "./components/ManagerUser";
import ManagerOrder from "./components/ManagerOrder";
import ManagerAddBook from "./components/ManagerAddBook";
import Statistics from "./components/Statistics";
import OrderStatistics from "./components/ManagerStatistics";
import BookStatistics from "./components/BookStatistics";

const router = createBrowserRouter([
    {
        path:"/Home",
        element:<HomeView />,
        children: [
            {
                path:"/Home/Book",
                element:<BookShow />,
            },
            {
                path:"/Home/Shopping",
                element:<Shopping />,
            },
            {
                path:"/Home/Orders",
                element:<Orders />,
            },
            {
                path:"/Home/Profile",
                element:<Profile />,
            },
            {
                path:"/Home/Statistics",
                element:<Statistics/>,
            },
            {
                path:"/Home/bookDetails",
                element: <BookDetail />,
            }]
    },
    {
        path:"/",
        element:<LoginView/>,
    },
    {
        path:"/Manager",
        element:<ManagerView />,
        children:[
            {
                path:"/Manager/Book",
                element:<ManagerBook />,
            },
            {
                path:"/Manager/AddBook",
                element:<ManagerAddBook />,
            },
            {
                path:"/Manager/Order",
                element:<ManagerOrder />,
            },
            {
                path:"/Manager/User",
                element:<ManagerUser />
            },
            {
                path:"/Manager/OrderStatistics",
                element:<OrderStatistics />
            },
            {
                path:"/Manager/BookStatistics",
                element:<BookStatistics />
            },

        ]
    }
    ]
);



const App =()=> {
    return (
           <RouterProvider router={router}/>

    );
}

export default App;