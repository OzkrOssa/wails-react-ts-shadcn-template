import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src", // Cambia '/src' por la ruta a tu directorio de código fuente
    },
  },
  plugins: [react()],
});
