import { Link } from "react-router-dom";
import Hero from "@/components/hero";
import ProjectsPreview from "@/components/projects-preview";
import InsightsSection from "@/components/insights-section";
import StatusTicker from "@/components/status-ticker";
import TerminalDemo from "@/components/terminal-demo";
import PartnerLogos from "@/components/partner-logos";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsPreview />
      <InsightsSection />
      <StatusTicker />
      <TerminalDemo />
      <PartnerLogos />
    </div>
  );
};

export default Home;
