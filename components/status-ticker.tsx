"use client"
import { useState, useEffect, memo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Gamepad2, Camera, BookOpen } from "lucide-react"

const StatusItem = memo(({ icon, label, value, index }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  index: number;
}) => (
  <motion.div
    key={index}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: index * 0.1 }}
    className="flex min-w-max items-center gap-2"
  >
    <span className="text-primary">{icon}</span>
    <span className="text-muted-foreground">{label}:</span>
    <span className="font-medium">{value}</span>
  </motion.div>
));
StatusItem.displayName = 'StatusItem';

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
] as const;

export default function StatusTicker() {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    // Update every second but aligned to the system clock
    const now = new Date();
    const delay = 1000 - now.getMilliseconds();
    
    const timeout = setTimeout(() => {
      setCurrentTime(new Date());
      
      // Start the interval at the next exact second
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Card className="w-full border-none bg-background/50 backdrop-blur-sm">
      <CardContent className="p-3">
        <div className="flex items-center justify-between gap-4 overflow-x-auto text-sm">
          <time className="flex items-center gap-2 text-muted-foreground font-mono">
            {currentTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </time>
          <div className="flex flex-1 items-center gap-6 overflow-x-auto px-2">
            {statusItems.map((item, index) => (
              <StatusItem
                key={`${item.label}-${index}`}
                icon={item.icon}
                label={item.label}
                value={item.value}
                index={index}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

