// hooks/useLogout.ts

"use client";

import { useMutation } from "@tanstack/react-query";
import { logout } from "../lib/api";

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
