
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"
import api from "../api";


export const uselogin = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (json) => {
            const respone = await api.post("/login",json)
            if(respone.statusText !== "ok") {
                throw new Error("Failed to log in")
              }
            return await respone.data
        },
        onSuccess: () => {
            toast.success("Logged in")
            navigate(0);
            queryClient.invalidateQueries({ queryKey: ["current"] })

        },
        onError: ()=> {
            toast.error("Failed to log in.")
        }
    })

    return mutation;
}