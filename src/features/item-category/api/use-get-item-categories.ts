import { useQuery } from "@tanstack/react-query";
import api from "../../../api/api";
import { ItemCategories } from "../types";
type UseGetItemCategoriesProps = {
  keyword: string | null;
  page: number;
  pageSize: number;
};
export const useGetItemCategories = ({
  keyword,
  page,
  pageSize,
}: UseGetItemCategoriesProps) => {
  const query = useQuery({
    queryKey: ["itemCategories", keyword],
    queryFn: async () => {
      try {
        const respone = await api.get<ItemCategories>("/itemCategories", {
          params: { keyword,page,pageSize },
        });
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
