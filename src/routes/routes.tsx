import App from "@/App";
import Dashboard from "@/app/dashboard/page";
import Login from "@/app/auth/login/page";
import { createBrowserRouter, redirect } from "react-router-dom";
import NotFoundPage from "@/app/error/not-found";
import UserNamePage from "@/app/user/user-name";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const isLogin = JSON.parse(localStorage.getItem("isLogin") ?? "false");
      console.log(isLogin);
      if (!isLogin)
        throw redirect("/login?backUrl=" + window.location.pathname);

      return isLogin;
    },
    children: [
      {
        path: "dashboard",

        element: <Dashboard />,
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
      const isLogin = JSON.parse(localStorage.getItem("isLogin") ?? "false");
      console.log(isLogin);
      if (isLogin) throw redirect("/");

      return isLogin;
    },
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
