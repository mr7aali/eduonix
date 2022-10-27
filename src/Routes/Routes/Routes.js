import { createBrowserRouter } from "react-router-dom";
import Course from "../../component/Course/Course";
import Error from "../../component/ErrorPage/Error";
import Home from "../../component/Home/Home";
import Login from "../../HandleUser/Login/Login";
import Register from "../../HandleUser/Register/Register";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                
                path:'/courses',              
                element:<Course></Course>
            }
        ]
    },
    {
        path:'*',
        element: <Error></Error>
    }
])