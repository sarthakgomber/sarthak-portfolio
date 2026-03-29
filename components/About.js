'use client'

export default function About() {
  const stats = [
    { value: '125+', label: 'DSA Problems Solved' },
    { value: '8.3',  label: 'GPA / 10.0' },
    { value: '411',  label: 'GATE 2026 Score' },
    { value: '3+',   label: 'Projects Shipped' },
  ]
  const certs = ['Machine Learning — NPTEL', 'C++ Programming — CQL', 'Web Development — Udemy']

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrap">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>

          {/* Left */}
          <div>
            <p className="chrome-label" style={{ marginBottom: '1.2rem' }}>About</p>
            <h2 className="chrome-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', marginBottom: '2rem', lineHeight: 1.15 }}>
              Computer<br />Science<br />Undergrad
            </h2>
            <div className="chrome-line" style={{ marginBottom: '2rem' }} />
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {stats.map(s => (
                <div key={s.label} className="glass" style={{ padding: '1.2rem 1.4rem' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 500, color: 'rgba(255,255,255,0.9)', lineHeight: 1, marginBottom: '0.3rem' }}>
                    {s.value}
                  </div>
                  <div className="chrome-label" style={{ fontSize: '0.58rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.95, color: 'rgba(255,255,255,0.62)', marginBottom: '1.5rem' }}>
              I'm a Computer Science undergraduate at Dronacharya College of Engineering, Gurugram — currently in my second year. Passionate about building web and mobile solutions that are technically solid and genuinely useful.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.95, color: 'rgba(255,255,255,0.45)', marginBottom: '2rem' }}>
              My stack revolves around React, Next.js, Node.js, and MongoDB. Active DSA problem solver across LeetCode, Coding Ninjas, and GFG. GATE 2026 qualified with a score of 411.
            </p>
            <p className="chrome-label" style={{ marginBottom: '0.8rem' }}>Certifications</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {certs.map(c => (
                <div key={c} className="glass-light" style={{ padding: '0.6rem 1rem' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}