'use client'

const CERTS = [
  { title: 'Machine Learning', issuer: 'NPTEL', issuerFull: 'National Programme on Technology Enhanced Learning', category: 'AI / ML', emoji: '🧠' },
  { title: 'C++ Programming',  issuer: 'CQL',   issuerFull: 'CQL Certification Programme',                       category: 'Languages', emoji: '⚙️' },
  { title: 'Web Development',  issuer: 'Udemy', issuerFull: 'Udemy Online Learning Platform',                    category: 'Full Stack', emoji: '🌐' },
  { title: 'GATE 2026 Qualified', issuer: 'IIT / IISC', issuerFull: 'Graduate Aptitude Test in Engineering',    category: 'Achievement', emoji: '🏆', score: '411' },
]

export default function Certificates() {
  return (
    <section id="certificates" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrap">
        <p className="chrome-label" style={{ marginBottom: '1rem' }}>Credentials</p>
        <h2 className="chrome-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '0.5rem' }}>Certificates</h2>
        <div className="chrome-line" style={{ marginBottom: '3.5rem' }} />

        <div className="certs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
          {CERTS.map(cert => (
            <div key={cert.title} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)', flexShrink: 0 }}>
                  {cert.emoji}
                </div>
                <span className="chrome-tag" style={{ fontSize: '0.58rem' }}>{cert.category}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 500, color: 'rgba(255,255,255,0.92)', letterSpacing: '0.04em', marginBottom: '0.3rem', lineHeight: 1.2 }}>
                  {cert.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.04em' }}>
                  {cert.issuerFull}
                </p>
              </div>
              <div className="chrome-line" />
              <div className="cert-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.35)', boxShadow: '0 0 6px rgba(255,255,255,0.4)' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.65)' }}>{cert.issuer}</span>
                </div>
                {cert.score && (
                  <div style={{ padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '2px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14)' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>Score: {cert.score}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="glass" style={{ marginTop: '3rem', padding: '1.8rem 2.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: 500, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
              View all credentials on LinkedIn
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', fontWeight: 300 }}>
              Full education history, certifications & endorsements
            </p>
          </div>
          <a href="https://www.linkedin.com/in/sarthakgomber" target="_blank" rel="noopener noreferrer"
            className="chrome-btn chrome-btn-primary" style={{ flexShrink: 0 }}>
            LinkedIn Profile ↗
          </a>
        </div>
      </div>
    </section>
  )
}