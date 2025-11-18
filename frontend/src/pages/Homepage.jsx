import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import TasksSection from "../components/TasksSection";

function Homepage() {
  return (
    <div className="text-white md:px-7 px-2 py-4">
      <HeroSection />
      <TasksSection />
      <FeaturesSection />
    </div>
  );
}

export default Homepage;
