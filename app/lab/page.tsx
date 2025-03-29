"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, ExternalLink } from "lucide-react"

export default function LabPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is just a simple example - in a real app, you'd use a proper auth system
    if (password === "secret") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid password")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="container flex min-h-[80vh] items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Lock className="h-5 w-5" /> Private Lab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="text-sm text-destructive">{error}</p>}
                </div>
                <Button type="submit" className="w-full">
                  Enter Lab
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Experimental Lab</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Welcome to my digital workshop. Here's where I experiment with new ideas and unfinished projects.
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Updated Portfolio
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A new version of my portfolio built with Vite and React, featuring improved animations and interactions.
              </p>
              <Button 
                asChild 
                className="w-full"
                variant="default"
              >
                <a 
                  href="https://dev.kamallrajasoka.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader>
              <CardTitle>Experiment #{i}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This is an experimental project still in development. Check back later for updates.
              </p>
              <div className="mt-4 h-40 rounded-md bg-muted"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

