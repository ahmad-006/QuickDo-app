import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import LastSection from "../components/LastSection";
import TasksSection from "../components/TasksSection";

function Homepage() {
  return (
    <div className="text-white  py-4">
      <HeroSection />
      <TasksSection />
      <FeaturesSection />
      <LastSection />
    </div>
  );
}

export default Homepage;
