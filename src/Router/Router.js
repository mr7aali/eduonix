import { createBrowserRouter } from "react-router-dom";
import Login from "../contetent/Authentication/Login/Login";
import Resister from "../contetent/Authentication/Resister/Resister";
import Blog from "../contetent/Blog/Blog";
import Checkout from "../contetent/Course/ChcekOut/Checkout";
import Course from "../contetent/Course/Course";
import CourseDetails from "../contetent/CourseDetails/CourseDetails";
import Home from "../contetent/Home/Home";
import Privet from "../contetent/PrivetRoute/Privet";
import RightSideCourse from "../contetent/RightSideCourse/RightSideCourse";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/resister',
                element: <Resister></Resister>

            },
            {
                path:"/access/:_id",
                element:<Privet><Checkout></Checkout></Privet>,
                loader: ({ params }) => fetch(`https://eduonix-server.vercel.app/courses/${params._id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('https://eduonix-server.vercel.app/courses'),
                children: [
                    {
                        path: '/course',
                        element: <RightSideCourse></RightSideCourse>,
                        loader: () => fetch('https://eduonix-server.vercel.app/courses')

                    }

                ]

            },
            {
                path: '/courses/:_id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://eduonix-server.vercel.app/courses/${params._id}`)
            }
        ]
    }
])

export default router;
