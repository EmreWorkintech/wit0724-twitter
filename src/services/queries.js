import { useQuery } from "@tanstack/react-query";
import { getTweets } from "./api";

export function useGetTweets() {
  return useQuery({
    queryKey: ["tweets"],
    queryFn: getTweets,
    staleTime: 20000,
  });
}
