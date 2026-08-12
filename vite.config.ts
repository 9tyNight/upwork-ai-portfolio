import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/upwork-ai-portfolio/",
  plugins: [react()],
});
