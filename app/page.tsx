"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import StatusTicker from "@/components/status-ticker"
import dynamic from 'next/dynamic'
import { ArrowDown } from "lucide-react"

// Dynamically import ProjectsSection with loading boundary
const ProjectsSection = dynamic(
  () => import("@/components/projects-section"),
  { loading: () => <div className="animate-pulse h-96 bg-muted rounded-lg" /> }
)

// Debounce utility
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    debounce(() => {
      setScrolled(window.scrollY > 50);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToProjects = () => {
    projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-4xl"
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Developer. Tinkerer.
            <br />
            <span className="text-primary">Serial Side-Project Starter.</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            I build things. Sometimes I even finish them.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="group text-lg transform transition-transform hover:scale-105"
          >
            Explore Projects
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-16 left-0 right-0 mx-auto w-full max-w-4xl px-4"
        >
          <StatusTicker />
        </motion.div>

        <div className="absolute bottom-8 left-0 right-0 mx-auto text-center">
          <ArrowDown className="mx-auto h-6 w-6 animate-bounce text-muted-foreground" />
        </div>
      </section>

      <section 
        ref={projectsSectionRef} 
        id="projects" 
        className="py-20"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A selection of my recent work and ongoing experiments.
            </p>
          </motion.div>

          <ProjectsSection featured={true} />

          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="transform transition-transform hover:scale-105"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

