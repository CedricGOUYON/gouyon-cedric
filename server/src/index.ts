import cors from "cors";
import "dotenv/config";
import type { NextFunction, Request, Response } from "express";
import express from "express";
import { db } from "../services/db/index.js";
import { initDB } from "../services/db/initDB.js";
import apiRoutes from "./routes/api.js";

const app = express();
const PORT = process.env.SERVER_PORT || 3310;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	cors({
		origin: CLIENT_URL,
		credentials: true,
		optionsSuccessStatus: 200,
	}),
);

app.use("/api", apiRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err);
	res.status(500).send("Erreur serveur");
});

db.query("SELECT 1")
	.then(async () => {
		const dbName = process.env.DATABASE_URL
			? new URL(process.env.DATABASE_URL).pathname.substring(1)
			: process.env.PGDATABASE;

		console.log(`
=========================
🟢 DATABASE
=========================
`);
		console.log(`Using database ${dbName}`);

		try {
			await initDB();

			console.log(`Connexion réussie à la base ${dbName}`);

			if (process.env.NODE_ENV === "development") {
				console.log("PGUSER:", process.env.PGUSER);
				console.log("PGDATABASE:", process.env.PGDATABASE);
				console.log("PGHOST:", process.env.PGHOST);
				console.log("PGPORT:", process.env.PGPORT);
				console.log("PGPASSWORD: 🔒");
			}

			app.listen(PORT, () => {
				console.log(`
=========================
🟢 SERVER
=========================
`);
				console.log(`Serveur lancé sur http://localhost:${PORT}`);
			});
		} catch (err: unknown) {
			console.error("🔴 Erreur init DB:", (err as Error).message);
			process.exit(1);
		}
	})
	.catch((err: unknown) => {
		console.error("Erreur de connexion PostgreSQL :", err);
		process.exit(1);
	});
