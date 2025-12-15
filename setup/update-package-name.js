import fs from "node:fs";
import path from "node:path";

const rootFolderName = path.basename(path.resolve());

const constantsPath = path.resolve("setup/constants.ts");
if (fs.existsSync(constantsPath)) {
	let constantsContent = fs.readFileSync(constantsPath, "utf8");

	if (constantsContent.includes("PENDING_GENERATION")) {
		constantsContent = constantsContent.replace(
			/PENDING_GENERATION/g,
			rootFolderName,
		);
		fs.writeFileSync(constantsPath, constantsContent);
		console.log(`🟢 constants.ts mis à jour avec : ${rootFolderName}`);
	} else {
		console.log(
			"🔴 Aucune occurrence 'PENDING_GENERATION' trouvée dans constants.ts",
		);
	}
} else {
	console.log("🔴 Fichier constants.ts introuvable");
}

function updateEnv(envPath) {
	if (fs.existsSync(envPath)) {
		let envContent = fs.readFileSync(envPath, "utf8");

		if (/PGDATABASE=/.test(envContent)) {
			envContent = envContent.replace(
				/PGDATABASE=.*/,
				`PGDATABASE=${rootFolderName}`,
			);
		} else {
			envContent += `\nPGDATABASE=${rootFolderName}`;
		}

		fs.writeFileSync(envPath, envContent);
		console.log(`🟢 ${envPath} mis à jour avec PGDATABASE=${rootFolderName}`);
	} else {
		console.log(`🔴 Aucun fichier .env trouvé à ${envPath}`);
	}
}

updateEnv(path.resolve("server/.env"));
updateEnv(path.resolve("client/.env"));
updateEnv(path.resolve(".env"));

console.log("🟢 Mise à jour terminée.");
