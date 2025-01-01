import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useGetAllBlog = () => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const { data } = await AxiosSecure.get("/blog");
      return data;
    },
  });
};
export const useGetSingleBlog = (id) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const { data } = await AxiosSecure.get(`/blog/${id}`);
      return data;
    },
  });
};
