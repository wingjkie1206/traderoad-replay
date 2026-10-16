import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base so the same build works on GitHub Pages project URLs and CDNs.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  server: { host: "127.0.0.1", port: 5174 },
  build: { outDir: "dist", emptyOutDir: true },
});
