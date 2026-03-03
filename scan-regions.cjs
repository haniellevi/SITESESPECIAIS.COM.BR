const { Pool } = require('pg')

const regions = [
  'sa-east-1',
  'us-east-1',
  'us-east-2',
  'us-west-1',
  'us-west-2',
  'eu-central-1',
  'eu-west-1',
  'eu-west-2',
  'eu-west-3',
  'ap-northeast-1',
  'ap-northeast-2',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-south-1',
  'ca-central-1',
]

async function testRegion(region) {
  const url = `postgresql://postgres.wawrkbivzguewgkrdigq:Texugo12%21%40%21%40@aws-0-${region}.pooler.supabase.com:6543/postgres?pgbouncer=true`
  const pool = new Pool({
    connectionString: url,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 3000,
  })

  try {
    const client = await pool.connect()
    await client.query('SELECT 1')
    console.log(`[SUCCESS] Region found: ${region}`)
    client.release()
    return url
  } catch (err) {
    // console.log(`[FAILED] ${region}:`, err.message);
    return null
  } finally {
    await pool.end()
  }
}

async function main() {
  console.log('Scanning all Supabase pooler regions...')
  const promises = regions.map((r) => testRegion(r))
  const results = await Promise.all(promises)
  const found = results.find((r) => r !== null)

  if (found) {
    console.log('--- WORKING POOLER URL ---')
    console.log(found)
  } else {
    console.log('No region worked.')
  }
  process.exit(0)
}
main()
