"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Insight } from "@/data/insights"

interface InsightCardProps {
  insight: Insight
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="h-full overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{insight.title}</CardTitle>
          <CardDescription>{insight.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">
            <div className="text-4xl font-bold text-primary">
              {insight.value}
              <span className="ml-1 text-lg text-muted-foreground">{insight.unit}</span>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">{insight.context}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

