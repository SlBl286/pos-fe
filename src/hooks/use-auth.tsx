import { useNavigate } from "react-router-dom";

export function useAuth() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.setItem("isLogin", JSON.stringify(false));
        navigate("/login");
      };
    const login = (backUrl : string) => {
        localStorage.setItem("isLogin", JSON.stringify(true));
        navigate(backUrl);
    }
  return {
    login,
    logout
  }
}
