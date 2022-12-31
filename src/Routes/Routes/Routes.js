import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddPackage from "../../Pages/Dashboard/Dashboard/AddPackage/AddPackage";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManagePackages from "../../Pages/Dashboard/ManagePackages/ManagePackages";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Order from "../../Pages/Order/Order/Order";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/order',
                element: <Order></Order>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
        ]
    }
]);

export default router;