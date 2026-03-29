import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // Message length check
    if (message.trim().length < 10) {
      return NextResponse.json({ error: 'Message too short.' }, { status: 400 })
    }

    // Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,  // your gmail
        pass: process.env.GMAIL_PASS,  // gmail app password (not your real password)
      },
    })

    // Email that lands in YOUR inbox — the notification
    const notificationMail = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📬 New message from ${name} — Portfolio`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #0a0a0a; color: #e0e0e0; margin: 0; padding: 0; }
              .wrapper { max-width: 560px; margin: 40px auto; background: #141414; border: 1px solid #2a2a2a; border-radius: 6px; overflow: hidden; }
              .header { background: linear-gradient(135deg, #1a1a1a, #222); padding: 28px 32px; border-bottom: 1px solid #2a2a2a; }
              .header h1 { margin: 0; font-size: 1.1rem; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: #fff; }
              .header p { margin: 6px 0 0; font-size: 0.78rem; color: #666; letter-spacing: 0.05em; }
              .body { padding: 28px 32px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase; color: #555; margin-bottom: 6px; }
              .value { font-size: 0.95rem; color: #ddd; line-height: 1.6; }
              .message-box { background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 4px; padding: 16px; margin-top: 6px; }
              .reply-btn { display: inline-block; margin-top: 24px; padding: 12px 28px; background: #fff; color: #000; text-decoration: none; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; border-radius: 3px; }
              .footer { padding: 16px 32px; border-top: 1px solid #1e1e1e; font-size: 0.7rem; color: #444; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="header">
                <h1>New Portfolio Message</h1>
                <p>Someone reached out via your portfolio contact form</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">From</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color:#aaa;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box value">${message.replace(/\n/g, '<br/>')}</div>
                </div>
                <a href="mailto:${email}" class="reply-btn">Reply to ${name}</a>
              </div>
              <div class="footer">
                Sent from sarthakgomber.dev portfolio · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Auto-reply email that goes to the SENDER — professional touch
    const autoReplyMail = {
      from: `"Sarthak Gomber" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name.split(' ')[0]}!`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #0a0a0a; color: #e0e0e0; margin: 0; padding: 0; }
              .wrapper { max-width: 560px; margin: 40px auto; background: #141414; border: 1px solid #2a2a2a; border-radius: 6px; overflow: hidden; }
              .header { background: linear-gradient(135deg, #1a1a1a, #222); padding: 28px 32px; border-bottom: 1px solid #2a2a2a; }
              .header h1 { margin: 0; font-size: 1.1rem; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: #fff; }
              .body { padding: 28px 32px; font-size: 0.95rem; line-height: 1.8; color: #bbb; }
              .body p { margin: 0 0 16px; }
              .name { color: #fff; font-weight: 500; }
              .divider { height: 1px; background: #2a2a2a; margin: 20px 0; }
              .sig { font-size: 0.82rem; color: #666; }
              .sig strong { color: #aaa; display: block; margin-bottom: 4px; }
              .footer { padding: 16px 32px; border-top: 1px solid #1e1e1e; font-size: 0.7rem; color: #444; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="header">
                <h1>Sarthak Gomber</h1>
              </div>
              <div class="body">
                <p>Hey <span class="name">${name.split(' ')[0]}</span>,</p>
                <p>Thanks for reaching out! I've received your message and will get back to you as soon as possible — usually within 24 hours.</p>
                <p>Looking forward to connecting.</p>
                <div class="divider"></div>
                <div class="sig">
                  <strong>Sarthak Gomber</strong>
                  Full Stack Developer · New Delhi, India<br/>
                  sarthakgomber@gmail.com<br/>
                  linkedin.com/in/sarthakgomber
                </div>
              </div>
              <div class="footer">
                This is an automated reply — please don't reply to this email directly.
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send both emails
    await transporter.sendMail(notificationMail)
    await transporter.sendMail(autoReplyMail)

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try emailing directly.' },
      { status: 500 }
    )
  }
}