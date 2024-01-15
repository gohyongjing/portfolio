'use client';

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const localStorageThemeKey = "yongjing.dev::theme"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  
  function handleClick() {
    const newTheme = theme == 'light' ? 'dark' : 'light';
    const root = window.document.documentElement;
    setTheme(newTheme);
    
    if (newTheme == 'light') {
      root.classList.remove('dark');
      localStorage.removeItem(localStorageThemeKey);
    } else {
      root.classList.add('dark');
      localStorage.setItem(localStorageThemeKey, 'dark');
    }
  }

  useEffect(() => {
    const localStorageTheme = localStorage?.getItem(localStorageThemeKey);

    if (localStorageTheme == 'dark') {
      window.document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, [])

  return (
    <button onClick={handleClick} className="h-6 w-6 rounded-sm flex justify-center items-center bg-neutral-200 hover:text-neutral-800 hover:bg-neutral-500 dark:bg-neutral-700 dark:hover:text-neutral-50">
      {
        theme == 'dark' ? <SunIcon /> : <MoonIcon />
      }
    </button>
  );
}
