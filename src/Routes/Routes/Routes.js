import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddPackage from "../../Pages/Dashboard/Dashboard/AddPackage/AddPackage";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import ManagePackages from "../../Pages/Dashboard/ManagePackages/ManagePackages";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ResetPassword from "../../Pages/Login/ResetPassword";
import Order from "../../Pages/Order/Order/Order";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Profile from "../../Pages/Shared/Profile/Profile";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resetpassword',
                element: <ResetPassword></ResetPassword>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addpackage',
                element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
            },
            {
                path: '/dashboard/managepackages',
                element: <AdminRoute><ManagePackages></ManagePackages></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/buyings/${params.id}`)
            },
        ]
    }
]);

export default router;