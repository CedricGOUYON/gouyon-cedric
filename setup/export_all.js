import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputFile = "export_all.md";

const excludedPaths = ["node_modules", "build", "dist", "client/dist", "server/dist", "logs", ".vscode", ".idea", ".vite", "client/.vite", ".git"];

const excludedFiles = [".DS_Store", "npm-debug.log"];
const excludedExtensions = [".tsbuildinfo", ".log"];

function detectLanguage(file) {
  const ext = path.extname(file).slice(1);
  const map = {
    js: "javascript",
    ts: "typescript",
    sh: "bash",
    css: "css",
    html: "html",
    py: "python",
    json: "json",
    yml: "yaml",
    yaml: "yaml",
    tsx: "tsx",
    md: "markdown",
  };
  return map[ext] || "";
}

function isExcluded(filePath) {
  const normalized = filePath.replace(/\\/g, "/");
  return excludedPaths.some((folder) => normalized.includes(`${folder}/`)) || excludedFiles.some((name) => path.basename(normalized) === name) || excludedExtensions.some((ext) => normalized.endsWith(ext));
}

function isBinary(buffer) {
  let nonAscii = 0;
  for (const byte of buffer) {
    if (byte > 127) nonAscii++;
  }
  return buffer.length > 0 && nonAscii / buffer.length > 0.3;
}

function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (isExcluded(`${fullPath}/`)) return [];
      return getAllFiles(fullPath);
    }
    return fullPath;
  });
}

let output = "## CONTENU DU PROJET \n";

const currentDir = process.cwd();

const allFiles = getAllFiles(currentDir)
  .filter((f) => {
    const base = path.basename(f);
    return fs.existsSync(f) && base !== outputFile && base !== path.basename(__filename) && !isExcluded(f);
  })
  .sort();

for (const file of allFiles) {
  const lang = detectLanguage(file);
  const raw = fs.readFileSync(file);

  if (isBinary(raw)) {
    output += `\n### \`${file}\`\n⚠️ **Fichier ignoré (format binaire)**\n`;
    continue;
  }

  const content = raw.toString("utf8");
  output += `\n### \`${file}\`\n\`\`\`${lang}\n${content}\n\`\`\`\n`;
}

fs.writeFileSync(outputFile, output, "utf8");
console.log(`✅ ${outputFile} généré avec succès !`);
