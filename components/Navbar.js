'use client'

import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#hero',     label: 'Home' },
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills',   label: 'Skills' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className="navbar" style={{
      borderBottomColor: scrolled ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.06)',
    }}>
      {/* Logo */}
      <a href="#hero" className="nav-logo">SG</a>

      {/* Thin vertical divider */}
      <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      {/* Links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
        ))}
      </div>

      {/* Right: CTA */}
      <div style={{ marginLeft: 'auto' }}>
        <a
          href="/sarthak-gomber-cv.pdf"
          target="_blank"
          className="chrome-btn"
          style={{ padding: '0.5rem 1.4rem', fontSize: '0.65rem' }}
        >
          Resume
        </a>
      </div>
    </nav>
  )
}