import pkg from "pg";

const { Pool } = pkg;

const PGUSER = process.env.PGUSER || "postgres";
const PGPASSWORD = process.env.PGPASSWORD || "password";
const PGHOST = process.env.PGHOST || "localhost";
const PGPORT = process.env.PGPORT || "5432";
const PGDATABASE = process.env.PGDATABASE || "project name";

const connectionString = process.env.DATABASE_URL
	? process.env.DATABASE_URL
	: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

export const db = new Pool({
	connectionString,
	ssl:
		process.env.NODE_ENV === "production"
			? { rejectUnauthorized: false }
			: false,
});

const dbName = process.env.DATABASE_URL
	? new URL(process.env.DATABASE_URL).pathname.substring(1)
	: PGDATABASE;

console.log(`Using database ${dbName}`);
