import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProjects />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
