import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('DATABASE_URL is not defined in .env');
  process.exit(1);
}

console.log('Testing connection to:', connectionString.split('@')[1]);

const client = postgres(connectionString, { prepare: false });
const db = drizzle(client);

async function main() {
  try {
    const result = await client`SELECT 1 as connected`;
    console.log('Successfully connected!', result);
    process.exit(0);
  } catch (error) {
    console.error('Connection failed:');
    console.error(error);
    process.exit(1);
  }
}

main();
