/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTest.ts"],
    coverage: {
      include: ["src/**/*.tsx", "src/**/*.ts"],
      exclude: ["src/main.tsx"],
    },
  },
});
