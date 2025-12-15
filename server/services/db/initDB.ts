import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { db } from "./index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initDB() {
	try {
		const schemaPath = path.resolve(
			__dirname,
			"../../database/script/schema.sql",
		);

		const schema = readFileSync(schemaPath, "utf-8");

		const client = await db.connect();

		try {
			await client.query(schema);
			console.log("Base de données initialisée avec toutes les tables");
		} finally {
			client.release();
		}
	} catch (error) {
		if (error instanceof Error && "code" in error && error.code === "42710") {
			console.log(
				"Base de données initialisée avec toutes les tables (type ENUM déjà existant)",
			);
			return;
		}
		console.error("Erreur lors de l'initialisation de la base :", error);
	}
}
