import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(__dirname, process.env.PEM_KEY_PATH || "ssl/key.pem")
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, process.env.PEM_CERT_PATH || "ssl/cert.pem")
      ),
    },
    port: 5173,
  },
});
