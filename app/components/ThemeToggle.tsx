import React, { useState, useEffect } from 'react';
import { Laptop2, Sun, Moon } from 'lucide-react';

type Theme = 'system' | 'light' | 'dark';

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('system');
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme, systemPrefersDark);
    } else {
      setCurrentTheme('system');
      applyTheme('system', systemPrefersDark);
    }
  }, []);

  // Apply theme changes to DOM and localStorage
  const applyTheme = (theme: Theme, systemPrefersDark: boolean) => {
    const root = document.documentElement;
    
    if (theme === 'dark' || (theme === 'system' && systemPrefersDark)) {
      root.classList.add('dark');
      localStorage.setItem('theme', theme);
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', theme);
    }
  };

  const handleThemeChange = (theme: Theme) => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setCurrentTheme(theme);
    applyTheme(theme, systemPrefersDark);
    setIsOpen(false);
  };

  const themes = [
    { value: 'system', icon: <Laptop2 className="w-4 h-4" />, label: 'System' },
    { value: 'light', icon: <Sun className="w-4 h-4" />, label: 'Light' },
    { value: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Dark' },
  ];

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button 
        aria-label="Toggle theme" 
        className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800"
      >
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle theme" 
        className="p-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200"
      >
        {themes.find(t => t.value === currentTheme)?.icon}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-1 shadow-lg z-50">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => handleThemeChange(theme.value as Theme)}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                currentTheme === theme.value
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                  : 'hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200'
              }`}
            >
              {theme.icon}
              <span>{theme.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;