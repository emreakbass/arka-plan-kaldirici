'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-black/20 backdrop-blur-lg rounded-full p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full ${theme === 'light' ? 'text-yellow-500' : 'text-white/70'}`}
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light Mode</span>
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full ${theme === 'dark' ? 'text-blue-400' : 'text-white/70'}`}
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark Mode</span>
      </button>
    </div>
  )
}

