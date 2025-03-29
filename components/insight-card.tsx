"use client"
import { memo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Insight } from "@/data/insights"

interface InsightCardProps {
  insight: Insight
}

const InsightValue = memo(({ value, unit }: { value: string | number, unit?: string }) => (
  <div className="text-4xl font-bold text-primary">
    {value}
    {unit && <span className="ml-1 text-lg text-muted-foreground">{unit}</span>}
  </div>
));
InsightValue.displayName = 'InsightValue';

export default memo(function InsightCard({ insight }: InsightCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ 
        duration: 0.2, 
        type: "tween",
        ease: "easeOut"
      }}
    >
      <Card className="h-full overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl line-clamp-2">{insight.title}</CardTitle>
          <CardDescription className="line-clamp-3">{insight.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">
            <InsightValue value={insight.value} unit={insight.unit} />
          </div>
          <p className="text-center text-sm text-muted-foreground line-clamp-2">
            {insight.context}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
})

