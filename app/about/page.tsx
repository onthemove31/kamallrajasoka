"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Flask",
    "SQLite",
    "Raspberry Pi",
    "Photography",
  ]

  const interests = [
    { name: "Gaming", icon: "🎮" },
    { name: "Photography", icon: "📷" },
    { name: "Raspberry Pi", icon: "🥧" },
    { name: "Japanese", icon: "🇯🇵" },
    { name: "Data Viz", icon: "📊" },
  ]

  const timeline = [
    { year: 2018, event: "Started learning web development" },
    { year: 2019, event: "Built first Raspberry Pi project" },
    { year: 2020, event: "Launched game tracker app" },
    { year: 2021, event: "Started photography portfolio" },
    { year: 2022, event: "Created personal analytics dashboard" },
    { year: 2023, event: "Began learning Japanese" },
  ]

  return (
    <div className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">About Me</h1>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-4 text-2xl font-bold">Who I Am</h2>
          <p className="mb-6 text-muted-foreground">
            I'm a developer with a passion for building useful tools and exploring new technologies. When I'm not
            coding, you'll find me taking photos, tinkering with Raspberry Pi projects, or tracking my gaming stats for
            fun.
          </p>
          <p className="text-muted-foreground">
            I believe in building things that solve real problems, even if those problems are just my own. My projects
            range from practical utilities to fun experiments, all driven by curiosity and a desire to learn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="mb-4 text-2xl font-bold">What I Build</h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground">
            I specialize in full-stack web development, but I'm always exploring new technologies and frameworks. My
            projects often combine web interfaces with data collection, whether that's tracking gaming stats, organizing
            photos, or monitoring Raspberry Pi sensors.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="my-12"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Stuff I'm Into</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {interests.map((interest) => (
            <Card key={interest.name} className="overflow-hidden">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <span className="mb-2 text-4xl">{interest.icon}</span>
                <h3 className="font-medium">{interest.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="my-12"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Project Timeline</h2>
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {timeline.map((item, index) => (
            <div key={index} className={`relative mb-8 flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                <div className="mb-1 font-bold">{item.year}</div>
                <div className="text-muted-foreground">{item.event}</div>
              </div>
              <div className="absolute left-1/2 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-primary"></div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

