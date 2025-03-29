
import { useEffect, useState } from "react";

interface StatusItem {
  label: string;
  value: string;
}

const StatusTicker = () => {
  const [statuses, setStatuses] = useState<StatusItem[]>([
    { label: "Current project", value: "Building a personal site" },
    { label: "Most played game", value: "Baldur's Gate 3" },
    { label: "Photo app status", value: "3,421 photos processed" },
    { label: "Today's Japanese word", value: "始めましょう (hajimemashō)" },
  ]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`w-full bg-secondary/50 backdrop-blur-sm py-3 overflow-hidden border-y border-border/50 transition-all duration-1000 ${
        visible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {Array(2)
          .fill(statuses)
          .flat()
          .map((status, index) => (
            <div
              key={index}
              className="flex items-center mx-8 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <span className="font-semibold mr-2 text-primary/80">{status.label}:</span>
              <span>{status.value}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StatusTicker;
