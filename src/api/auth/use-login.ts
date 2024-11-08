import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "../api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/config";
import { User } from "@/types/user";

export const uselogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ json }: any) => {
      const respone = await api.post<User>("/login", json);
      console.log(respone);
      if (respone.statusText !== "OK") {
        throw new Error("Failed to log in");
      }
      localStorage.setItem(ACCESS_TOKEN_KEY, respone.data.token);
      localStorage.setItem(REFRESH_TOKEN_KEY, respone.data.refreshToken);

      return respone.data.token;
    },
    onSuccess: () => {
      toast.success("Logged in");
      navigate(0);
    },
    onError: () => {
      toast.error("Failed to log in.");
    },
  });

  return mutation;
};
