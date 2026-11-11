import path from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },

  server: {
    host: "localhost",
    port: 5173,
    strictPort: false,
  },

  preview: {
    host: "localhost",
    port: 4173,
    strictPort: true,
  },

  build: {
    target: "es2022",
    sourcemap: mode !== "production",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
  },

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
}));
