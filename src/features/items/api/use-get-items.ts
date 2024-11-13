import { useQuery } from "@tanstack/react-query";
import api from "../../../api/api";
import { Item } from "../types";
type UseGetItemsProps = {
    keyword : string;
}
export const useGetItems= ({keyword}: UseGetItemsProps) => {
  const query = useQuery({
    queryKey: ["items",keyword],
    queryFn: async () => {
      try {
        const respone = await api.get<Item[]>("/items",{params: {keyword}})
        if (respone.statusText !== "OK") {
          return null;
      }
        const data = respone.data
        return data;
      } catch (error) {
        return null;
      }
    },
  });

  return query;
};
