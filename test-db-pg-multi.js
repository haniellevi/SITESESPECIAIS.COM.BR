import pg from 'pg'

const urls = [
  'postgresql://postgres.wawrkbivzguewgkrdigq:Texugo12%21%40%21%40@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
  'postgresql://postgres:Texugo12%21%40%21%40@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
  'postgresql://postgres.wawrkbivzguewgkrdigq:Texugo12%21%40%21%40@aws-0-sa-east-1.pooler.supabase.com:5432/postgres',
  'postgresql://postgres:Texugo12%21%40%21%40@aws-0-sa-east-1.pooler.supabase.com:5432/postgres',
  'postgresql://postgres:Texugo12%21%40%21%40@db.wawrkbivzguewgkrdigq.supabase.co:5432/postgres',
]

async function test(url) {
  console.log('Testing:', url.replace('Texugo12%21%40%21%40', '***'))
  const pool = new pg.Pool({
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
      process.exit(0)
    }
  }
}
main()
