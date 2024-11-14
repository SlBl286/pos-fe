import { useQuery } from "@tanstack/react-query";
import api from "../../../api/api";
import { ItemCategoriesPaged } from "../types";
type UseGetItemCategoriesProps = {
  keyword: string | null;
  pageIndex: number;
  pageSize: number;
};
export const useGetItemCategoriesPaged = ({
  keyword,
  pageIndex,
  pageSize,
}: UseGetItemCategoriesProps) => {
  const query = useQuery<any,Error,ItemCategoriesPaged>({
    queryKey: ["itemCategoriesPaged", keyword,pageIndex,pageSize],
    queryFn: async () => {
      try {
        const respone = await api.get<ItemCategoriesPaged>("/itemCategoriesPaged", {
          params: { keyword,page:pageIndex,pageSize },
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
