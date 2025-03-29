"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectsSection from "@/components/projects-section"

export default function ProjectsPage() {
  const [category, setCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "games", label: "Game Tracker" },
    { id: "photography", label: "Photography" },
    { id: "raspberry-pi", label: "Raspberry Pi" },
    { id: "web", label: "Web Apps" },
    { id: "analytics", label: "Analytics" },
  ]

  return (
    <div className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Projects</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          A collection of things I've built, from web apps to Raspberry Pi experiments.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mx-auto flex flex-wrap justify-center">
          {categories.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id} onClick={() => setCategory(cat.id)}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id}>
            <ProjectsSection category={cat.id} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

