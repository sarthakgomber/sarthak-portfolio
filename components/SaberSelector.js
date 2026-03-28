'use client'

import { useState } from 'react'

const SABERS = [
  { id: 'blue',   label: 'Jedi',        color: '#4fc3f7' },
  { id: 'red',    label: 'Sith',        color: '#ff1744' },
  { id: 'green',  label: 'Master',      color: '#00e676' },
  { id: 'purple', label: 'Mace Windu',  color: '#d500f9' },
]

export default function SaberSelector() {
  const [active, setActive] = useState('blue')

  const select = (id) => {
    setActive(id)
    document.documentElement.setAttribute('data-saber', id)
  }

  return (
    <div className="saber-selector">
      <span style={{
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.25)',
        fontFamily: 'Rajdhani, sans-serif',
        fontWeight: 600,
        marginRight: '0.25rem',
      }}>
        Choose your side
      </span>
      {SABERS.map(s => (
        <button
          key={s.id}
          onClick={() => select(s.id)}
          title={s.label}
          className={`saber-btn ${s.id} ${active === s.id ? 'active' : ''}`}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  )
}