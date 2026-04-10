import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  const authHeader = req.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  // Se houver uma secret configurada, validar o token
  if (cronSecret && cronSecret !== 'YOUR_CRON_SECRET_HERE') {
    if (authHeader !== `Bearer ${cronSecret}`) {
      return new Response('Unauthorized', { status: 401 })
    }
  }

  try {
    const payload = await getPayload({ config })
    
    // Consulta simples para garantir atividade no banco
    await payload.find({
      collection: 'users',
      limit: 1,
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Database active',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Keep-alive failed:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to wake database' 
    }, { status: 500 })
  }
}
