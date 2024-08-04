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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
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
