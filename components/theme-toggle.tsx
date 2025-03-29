"use client"
import { memo } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export const ThemeToggle = memo(function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative"
    >
      <Sun 
        className="h-5 w-5 transition-transform duration-200 dark:-rotate-90 dark:scale-0" 
        aria-hidden="true"
      />
      <Moon 
        className="absolute h-5 w-5 transition-transform duration-200 rotate-90 scale-0 dark:rotate-0 dark:scale-100" 
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
})

