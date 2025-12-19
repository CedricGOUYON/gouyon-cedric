import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import type { ConfigEnv } from "vite";
import { defineConfig, loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isDevelopment = mode === "development";

  const rootDir = path.resolve(__dirname, "..");

  const projectFolderName = path.basename(rootDir);

  console.log(`\n=========================\n🟢 LOCAL CONFIG (ESM)\n=========================\n`);
  console.log(`API         : ${isDevelopment ? env.VITE_API_URL : "/api"}`);
  console.log(`DOTENV      : Variables injectées depuis .env (mode: ${mode})`);
  console.log(`CALCULATED PROJECT NAME: ${projectFolderName}`);
  const proxyConfig = isDevelopment
    ? {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      }
    : undefined;

  return {
    plugins: [react()],

    server: {
      proxy: proxyConfig,
    },

    define: {
      "import.meta.env.VITE_PROJECT_NAME": JSON.stringify(projectFolderName),
      "import.meta.env.VITE_API_URL": isDevelopment ? JSON.stringify(env.VITE_API_URL) : JSON.stringify("/api"),
    },

    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  };
});
