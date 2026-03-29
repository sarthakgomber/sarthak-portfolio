'use client'

import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [green, setGreen] = useState(false)
  const toggle = () => setGreen(g => !g)
  return (
    <ThemeContext.Provider value={{ green, toggle }}>
      <div data-theme={green ? 'green' : 'chrome'} style={{ minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}