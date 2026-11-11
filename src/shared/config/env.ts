import { z } from "zod";

const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url(),
  VITE_APP_NAME: z.string().min(1),
});

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error("Invalid application configuration:", parsedEnv.error);

  throw new Error("Application configuration is invalid");
}

export const env = parsedEnv.data;
