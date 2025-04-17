import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-100 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Logo size="lg" className="mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Туристический клуб <span className="text-yellow-500">Солянка</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
            Исследуй. Покоряй. Удивляй. Присоединяйтесь к нашим походам и откройте для себя новые горизонты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/projects">
              <Button size="lg" className="font-medium">
                Посмотреть походы
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="font-medium">
                О нашем клубе
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
