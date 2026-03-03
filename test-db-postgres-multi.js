import postgres from 'postgres'

const urls = [
  'postgresql://postgres.wawrkbivzguewgkrdigq:Texugo12%21%40%21%40@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true',
  'postgresql://postgres:Texugo12%21%40%21%40@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true',
  'postgresql://postgres.wawrkbivzguewgkrdigq:Texugo12%21%40%21%40@aws-0-sa-east-1.pooler.supabase.com:5432/postgres',
  'postgresql://postgres:Texugo12%21%40%21%40@aws-0-sa-east-1.pooler.supabase.com:5432/postgres',
  'postgresql://postgres:Texugo12%21%40%21%40@db.wawrkbivzguewgkrdigq.supabase.co:5432/postgres',
]

async function test(url) {
  console.log('Testing:', url.replace('Texugo12%21%40%21%40', '***'))
  const sql = postgres(url, { ssl: 'require', max: 1 })
  try {
    const res = await sql`SELECT 1 as result`
    console.log(' SUCCESS!', res)
    await sql.end()
    return true
  } catch (err) {
    console.log(' FAILED:', err.message)
    await sql.end()
    return false
  }
}

async function main() {
  for (const url of urls) {
    try {
      const works = await test(url)
      if (works) {
        console.log('--- THIS ONE WORKS ---')
        console.log(url)
        process.exit(0)
      }
    } catch (e) {
      console.log(' FATAL:', e.message)
    }
  }
}
main()
