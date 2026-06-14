import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../lib/api";
import { Application } from "../types/types";

// TODO movce type to api make it look cleaner
export const useApplicaitons = () => {
  return useQuery<Application[]>({
    queryKey: ["applications"],
    queryFn: getApplications,
  });
};
