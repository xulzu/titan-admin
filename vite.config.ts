import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 2222,
  },
  base: "/titan-admin/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
