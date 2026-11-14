import { useMutation } from "@tanstack/react-query";

import { authApi } from "@/entities/session";

export function useLoginMutation() {
  return useMutation({
    mutationFn: authApi.login,
  });
}
