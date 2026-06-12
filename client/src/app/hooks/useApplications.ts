import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../lib/api";
import { Application } from "../types/types";

export const useApplicaitons = () => {
  return useQuery<Application[]>({
    queryKey: ["applications"],
    queryFn: getApplications,
  });
};
