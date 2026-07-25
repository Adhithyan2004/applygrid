import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../lib/api";
import { DashboardData } from "../types/dashboardTypes";

export const useDashboard = () => {
  return useQuery<DashboardData>({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
  });
};
