import { httpClient } from "@/shared/api/http-client";

import type { ForgotPasswordRequest, LoginRequest } from "../model/auth.types";

const AUTH_ENDPOINT = "/web/auth";

export const authApi = {
  login: async (request: LoginRequest): Promise<void> => {
    await httpClient.post(`${AUTH_ENDPOINT}/login`, request);
  },

  forgotPassword: async (request: ForgotPasswordRequest): Promise<void> => {
    await httpClient.post(`${AUTH_ENDPOINT}/password/forgot`, request);
  },
};
