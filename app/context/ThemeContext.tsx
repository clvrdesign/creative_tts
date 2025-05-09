// context/ThemeContext.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'
type ThemeContextType = {
  theme: ThemeMode
  isDark: boolean
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('system')
  const [isDark, setIsDark] = useState(false)

  // Initialize theme and listen for system changes
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null
    const initialTheme = savedTheme || 'system'
    setTheme(initialTheme)
    
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)')
    const updateSystemTheme = () => {
      if (initialTheme === 'system') {
        setIsDark(systemDark.matches)
        document.documentElement.classList.toggle('dark', systemDark.matches)
      }
    }
    
    updateSystemTheme()
    
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        setIsDark(e.matches)
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }
    
    systemDark.addEventListener('change', handleSystemChange)
    return () => systemDark.removeEventListener('change', handleSystemChange)
  }, [theme])

  // Handle manual theme changes
  useEffect(() => {
    if (theme !== 'system') {
      const dark = theme === 'dark'
      setIsDark(dark)
      document.documentElement.classList.toggle('dark', dark)
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'system') return 'light'
      if (prev === 'light') return 'dark'
      return 'system'
    })
  }

  const setThemeMode = (newTheme: ThemeMode) => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      isDark, 
      toggleTheme, 
      setTheme: setThemeMode 
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}