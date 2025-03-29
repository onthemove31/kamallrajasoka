import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Unlock, TerminalSquare } from "lucide-react";
import { cn } from "@/lib/utils";

// Password for the lab (simple client-side protection)
const labPassword = "sideproject";

export default function Lab() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [konamiActivated, setKonamiActivated] = useState(false);

  // Konami code easter egg
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const newKonamiCode = [...konamiCode, e.key];
    
    // Keep only the last 10 keys
    if (newKonamiCode.length > 10) {
      newKonamiCode.shift();
    }
    
    setKonamiCode(newKonamiCode);
    
    // Check if Konami code is activated
    if (JSON.stringify(newKonamiCode) === JSON.stringify(konamiSequence)) {
      setKonamiActivated(true);
      setIsAuthenticated(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === labPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password. Hint: What do I start but never finish?");
    }
  };

  const experimentData = [
    {
      id: "experiment-1",
      title: "Neural Typography Generator",
      description: "A prototype using machine learning to generate unique typography based on emotional inputs.",
      status: "Prototype",
      lastUpdated: "3 days ago",
    },
    {
      id: "experiment-2",
      title: "Ambient Audio Analyzer",
      description: "Recording and analyzing ambient sounds to create generative visual patterns.",
      status: "Early Development",
      lastUpdated: "1 week ago",
    },
    {
      id: "experiment-3",
      title: "RaspiNet Home Mesh Network",
      description: "Building a self-healing home mesh network using multiple Raspberry Pis.",
      status: "Hardware Testing",
      lastUpdated: "2 days ago",
    },
    {
      id: "experiment-4",
      title: "Game Stats Real-Time Widget",
      description: "System tray widget showing real-time game playtime statistics across platforms.",
      status: "UI Design",
      lastUpdated: "Yesterday",
    }
  ];

  if (!isAuthenticated) {
    return (
      <div 
        className="min-h-screen py-24 md:py-32 flex flex-col items-center justify-center"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="max-w-md w-full p-6 bg-card rounded-xl border shadow-sm">
          <div className="text-center mb-6">
            <Lock className="size-12 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold tracking-tight">Private Lab Area</h1>
            <p className="text-muted-foreground mt-2">
              This area contains experimental projects and unfinished ideas.
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
              </div>
              
              <Button type="submit" className="w-full">
                Enter Lab
              </Button>
            </div>
          </form>
          
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>Hint: What do I start but never finish?</p>
            <p className="mt-2">
              Or try the Konami code...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <TerminalSquare className="size-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">
              Experimental Lab
              {konamiActivated && <span className="text-primary ml-2">🎮</span>}
            </h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            onClick={() => setIsAuthenticated(false)}
          >
            <Unlock className="size-4" /> Lock
          </Button>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          Welcome to my digital workshop. These are experimental projects in very early stages.
          Concepts I'm testing, unfinished ideas, and prototypes live here.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experimentData.map((experiment) => (
            <div
              key={experiment.id}
              className={cn(
                "p-6 rounded-xl border bg-card/50 hover:bg-card transition-colors",
                konamiActivated && "border-primary/20"
              )}
            >
              <h3 className="text-xl font-bold tracking-tight mb-1">{experiment.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-muted rounded-full">{experiment.status}</span>
                <span className="text-xs text-muted-foreground">Updated {experiment.lastUpdated}</span>
              </div>
              <p className="text-muted-foreground">{experiment.description}</p>
            </div>
          ))}
        </div>
        
        {konamiActivated && (
          <div className="mt-12 p-6 rounded-xl border border-primary/20 bg-primary/5">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              🎮 Konami Code Activated: Secret Project
            </h2>
            <p className="text-lg mb-4">
              I'm building a retro game recommendation engine based on your playing habits and combined with your Spotify listening patterns. Early prototype, more soon!
            </p>
            <div className="font-mono text-sm p-4 bg-black/90 text-green-400 rounded-md overflow-x-auto">
              <p>// Secret game recommendation algorithm in progress</p>
              <p>const games = fetchPlayedGames(steamId, epicId, xboxId);</p>
              <p>const music = fetchSpotifyGenres(spotifyId);</p>
              <p>return generateRecommendations(games, music, nostalgiaBias);</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
