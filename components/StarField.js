'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeContext'

export default function StarField() {
  const canvasRef = useRef(null)
  const { green } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const characters = "アァイィウヴエェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charArray = characters.split('')
    const fontSize = 14
    let columns, drops, colBrightness, animId

    const setCanvasSize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      columns       = Math.floor(canvas.width / fontSize)
      drops         = Array(columns).fill(1)
      colBrightness = Array.from({ length: columns }, () => 0.3 + Math.random() * 0.7)
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const TARGET_FPS = 22
    const FRAME_MS   = 1000 / TARGET_FPS
    let lastTime = 0

    const draw = (timestamp) => {
      animId = requestAnimationFrame(draw)
      const elapsed = timestamp - lastTime
      if (elapsed < FRAME_MS) return
      lastTime = timestamp - (elapsed % FRAME_MS)

      ctx.fillStyle = 'rgba(6, 6, 8, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      // Read current theme from canvas data attribute (avoids stale closure)
      const isGreen = canvas.dataset.green === 'true'

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        const b = colBrightness[i]

        if (isGreen) {
          // Green mode — bright green head, dim green trail
          ctx.fillStyle = `rgba(0, 255, 70, ${0.90 * b})`
          ctx.fillText(text, x, y)
          if (drops[i] > 1) {
            ctx.fillStyle = `rgba(0, 180, 50, ${0.30 * b})`
            ctx.fillText(charArray[Math.floor(Math.random() * charArray.length)], x, y - fontSize)
          }
        } else {
          // Chrome mode — white head, cool grey trail
          ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * b})`
          ctx.fillText(text, x, y)
          if (drops[i] > 1) {
            ctx.fillStyle = `rgba(200, 210, 220, ${0.35 * b})`
            ctx.fillText(charArray[Math.floor(Math.random() * charArray.length)], x, y - fontSize)
          }
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
          colBrightness[i] = 0.3 + Math.random() * 0.7
        }
        drops[i]++
      }
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  // Update data attribute so draw loop reads it without re-initialising
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.dataset.green = green ? 'true' : 'false'
    }
  }, [green])

  return (
    <canvas
      ref={canvasRef}
      data-green={green ? 'true' : 'false'}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        background: '#060608',
        display: 'block',
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    />
  )
}