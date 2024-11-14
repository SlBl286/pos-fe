import { useQuery } from "@tanstack/react-query";
import api from "../../../api/api";
import { ItemCategories } from "../types";

export const useGetItemCategories = () => {
  const query = useQuery<any,Error,ItemCategories>({
    queryKey: ["itemCategories"],
    queryFn: async () => {
      try {
        const respone = await api.get<ItemCategories>("/itemCategories");
        if (respone.status !== 200) {
          return null;
        }
        const data = respone.data;
        console.log(data)
        return data;
      } catch (error) {
        return null;
      }
    },
  });

  return query;
};
