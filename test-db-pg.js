import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

const connectionString = process.env.DATABASE_URL

console.log('Testing PG Pool connection...')

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
})

async function test() {
  try {
    const client = await pool.connect()
    console.log('CONNECTED successfully!')
    const res = await client.query('SELECT NOW()')
    console.log('QUERY SUCCESS:', res.rows[0])
    client.release()
    await pool.end()
    process.exit(0)
  } catch (err) {
    console.error('CONNECTION FAILED:', err)
    process.exit(1)
  }
}

test()
