
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import api from "../api";
import { Item } from "@/types/item";

export const useCreateProject= ({json}: any) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async () => {
            const respone = await api.post<Item>("/items",json)
            if(respone.statusText !==  "OK") {
                throw new Error("Failed to create item.")
              }
            var data = respone.data;
            return data;
        },
        onSuccess: () => {
            toast.success("Items created.")
            queryClient.invalidateQueries({ queryKey: ["items"] })

        },
        onError: ()=> {
            toast.error("Failed to create project.")

        }
    })

    return mutation;
}