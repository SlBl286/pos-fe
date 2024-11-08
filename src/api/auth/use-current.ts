
import { useQuery } from "@tanstack/react-query"
import api from "../api";
import { User } from "@/types/user";
export const useCurrent = () => {
    const query = useQuery({
        queryKey: ["current"],
        queryFn: async () => {
            try {
                const respone = await api.get<User>("/current")
                if (respone.statusText !== "OK") {
                    return null;
                }
                console.log(respone)
                var {data} = respone;
                return data
            }
            catch(error){
                return null;
            }
        }
    })

    return query;
}