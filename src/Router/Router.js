import { createBrowserRouter } from "react-router-dom";
import Login from "../contetent/Authentication/Login/Login";
import Resister from "../contetent/Authentication/Resister/Resister";
import Home from "../contetent/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/resister',
                element:<Resister></Resister>

            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;
