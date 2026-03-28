'use client'

import { useEffect } from 'react'

export default function SpotlightOverlay() {
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="darkness" />
      <div className="spotlight" />
    </>
  )
}