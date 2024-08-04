/// <reference types="vitest"/>
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 400000,
    cssMinify: true,
    minify: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [
      "./src/settings/vitest.setup.ts",
      "./src/mocks/browser.mocks.ts",
    ],
    include: ["src/**/*.{test,spect}.{js,ts,jsx,tsx}"],
    css: true,
  },
});
