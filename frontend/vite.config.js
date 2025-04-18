import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use environment variables to handle different backends for dev and prod
const backendUrl = process.env.VITE_API_URL || 'http://localhost:3000'; // Default to local if not set

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": backendUrl,     // Proxy to the API URL from environment
      "/uploads": backendUrl, // Proxy to uploads
    },
  },
});
