import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import viteCompression from "vite-plugin-compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const isProduction = mode === "production";
	const rootDir = path.resolve(__dirname, "..");
	const projectFolderName = path.basename(rootDir);

	return {
		plugins: [
			react(),
			isProduction && viteCompression({ algorithm: "brotliCompress" }),
			isProduction && viteCompression({ algorithm: "gzip" }),
		].filter(Boolean),
		define: {
			"import.meta.env.VITE_PROJECT_NAME": JSON.stringify(projectFolderName),
			"import.meta.env.VITE_API_URL": isProduction
				? JSON.stringify("/api")
				: JSON.stringify(env.VITE_API_URL),
		},
		build: {
			outDir: "dist",
			minify: "terser",
			cssCodeSplit: true, // Évite de charger tout le CSS d'un coup
			terserOptions: {
				compress: { drop_console: true, drop_debugger: true },
				format: { comments: false },
			},
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes("node_modules")) {
							if (id.includes("react-dom") || id.includes("react-router")) return "vendor-core";
							if (id.includes("react-pdf")) return "vendor-pdf";
							return "vendor-others";
						}
					},
				},
			},
		},
	};
});
