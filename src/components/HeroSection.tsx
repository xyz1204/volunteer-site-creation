import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Стань частью добрых дел
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Присоединяйся к команде волонтёров и меняй мир к лучшему вместе с нами. 
              Помогать другим — это просто!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Стать волонтёром
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Смотреть проекты
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <img 
                src="/placeholder.svg" 
                alt="Волонтёры за работой" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
