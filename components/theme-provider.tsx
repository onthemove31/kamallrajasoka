'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      defaultTheme="system"
      enableColorScheme
      enableSystem
      storageKey="theme-preference"
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  )
}
