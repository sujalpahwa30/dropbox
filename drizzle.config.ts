// import { defineConfig }  from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set in .env.local");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    schema: "./lib/db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
    migrations: {
        table: "__drizzle_migrations",
        schema: "public",
    },
    verbose: true,
    strict: true,
};