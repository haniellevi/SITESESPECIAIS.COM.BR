import dotenv from 'dotenv'
dotenv.config()

import { getPayload } from 'payload'
import configPromise from './src/payload.config.ts'

async function test() {
  try {
    console.log('Initializing Payload...')
    const config = await configPromise
    const payload = await getPayload({ config })
    console.log('Payload initialized!')

    const users = await payload.find({
      collection: 'users',
    })
    console.log('Users found:', users.docs.length)
    process.exit(0)
  } catch (err) {
    console.error('PAYLOAD INIT ERROR:', JSON.stringify(err, Object.getOwnPropertyNames(err), 2))
    process.exit(1)
  }
}

test()
