import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Configuração do Nodemailer
    // Para funcionar em produção, você precisará configurar um serviço de SMTP (ex: Gmail, SendGrid, Resend)
    // no arquivo .env ou nas variáveis de ambiente do seu provedor de hospedagem.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER || 'no-reply@sitesespeciais.com',
      to: 'rvstecnologia@gmail.com',
      subject: `Novo Contato - Diagnóstico Gratuito: ${data.nome}`,
      text: `
Novo Contato - Diagnóstico Gratuito

Nome: ${data.nome}
Empresa: ${data.empresa}
Cidade: ${data.cidade}
Já possui site: ${data.possuiSite}
WhatsApp: ${data.whatsapp}
E-mail: ${data.email}
Melhor horário: ${data.horario}
      `,
    }

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions)
      console.log('E-mail enviado com sucesso para rvstecnologia@gmail.com')
    } else {
      console.log('E-mail não enviado: Credenciais SMTP não configuradas no .env')
      console.log('Conteúdo do e-mail simulado:', mailOptions.text)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 })
  }
}
