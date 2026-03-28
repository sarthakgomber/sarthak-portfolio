'use client'

import { useEffect, useRef, useState } from 'react'

const GROUPS = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'C++',        level: 80 },
      { name: 'HTML / CSS', level: 92 },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React.js',       level: 88 },
      { name: 'Next.js',        level: 85 },
      { name: 'Node / Express', level: 80 },
      { name: 'Tailwind CSS',   level: 90 },
      { name: 'React Native',   level: 70 },
    ],
  },
  {
    category: 'Tools & Databases',
    skills: [
      { name: 'MongoDB',    level: 78 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'Postman',    level: 75 },
    ],
  },
  {
    category: 'Problem Solving',
    skills: [
      { name: 'Data Structures', level: 72 },
      { name: 'Algorithms',      level: 70 },
      { name: 'LeetCode / GFG',  level: 75 },
    ],
  },
]

const SOFT = [
  'Problem Solving','Communication','Teamwork','Adaptability',
  'Time Management','Initiative','Collaboration','Attention to Detail',
  'Learning Agility','Reliability',
]

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.83rem',
          color: 'rgba(255,255,255,0.75)',
          fontWeight: 400,
          letterSpacing: '0.03em',
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.68rem',
          color: 'rgba(255,255,255,0.35)',
          fontWeight: 500,
        }}>
          {level}%
        </span>
      </div>
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
      { threshold: 0.15 }
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

        {/* Skill groups */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          {GROUPS.map(g => (
            <div key={g.category} className="glass" style={{ padding: '1.8rem' }}>
              <p className="chrome-label" style={{ marginBottom: '1.4rem', fontSize: '0.6rem' }}>
                {g.category}
              </p>
              {g.skills.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} animate={animate} />
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