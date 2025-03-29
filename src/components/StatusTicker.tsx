
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Status {
  id: number;
  icon: string;
  label: string;
  value: string;
}

const statuses: Status[] = [
  {
    id: 1,
    icon: "🚧",
    label: "Current project:",
    value: "Game Tracker Dashboard",
  },
  {
    id: 2,
    icon: "🎮",
    label: "Most played:",
    value: "Elden Ring (12.5h)",
  },
  {
    id: 3,
    icon: "📸",
    label: "Photo app:",
    value: "Processing 86 images",
  },
  {
    id: 4,
    icon: "🇯🇵",
    label: "Word of the day:",
    value: "頑張る (ganbarú) - to do one's best",
  },
];

export default function StatusTicker() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % statuses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/50 dark:bg-card/30 border rounded-md backdrop-blur-sm overflow-hidden h-10 relative">
      <div className="w-full h-full flex items-center px-3">
        {statuses.map((status, index) => (
          <div
            key={status.id}
            className={cn(
              "absolute inset-0 px-3 w-full h-full flex items-center transition-all duration-500",
              index === activeIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
          >
            <span className="mr-2" aria-hidden="true">
              {status.icon}
            </span>
            <span className="font-medium mr-1.5">{status.label}</span>
            <span className="text-primary font-mono">{status.value}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary/20">
        <div 
          className="h-full bg-primary transition-all duration-100 ease-linear"
          style={{
            width: `${((activeIndex + 1) / statuses.length) * 100}%`, 
          }}
        />
      </div>
    </div>
  );
}
