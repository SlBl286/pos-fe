import App from "@/App"
import Page from "@/app/dashboard/page"
import Login from "@/pages/Login"
import {createBrowserRouter} from "react-router-dom"

export const router = createBrowserRouter([
    {
        path : "/",
        element: <App/>,
        children: [
            {
                path:"dashboard", element: <Page/>
            },
            {
                path:"login", element: <Login/>
            }
        ]
    },
    {
        path : "/",
        element: <App/>,
        children: [
            {
                path:"dashboard", element: <Page/>
            },
            {
                path:"login", element: <Login/>
            }
        ]
    }
])