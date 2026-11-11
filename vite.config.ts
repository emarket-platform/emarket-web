import path from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";

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

    clearMocks: true,
    restoreMocks: true,

    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      exclude: [
        "node_modules/",
        "dist/",
        "coverage/",
        "src/test/**",
        "**/*.d.ts",
        "**/*.config.*",
      ],
    },
  },
}));
