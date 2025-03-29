
import { Insight } from "@/data/insights";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  const getTrendIcon = () => {
    if (!insight.trend) return null;
    
    if (insight.trend === 'up') {
      return <ArrowUp className="size-4 text-green-500" />;
    } else if (insight.trend === 'down') {
      return <ArrowDown className="size-4 text-red-500" />;
    } else {
      return <Minus className="size-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="flex flex-col h-full rounded-xl border bg-card p-5 transition-all hover:shadow-md">
      <div className="space-y-1 mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          {insight.title}
        </h3>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-end justify-between">
          <p className={cn(
            "text-2xl font-semibold",
            insight.category === 'gaming' && "text-yellow-500",
            insight.category === 'development' && "text-blue-500",
            insight.category === 'photography' && "text-indigo-500",
            insight.category === 'learning' && "text-green-500",
          )}>
            {insight.value}
          </p>
          
          {insight.change && (
            <div className="flex items-center gap-1">
              {getTrendIcon()}
              <span className={cn(
                "text-sm font-medium",
                insight.trend === 'up' && "text-green-500",
                insight.trend === 'down' && "text-red-500",
                insight.trend === 'neutral' && "text-muted-foreground"
              )}>
                {insight.change}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
