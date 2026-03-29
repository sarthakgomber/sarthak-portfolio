'use client'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 1.5rem',
      paddingTop: '64px',
      position: 'relative',
      zIndex: 1,
    }}>
      <p className="chrome-label hero-subtitle" style={{ marginBottom: '2rem' }}>
        Full Stack Developer · New Delhi, India
      </p>

      <h1 className="chrome-heading" style={{
        fontSize: 'clamp(3rem, 9vw, 9rem)',
        lineHeight: 1,
        marginBottom: '0.2em',
      }}>
        Sarthak
      </h1>
      <h1 className="chrome-heading" style={{
        fontSize: 'clamp(1.6rem, 5vw, 5rem)',
        lineHeight: 1,
        fontWeight: 300,
        letterSpacing: '0.4em',
        marginBottom: '2.5rem',
        opacity: 0.55,
      }}>
        Gomber
      </h1>

      <div className="chrome-line" style={{ width: '100px', marginBottom: '2.5rem' }} />

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 'clamp(0.82rem, 2vw, 0.92rem)',
        fontWeight: 300,
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: '0.06em',
        lineHeight: 1.9,
        maxWidth: '400px',
        marginBottom: '3rem',
        padding: '0 0.5rem',
      }}>
        Building web & mobile solutions with React, Next.js, and Node.js.
      </p>

      {/* Buttons */}
      <div className="hero-btns" style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '3.5rem',
      }}>
        <a href="#projects" className="chrome-btn chrome-btn-primary">View Work</a>
        <a href="#contact"  className="chrome-btn">Get In Touch</a>
      </div>

      {/* Social */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarthakgomber' },
          { label: 'GitHub',   href: 'https://github.com/sarthakgomber' },
          { label: 'Email',    href: 'mailto:sarthakgomber@gmail.com' },
        ].map(s => (
          <a key={s.label} href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <span className="chrome-label" style={{ fontSize: '0.55rem' }}>Scroll</span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(180deg, rgba(255,255,255,0.25), transparent)' }} />
      </div>
    </section>
  )
}