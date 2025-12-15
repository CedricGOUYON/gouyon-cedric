interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_PROJECT_NAME: string;
}

/* biome-ignore lint/correctness/noUnusedVariables: Nécessaire pour la fusion de types globale dans TypeScript/Vite. */
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
