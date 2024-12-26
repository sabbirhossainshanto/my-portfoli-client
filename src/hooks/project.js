import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useGetAllProject = () => {
  return useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const { data } = await AxiosSecure.get("/project");
      return data;
    },
  });
};
