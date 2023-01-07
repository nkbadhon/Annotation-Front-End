import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";

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
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
        ]
    }
])

export default router;