import { useMutation } from "@tanstack/react-query";

import { authApi } from "@/entities/session";

export function useForgotPasswordMutation() {
  return useMutation({
    mutationFn: authApi.forgotPassword,
  });
}
