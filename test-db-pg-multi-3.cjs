const { Pool } = require('pg')

const urls = [
  'postgresql://postgres.wawrkbivzguewgkrdigq:texugo12Texugo@aws-1-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true',
  'postgresql://postgres:texugo12Texugo@aws-1-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true',
  'postgresql://postgres.wawrkbivzguewgkrdigq:texugo12Texugo@aws-1-sa-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true',
  'postgresql://postgres:texugo12Texugo@aws-1-sa-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true',
  'postgresql://postgres:texugo12Texugo@db.wawrkbivzguewgkrdigq.supabase.co:5432/postgres',
]

async function test(url) {
  console.log('Testing:', url.replace('texugo12Texugo', '***'))
  const pool = new Pool({
    connectionString: url,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 5000,
  })

  try {
    const client = await pool.connect()
    const res = await client.query('SELECT NOW()')
    console.log(' SUCCESS!')
    client.release()
    return true
  } catch (err) {
    console.log(' FAILED:', err.message)
    return false
  } finally {
    await pool.end()
  }
}

async function main() {
  for (const url of urls) {
    const works = await test(url)
    if (works) {
      console.log('--- THIS ONE WORKS ---')
      console.log(url)
    }
  }
  process.exit(0)
}
main()
