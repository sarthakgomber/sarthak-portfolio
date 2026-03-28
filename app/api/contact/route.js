import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Option 1: Using Resend (recommended — free tier is generous)
    // 1. Sign up at resend.com
    // 2. Add RESEND_API_KEY to your .env.local
    // 3. Uncomment the block below and remove the placeholder response

    /*
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'sarthakgomber@gmail.com',
      subject: `Portfolio message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })
    */

    // PLACEHOLDER: Remove this and uncomment above once Resend is set up
    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}