import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // This must match your GitHub Pages repo path: https://parashargawande.github.io/notepad/
  base: "/notepad/",
  server: {
    port: 5173
  }
});


