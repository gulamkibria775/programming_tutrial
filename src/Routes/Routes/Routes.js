import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Course from "../../component/Course";
import Checkout from "../../component/Checkout";
import NotFound from "../../component/NotFound";
import Blog from "../../component/Blog/Blog"
import Faq from "../../component/FAQ/Faq"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
             
                loader: () => fetch('https://courses-server-site.vercel.app/course')
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
           
            {
                path: '/category/:id',
                element: <News></News>,
                loader: ({params}) => fetch(`https://courses-server-site.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params}) => fetch(`https://courses-server-site.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/course',
                element:<Course></Course>,
                loader: () => fetch('https://courses-server-site.vercel.app/course')
            },
            {
             path:'/*', 
            element:<NotFound></NotFound>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            }
        ]
    }
])