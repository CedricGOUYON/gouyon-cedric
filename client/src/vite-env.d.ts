interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_PROJECT_NAME: string;
}

/* biome-ignore lint/correctness/noUnusedVariables: Nécessaire pour la fusion de types globale dans TypeScript/Vite. */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
