import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useGetAllSkill = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const { data } = await AxiosSecure.get("/skill");
      return data;
    },
  });
};
