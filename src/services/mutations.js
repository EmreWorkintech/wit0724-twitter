import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTweet, deleteTweet } from "./api";

export function useCreateTweet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweets"] });
    },
  });
}

export function useDeleteTweet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweets"] });
    },
  });
}
