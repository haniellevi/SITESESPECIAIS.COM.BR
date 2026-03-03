import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

console.log('Testing Postgres Connection...');

async function test() {
    const sql = postgres(connectionString, {
        prepare: false,
        ssl: 'require'
    });

    try {
        const result = await sql`SELECT version()`;
        console.log('QUERY SUCCESS:', result);
        process.exit(0);
    } catch (err) {
        console.error('QUERY FAILED:', err);
        process.exit(1);
    }
}

test();
