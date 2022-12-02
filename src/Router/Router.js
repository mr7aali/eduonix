import { createBrowserRouter } from "react-router-dom";
import Login from "../contetent/Authentication/Login/Login";
import Resister from "../contetent/Authentication/Resister/Resister";
import Blog from "../contetent/Blog/Blog";
import Course from "../contetent/Course/Course";
import Home from "../contetent/Home/Home";
import RightSideCourse from "../contetent/RightSideCourse/RightSideCourse";
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
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/course',
                element:<Course></Course>,
                loader:()=>fetch('http://localhost:5000/courses'),
                children:[
                    {
                        path:'/course',
                        element: <RightSideCourse></RightSideCourse>,
                        loader:()=>fetch('http://localhost:5000/courses')

                    }
                ]

            }
        ]
    }
])

export default router;
