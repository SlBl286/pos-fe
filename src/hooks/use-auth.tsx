import axiosClient from "@/api/base";
import { useNavigate } from "react-router-dom";
import {User} from "@/types/user"
export function useAuth() {
  const api = axiosClient();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("isLogin", JSON.stringify(false));
    navigate("/login");
  };
  const login = async (backUrl: string) => {
    try {
      // localStorage.setItem("isLogin", JSON.stringify(true));

      var respone = await api.post("login", {
        username: "qy286",
        password: "22021987",
      });
      console.log(respone.data as User);
      // navigate(backUrl);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    login,
    logout,
  };
}
