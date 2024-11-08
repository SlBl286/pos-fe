import App from "@/App";
import Dashboard from "@/app/dashboard/page";
import Login from "@/app/auth/login/page";
import { createBrowserRouter, redirect } from "react-router-dom";
import NotFoundPage from "@/app/error/not-found";
import UserNamePage from "@/app/user/user-name";
import BillPage from "@/app/bill/page";
import ItemPage from "@/app/items/page";
import { ACCESS_TOKEN_KEY } from "@/config";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY) ;
      if (!token)
        throw redirect("/login?backUrl=" + window.location.pathname);

      return !!token;
    },
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "items",
        element: <ItemPage />,
      },
      {
        path: "bills",
        element: <BillPage />,
      },
      {
        path: "user/:username",
        element: <UserNamePage />,
      },
    ],
  },
  {
    path: "login",
    loader: async () => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY) ;
      if (!!token) throw redirect("/");

      return !!token;
    },
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
