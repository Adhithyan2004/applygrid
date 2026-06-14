import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplication } from "../lib/api";

export const useUpdateApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateApplication,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["applications"],
      });
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
};
