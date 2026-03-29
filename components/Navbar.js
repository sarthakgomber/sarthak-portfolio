'use client'

import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#hero',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#projects',     label: 'Projects' },
  { href: '#skills',       label: 'Skills' },
  { href: '#certificates', label: 'Certs' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu on link click
  const handleLink = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar" style={{
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)',
      }}>
        {/* Logo */}
        <a href="#hero" className="nav-logo">SG</a>

        {/* Desktop links */}
        <div className="nav-desktop">
          <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.12)' }} />
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>
        </div>

        {/* Mobile right side */}
        <div className="nav-mobile" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="/sarthak-gomber-cv.pdf" target="_blank" className="chrome-btn"
            style={{ padding: '0.4rem 1rem', fontSize: '0.62rem' }}>
            Resume
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '3px',
              padding: '0.4rem 0.55rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                  : 'scaleX(0)'
                  : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div style={{
        position: 'fixed',
        top: '64px',
        left: 0,
        right: 0,
        zIndex: 999,
        background: 'rgba(6,6,8,0.97)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        maxHeight: menuOpen ? '400px' : '0px',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{ padding: '1rem 2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleLink}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 400,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none',
                padding: '0.9rem 0',
                borderBottom: i < LINKS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.95)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}