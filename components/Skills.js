'use client'

import { useEffect, useRef, useState } from 'react'

// Devicon CDN base — svg icons pulled directly, no npm needed
const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const GROUPS = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90, icon: `${CDN}/javascript/javascript-original.svg` },
      { name: 'C++',        level: 80, icon: `${CDN}/cplusplus/cplusplus-original.svg` },
      { name: 'HTML5',      level: 92, icon: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS3',       level: 90, icon: `${CDN}/css3/css3-original.svg` },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js',     level: 88, icon: `${CDN}/react/react-original.svg` },
      { name: 'Next.js',      level: 85, icon: `${CDN}/nextjs/nextjs-original.svg` },
      { name: 'Node.js',      level: 80, icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'Express.js',   level: 78, icon: `${CDN}/express/express-original.svg`, invert: true },
      { name: 'Tailwind CSS', level: 90, icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'React Native', level: 70, icon: `${CDN}/react/react-original.svg` },
    ],
  },
  {
    category: 'Tools & Databases',
    skills: [
      { name: 'MongoDB',      level: 78, icon: `${CDN}/mongodb/mongodb-original.svg` },
      { name: 'Git',          level: 85, icon: `${CDN}/git/git-original.svg` },
      { name: 'GitHub',       level: 85, icon: `${CDN}/github/github-original.svg`, invert: true },
      { name: 'Postman',      level: 75, icon: `${CDN}/postman/postman-original.svg` },
      { name: 'VS Code',      level: 88, icon: `${CDN}/vscode/vscode-original.svg` },
      { name: 'Android Studio', level: 70, icon: `${CDN}/androidstudio/androidstudio-original.svg` },
    ],
  },
]

const SOFT = [
  'Problem Solving','Communication','Teamwork','Adaptability',
  'Time Management','Initiative','Collaboration','Attention to Detail',
  'Learning Agility','Reliability',
]

function SkillRow({ name, level, icon, animate, invert }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
        {/* Icon + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '22px',
            height: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <img
              src={icon}
              alt={name}
              width={20}
              height={20}
              style={{
                objectFit: 'contain',
                filter: invert
                  ? 'brightness(10) saturate(0) opacity(0.75)'
                  : 'brightness(0.9) saturate(0.75)',
                opacity: 0.88,
              }}
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.78)',
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}>
            {name}
          </span>
        </div>
        {/* Percentage */}
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.67rem',
          color: 'rgba(255,255,255,0.32)',
          fontWeight: 500,
        }}>
          {level}%
        </span>
      </div>
      {/* Bar */}
      <div className="skill-track">
        <div className="skill-fill" style={{ width: animate ? `${level}%` : '0%' }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrap">

        <p className="chrome-label" style={{ marginBottom: '1rem' }}>Skills</p>
        <h2 className="chrome-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '0.5rem' }}>
          Expertise
        </h2>
        <div className="chrome-line" style={{ marginBottom: '3.5rem' }} />

        {/* Skill groups grid */}
        <div className="skills-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          {GROUPS.map(g => (
            <div key={g.category} className="glass" style={{ padding: '1.8rem' }}>
              <p className="chrome-label" style={{ marginBottom: '1.5rem', fontSize: '0.6rem' }}>
                {g.category}
              </p>
              {g.skills.map(s => (
                <SkillRow key={s.name} name={s.name} level={s.level} icon={s.icon} animate={animate} invert={s.invert} />
              ))}
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="glass" style={{ padding: '1.8rem' }}>
          <p className="chrome-label" style={{ marginBottom: '1.2rem', fontSize: '0.6rem' }}>
            Soft Skills
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {SOFT.map(s => <span key={s} className="chrome-tag">{s}</span>)}
          </div>
        </div>

      </div>
    </section>
  )
}