import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { ItemCategory } from "../types";
import api from "@/api/api";
import { updateItemCategorySchema } from "../schemas";
import { z } from "zod";


export const useUpdateItemCategory= () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<ItemCategory, Error, z.infer<typeof updateItemCategorySchema>>({
        mutationFn: async (form) => {
            const respone = await api.patch<ItemCategory>("/itemCategories",form)
            console.log(respone)
            if(respone.status !== 201) {
                throw new Error("Failed to update category.")
            }
            return  respone.data;
        },
        onSuccess: () => {
            toast.success("Category updated.")
            queryClient.invalidateQueries({ queryKey: ["itemCategories"] })

        },
        onError: ()=> {
            toast.error("Failed to update category.")

        }
    })

    return mutation;
}