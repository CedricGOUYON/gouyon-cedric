import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { Client } from "pg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve("server/.env") });

const DB_NAME = process.env.PGDATABASE;

const SQL_SCRIPT_PATH = path.join(__dirname, "script", "schema.sql");

const baseConfig = {
	host: process.env.PGHOST,
	port: Number(process.env.PGPORT),
	user: process.env.PGUSER,
	password: String(process.env.PGPASSWORD || ""),
};

async function initDb() {
	let tempClient;
	let finalClient;

	try {
		console.log(
			`Tentative de connexion à PostgreSQL pour vérifier/créer la DB "${DB_NAME}"...`,
		);

		tempClient = new Client({ ...baseConfig, database: "postgres" });
		await tempClient.connect();

		const res = await tempClient.query(
			`SELECT 1 FROM pg_database WHERE datname = $1`,
			[DB_NAME],
		);

		if (res.rowCount === 0) {
			console.log(`Base de données "${DB_NAME}" non trouvée. Création...`);

			await tempClient.query(`CREATE DATABASE "${DB_NAME}"`);

			console.log(`🟢 Base de données "${DB_NAME}" créée avec succès.`);
		} else {
			console.log(
				`Base de données "${DB_NAME}" existe déjà. Initialisation des tables...`,
			);
		}

		await tempClient.end();

		finalClient = new Client({ ...baseConfig, database: DB_NAME });
		await finalClient.connect();

		const sql = fs.readFileSync(SQL_SCRIPT_PATH, "utf8");
		await finalClient.query(sql);

		console.log("🟢 Tables et Types créés/mis à jour.");
	} catch (err) {
		if (err.code === "ENOENT") {
			console.error(
				`🔴 Erreur init DB: Le fichier SQL est introuvable au chemin : ${SQL_SCRIPT_PATH}`,
			);
		} else {
			console.error("🔴 Erreur init DB:", err.message);
		}
	} finally {
		if (finalClient) await finalClient.end();
	}
}

initDb();
