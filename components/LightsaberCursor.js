'use client'

import { useEffect, useRef, useState } from 'react'

export default function LightsaberCursor() {
  const cursorRef = useRef(null)
  const bladeRef = useRef(null)
  const [ignited, setIgnited] = useState(false)
  const [showFlash, setShowFlash] = useState(false)
  const pos = useRef({ x: -200, y: -200 })
  const angle = useRef(0)
  const lastPos = useRef({ x: -200, y: -200 })
  const rafRef = useRef(null)

  useEffect(() => {
    // Ignite on first move
    let hasIgnited = false

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }

      // Calculate angle from last pos
      const dx = e.clientX - lastPos.current.x
      const dy = e.clientY - lastPos.current.y
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        angle.current = Math.atan2(dy, dx) * (180 / Math.PI) + 90
      }
      lastPos.current = { x: e.clientX, y: e.clientY }

      // Update spotlight CSS vars on html
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)

      if (!hasIgnited) {
        hasIgnited = true
        setShowFlash(true)
        setTimeout(() => setShowFlash(false), 600)
        setTimeout(() => setIgnited(true), 80)
      }
    }

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`
        cursorRef.current.style.top = `${pos.current.y}px`
        cursorRef.current.style.transform = `translate(-50%, -50%) rotate(${angle.current}deg)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {showFlash && <div className="ignition-flash" />}

      {/* Main cursor saber */}
      <div ref={cursorRef} className="saber-cursor" style={{ left: '-200px', top: '-200px' }}>
        <div className="saber-halo" />
        <div
          ref={bladeRef}
          className={`saber-blade ${ignited ? 'ignited' : 'not-ignited'}`}
        />
        <div className="saber-hilt" />
      </div>
    </>
  )
}