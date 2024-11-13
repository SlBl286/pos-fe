import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { ItemCategory } from "../types";
import api from "@/api/api";
import { createItemCategorySchema } from "../schemas";
import { z } from "zod";


export const useCreateItemCategory= () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<ItemCategory, Error, z.infer<typeof createItemCategorySchema>>({
        mutationFn: async (form) => {
            const respone = await api.post<ItemCategory>("/itemCategories",form)
            console.log(respone)
            if(respone.status !== 201) {
                throw new Error("Failed to create category.")
            }
            return  respone.data;
        },
        onSuccess: () => {
            toast.success("Category created.")
            queryClient.invalidateQueries({ queryKey: ["itemCategories"] })

        },
        onError: ()=> {
            toast.error("Failed to create category.")

        }
    })

    return mutation;
}