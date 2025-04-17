import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo size="md" />
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Солянка</span>
            </Link>
          </div>
          
          {/* Десктопное меню */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">Главная</Link>
            <Link to="/projects" className="text-gray-700 hover:text-primary transition">Походы</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition">О клубе</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Войти</Button>
            </Link>
            <Link to="/register">
              <Button>Присоединиться</Button>
            </Link>
          </div>
          
          {/* Мобильное меню */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
        
        {/* Выпадающее мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary transition">Главная</Link>
              <Link to="/projects" className="text-gray-700 hover:text-primary transition">Походы</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition">О клубе</Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full">Присоединиться</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
