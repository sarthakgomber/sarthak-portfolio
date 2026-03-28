'use client'

import { useRef } from 'react'

const PROJECTS = [
  {
    name: 'CreatorFund',
    tagline: 'Subscription platform for content creators',
    description: 'A subscription-based platform where content creators share exclusive content and monetize followers. Features user profiles, subscription tiers, post previews, and membership management.',
    tech: ['Next.js', 'Tailwind CSS', 'React Hooks', 'Node.js'],
    highlights: ['Protected routes & auth flows', 'Subscription tier management', 'Payment simulation', 'Responsive UI'],
    github: 'https://github.com/sarthakgomber/creatorfund',
  },
  {
    name: 'Linktree Clone',
    tagline: 'Centralized personal link hub',
    description: 'A personal landing page letting users share multiple links with customizable buttons. Supports multiple user profiles via dynamic routing with a clean, responsive design.',
    tech: ['Next.js', 'Tailwind CSS', 'Dynamic Routing'],
    highlights: ['Multi-user profile support', 'Dynamic Next.js routing', 'Mobile-first layout', 'Modular components'],
    github: 'https://github.com/sarthakgomber/linktree-clone',
  },
  {
    name: 'Safar Suraksha',
    tagline: 'Digital travel ID & tourist safety system',
    description: 'A travel digital ID system for tourist safety built with a cross-functional team. Includes real-time location tracking, panic button alerts, and a web-based admin dashboard.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Blockchain'],
    highlights: ['Real-time location tracking', 'Panic button SOS alerts', 'Admin authority dashboard', 'Blockchain integration'],
    github: 'https://github.com/sarthakgomber/safar-suraksha',
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    cardRef.current.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    cardRef.current.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      className="glass"
      style={{
        padding: '2.2rem 2.4rem',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.75)'
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
        <div>
          <p className="chrome-label" style={{ marginBottom: '0.4rem' }}>Project {String(index + 1).padStart(2, '0')}</p>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.8rem',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.92)',
            letterSpacing: '0.05em',
          }}>{project.name}</h3>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="chrome-btn"
          style={{ padding: '0.45rem 1rem', fontSize: '0.62rem', flexShrink: 0 }}
        >
          GitHub ↗
        </a>
      </div>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.72rem',
        color: 'rgba(255,255,255,0.62)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}>
        {project.tagline}
      </p>

      <div className="chrome-line" style={{ marginBottom: '1.2rem' }} />

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.88rem',
        fontWeight: 300,
        lineHeight: 1.8,
        color: 'rgba(255,255,255,0.5)',
        marginBottom: '1.4rem',
      }}>
        {project.description}
      </p>

      {/* Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', marginBottom: '1.4rem' }}>
        {project.highlights.map(h => (
          <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)' }}>{h}</span>
          </div>
        ))}
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tech.map(t => (
          <span key={t} className="chrome-tag">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrap">
        <p className="chrome-label" style={{ marginBottom: '1rem' }}>Projects</p>
        <h2 className="chrome-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '0.5rem' }}>Selected Work</h2>
        <div className="chrome-line" style={{ marginBottom: '3.5rem' }} />

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}