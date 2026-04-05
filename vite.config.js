import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/fullstack-auth-app/",
  plugins: [react()],
});
