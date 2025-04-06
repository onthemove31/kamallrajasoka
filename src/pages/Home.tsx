import { Link } from "react-router-dom";
import Hero from "@/components/hero";
import ProjectsPreview from "@/components/projects-preview";
import InsightsSection from "@/components/insights-section";
import StatusTicker from "@/components/status-ticker";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsPreview />
      <InsightsSection />
      <StatusTicker />
    </div>
  );
};

export default Home;
