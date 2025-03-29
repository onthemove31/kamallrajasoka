import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  const skills = [
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "𝕋" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Photography", icon: "📸" },
    { name: "Raspberry Pi", icon: "🍓" },
    { name: "UI Design", icon: "🎨" },
  ];

  const interests = [
    { name: "Gaming", icon: "🎮" },
    { name: "Film Photography", icon: "🎞️" },
    { name: "Japanese Language", icon: "🇯🇵" },
    { name: "Mechanical Keyboards", icon: "⌨️" },
    { name: "Hiking", icon: "🥾" },
    { name: "Cooking", icon: "🍳" },
    { name: "Music Production", icon: "🎹" },
    { name: "Custom PCs", icon: "💻" },
  ];

  const timeline = [
    { year: "2022", title: "Started Game Tracker Project", status: "In Progress" },
    { year: "2021", title: "Learned Japanese", status: "Ongoing" },
    { year: "2020", title: "Built Photography Portfolio", status: "Completed" },
    { year: "2019", title: "First Raspberry Pi Project", status: "Completed" },
    { year: "2018", title: "Started Learning React", status: "Completed" },
  ];

  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Who I Am</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Hey there! I'm Kamallraj A, a developer and chronic side-project starter based in San Francisco.
                I work as a frontend engineer by day, building user interfaces for fintech products. By night
                (and weekends), I dive into personal projects ranging from game tracking tools to
                photography experiments.
              </p>
              <p>
                What drives me is the joy of building things that solve real problems – even if that problem
                is just "I want to track how much time I waste playing Elden Ring." I believe in
                learning by doing, and each project is an opportunity to explore new technologies
                or refine existing skills.
              </p>
              <p>
                When I'm not coding, you'll find me wandering the city with my camera, attempting to
                recreate the look of old film stocks with digital tools, or accidentally starting yet
                another side project that I swear I'll finish this time.
              </p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">What I Build</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-muted rounded-xl text-center">
                  <span className="text-3xl mb-2" aria-hidden="true">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Stuff I'm Into</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {interests.map((interest) => (
                <div key={interest.name} className="flex flex-col items-center justify-center p-4 bg-accent rounded-xl text-center">
                  <span className="text-3xl mb-2" aria-hidden="true">{interest.icon}</span>
                  <span className="font-medium">{interest.name}</span>
                </div>
              ))}
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Project Timeline</h2>
            <div className="relative border-l border-muted-foreground/20 pl-6 space-y-8 ml-4">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 mt-1.5 size-4 rounded-full bg-primary"></div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                    <span className="font-medium text-lg">{item.title}</span>
                    <span className={`text-sm ${
                      item.status === "Completed" ? "text-green-500" : 
                      item.status === "In Progress" ? "text-yellow-500" : 
                      "text-blue-500"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Want to Connect?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to collaboration, feedback, or just chatting about projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="gap-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">See My Work</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
