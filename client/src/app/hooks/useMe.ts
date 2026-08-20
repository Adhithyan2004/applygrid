import { useQuery } from "@tanstack/react-query";
import { getMe } from "../lib/api";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });
};
