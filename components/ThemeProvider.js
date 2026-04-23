'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  const applyTheme = (dark) => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  useEffect(() => {
    // Get saved preference or system preference
    const saved = localStorage.getItem('theme-preference')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = saved ? saved === 'dark' : prefersDark

    applyTheme(shouldBeDark)
    queueMicrotask(() => setIsDark(shouldBeDark))
  }, [])

  const toggleTheme = () => {
    const newState = !isDark
    setIsDark(newState)
    localStorage.setItem('theme-preference', newState ? 'dark' : 'light')
    applyTheme(newState)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  
  // Return default values during SSR/non-mounted state
  if (!context) {
    return { isDark: false, toggleTheme: () => {} }
  }
  
  return context
}
