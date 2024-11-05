import { useNavigate } from "react-router-dom";
import {login as loginService} from "@/api/authService"
import { Login } from "@/types/login";
export function useAuth() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  const login = async (login: Login,backUrl: string) => {
    try {
      // localStorage.setItem("isLogin", JSON.stringify(true));

      var userResponse = await loginService(login)
      console.log(userResponse);
      localStorage.setItem("user", JSON.stringify(userResponse));
      navigate(backUrl);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    login,
    logout,
  };
}
