import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useGetAllExperience = () => {
  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      const { data } = await AxiosSecure.get("/experience");
      return data;
    },
  });
};
