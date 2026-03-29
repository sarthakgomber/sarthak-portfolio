'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'

const LINKS = [
  { href: '#hero',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#projects',     label: 'Projects' },
  { href: '#skills',       label: 'Skills' },
  { href: '#certificates', label: 'Certs' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { green, toggle }       = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

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

        {/* Right side */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            title={green ? 'Switch to Chrome' : 'Switch to Matrix Green'}
            style={{
              background: green ? 'rgba(0,255,70,0.08)' : 'rgba(255,255,255,0.07)',
              border: `1px solid ${green ? 'rgba(0,255,70,0.35)' : 'rgba(255,255,255,0.22)'}`,
              borderRadius: '2px',
              padding: '0.42rem 0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(8px)',
              boxShadow: green
                ? 'inset 0 1px 0 rgba(0,255,70,0.18), 0 0 12px rgba(0,255,70,0.08)'
                : 'inset 0 1px 0 rgba(255,255,255,0.14)',
            }}
          >
            <span style={{
              display: 'block',
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: green ? '#00ff46' : 'rgba(255,255,255,0.6)',
              boxShadow: green ? '0 0 8px #00ff46' : 'none',
              transition: 'all 0.3s ease',
            }} />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.60rem',
              fontWeight: 500,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: green ? 'rgba(0,255,70,0.90)' : 'rgba(255,255,255,0.60)',
              transition: 'color 0.3s ease',
            }}>
              {green ? 'Matrix' : 'Chrome'}
            </span>
          </button>

          {/* Resume — desktop */}
          <a href="/sarthak-gomber-cv.pdf" target="_blank" className="chrome-btn nav-desktop"
            style={{ padding: '0.4rem 1rem', fontSize: '0.62rem' }}>
            Resume
          </a>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile"
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
            {[0, 1, 2].map(i => (
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

      {/* Mobile dropdown */}
      <div style={{
        position: 'fixed',
        top: '64px', left: 0, right: 0,
        zIndex: 999,
        background: 'rgba(6,6,8,0.97)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        maxHeight: menuOpen ? '400px' : '0px',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{ padding: '1rem 2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
          {LINKS.map((l, i) => (
            <a key={l.href} href={l.href} onClick={handleLink}
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
          <a href="/sarthak-gomber-cv.pdf" target="_blank"
            style={{
              marginTop: '1rem',
              fontFamily: 'Inter, sans-serif', fontSize: '0.9rem',
              fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
            }}>
            Resume
          </a>
        </div>
      </div>
    </>
  )
}