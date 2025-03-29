"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Gamepad2, Camera, BookOpen } from "lucide-react"

export default function StatusTicker() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const statusItems = [
    {
      icon: <Code className="h-4 w-4" />,
      label: "Current Project",
      value: "Personal Portfolio v2",
    },
    {
      icon: <Gamepad2 className="h-4 w-4" />,
      label: "Most Played Game",
      value: "Baldur's Gate 3",
    },
    {
      icon: <Camera className="h-4 w-4" />,
      label: "Photo App Status",
      value: "Processing 42 images",
    },
    {
      icon: <BookOpen className="h-4 w-4" />,
      label: "Japanese Word",
      value: "冒険 (bouken - adventure)",
    },
  ]

  return (
    <Card className="w-full border-none bg-background/50 backdrop-blur-sm">
      <CardContent className="p-3">
        <div className="flex items-center justify-between gap-4 overflow-x-auto text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-mono">
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </span>
          </div>
          <div className="flex flex-1 items-center gap-6 overflow-x-auto px-2">
            {statusItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex min-w-max items-center gap-2"
              >
                <span className="text-primary">{item.icon}</span>
                <span className="text-muted-foreground">{item.label}:</span>
                <span className="font-medium">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

