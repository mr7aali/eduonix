import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/Blog/Blog";
import Course from "../../component/Course/Course";
import CourseDetails from "../../component/CourseDetails/CourseDetails";
import Error from "../../component/ErrorPage/Error";
import FAQ from "../../component/FAQ/FAQ";
import Home from "../../component/Home/Home";
import PrivetRout from "../../component/PrivetRout/PrivetRout";
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
                element:<PrivetRout><Course></Course></PrivetRout>
            },
            {
                path:'/courses/:Id',
                loader:({params}) => fetch(`http://localhost:5000/courses/${params.Id}`),
                element:<CourseDetails></CourseDetails>
            },
            {
                path:'/fqa',
                element: <FAQ></FAQ>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path:'*',
        element: <Error></Error>
    }
])