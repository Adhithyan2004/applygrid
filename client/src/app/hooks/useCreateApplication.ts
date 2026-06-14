import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createApplication } from "../lib/api";

export const useCreateApplication = () => {
  const queryClient = useQueryClient();

  //   Reason for giving both keys is after adding application 
  // both dashboard and application page!
  return useMutation({
    mutationFn: createApplication,
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
