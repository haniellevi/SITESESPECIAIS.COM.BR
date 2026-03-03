const { Pool } = require('pg')

const url =
  'postgresql://postgres.wawrkbivzguewgkrdigq:Texugo12!@!@@aws-1-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true'

async function test(url) {
  console.log('Testing:', url.replace('Texugo12!@!@', '***'))
  const pool = new Pool({
    connectionString: url,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 5000,
  })

  try {
    const client = await pool.connect()
    const res = await client.query('SELECT NOW()')
    console.log(' SUCCESS!')
    console.log(res.rows[0])
    client.release()
    return true
  } catch (err) {
    console.log(' FAILED:', err.message)
    return false
  } finally {
    await pool.end()
  }
}

test(url).then(() => process.exit(0))
