import { createBrowserRouter } from "react-router-dom";
import Error from "../../component/ErrorPage/Error";
import Home from "../../component/Home/Home";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
    {
        path:'*',
        element: <Error></Error>
    }
])