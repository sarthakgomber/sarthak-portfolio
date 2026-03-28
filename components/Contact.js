'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const contactItems = [
    { label: 'Email',    value: 'sarthakgomber@gmail.com', href: 'mailto:sarthakgomber@gmail.com' },
    { label: 'LinkedIn', value: '/in/sarthakgomber',       href: 'https://www.linkedin.com/in/sarthakgomber' },
    { label: 'Phone',    value: '+91 7827493342',           href: 'tel:+917827493342' },
    { label: 'Location', value: 'New Delhi, India',         href: null },
  ]

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrap" style={{ paddingBottom: '10rem' }}>
        <p className="chrome-label" style={{ marginBottom: '1rem' }}>Contact</p>
        <h2 className="chrome-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '0.5rem' }}>Let's Build Something</h2>
        <div className="chrome-line" style={{ marginBottom: '3.5rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left — contact info */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.92rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.72)',
              marginBottom: '2.5rem',
            }}>
              Whether you want to collaborate, discuss an opportunity, or just talk tech — I'm always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {contactItems.map(item => (
                <div key={item.label}>
                  <p className="chrome-label" style={{ marginBottom: '0.25rem', fontSize: '0.58rem' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.88rem',
                        color: 'rgba(255,255,255,0.78)',
                        textDecoration: 'none',
                        transition: 'color 0.25s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.92)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.78)' }}>
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { name: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
              { name: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
            ].map(f => (
              <div key={f.name}>
                <p className="chrome-label" style={{ marginBottom: '0.5rem', fontSize: '0.58rem' }}>{f.label}</p>
                <input
                  className="chrome-input"
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  required
                />
              </div>
            ))}

            <div>
              <p className="chrome-label" style={{ marginBottom: '0.5rem', fontSize: '0.58rem' }}>Message</p>
              <textarea
                className="chrome-input"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind..."
                required
                rows={5}
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" disabled={status === 'sending'} className="chrome-btn chrome-btn-primary"
              style={{ marginTop: '0.5rem', opacity: status === 'sending' ? 0.6 : 1 }}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(180,255,180,0.7)', letterSpacing: '0.08em' }}>
                ✓ Message sent.
              </p>
            )}
            {status === 'error' && (
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,160,160,0.7)', letterSpacing: '0.08em' }}>
                ✗ Failed — try emailing directly.
              </p>
            )}
          </form>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '6rem' }}>
          <div className="chrome-line" style={{ marginBottom: '2rem' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)' }}>
              SARTHAK GOMBER
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.15)' }}>
              {new Date().getFullYear()} · Built with Next.js
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}