'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="animate-spin h-10 w-10 border-t-2 border-b-2 border-gray-500 rounded-full"></div>
    </div>
  );

  return (<ThemeProvider
    attribute='class'
    defaultTheme='dark'
    enableSystem={true}
    disableTransitionOnChange>
    {children}
  </ThemeProvider>)
}
