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
export const useGetSingleProject = (id) => {
  return useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const { data } = await AxiosSecure.get(`/project/${id}`);
      return data;
    },
  });
};
