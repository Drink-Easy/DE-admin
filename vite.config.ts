import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: (process.env.SSL_KEY || "").replace(/\\n/g, "\n"),
      cert: (process.env.SSL_CERT || "").replace(/\\n/g, "\n"),
    },
    port: 5173,
  },
});
