// userService.js
import { User } from "@/types/user";
import api from "./api";
import { Login } from "@/types/login";
import { ApiResponse } from "@/types/api-response";

const login = async (login: Login) :Promise<ApiResponse<User>> => {
    const {data} = await api.post<ApiResponse<User>>("/login",login)
    return data;
};
const register = () => api.post(`/register`);

export { login, register };
