import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const Projects = () => {
  // Демо данные для походов
  const allProjects: ProjectCardProps[] = [
    {
      id: "1",
      title: "Поход в Хибины",
      description: "Увлекательный поход в горы Хибины. Преодолеем горные перевалы, насладимся прекрасными видами с вершин и отдохнем у горных озер.",
      date: "15 июня 2024",
      location: "Хибины, Мурманская область",
      category: "Горный",
      volunteersNeeded: 20,
      volunteersJoined: 12,
      image: "https://placeholder.svg"
    },
    {
      id: "2",
      title: "Сплав по реке Вуокса",
      description: "Присоединяйтесь к сплаву по живописной реке Вуокса на байдарках. Идеально для начинающих туристов.",
      date: "20 июня 2024",
      location: "Река Вуокса, Ленинградская область",
      category: "Сплав",
      volunteersNeeded: 15,
      volunteersJoined: 5,
      image: "https://placeholder.svg"
    },
    {
      id: "3",
      title: "Велопоход по Карелии",
      description: "Велосипедный поход по красивейшим местам Карелии. Посетим множество озер, насладимся природой Русского Севера.",
      date: "30 июня 2024",
      location: "Карелия",
      category: "Вело",
      volunteersNeeded: 30,
      volunteersJoined: 22,
      image: "https://placeholder.svg"
    },
    {
      id: "4",
      title: "Пеший поход по Крыму",
      description: "Поход по горам и побережью Крыма. Посетим красивейшие видовые точки и искупаемся в Черном море.",
      date: "5 июля 2024",
      location: "Крым",
      category: "Пеший",
      volunteersNeeded: 12,
      volunteersJoined: 8,
      image: "https://placeholder.svg"
    },
    {
      id: "5",
      title: "Восхождение на Эльбрус",
      description: "Восхождение на самую высокую точку России и Европы. Поход для опытных туристов с хорошей физической подготовкой.",
      date: "12 июля 2024",
      location: "Эльбрус, Кавказ",
      category: "Горный",
      volunteersNeeded: 10,
      volunteersJoined: 4,
      image: "https://placeholder.svg"
    },
    {
      id: "6",
      title: "Поход выходного дня",
      description: "Короткий двухдневный поход для начинающих туристов. Идеально, чтобы познакомиться с клубом и получить базовые навыки.",
      date: "18 июля 2024",
      location: "Ленинградская область",
      category: "Пеший",
      volunteersNeeded: 10,
      volunteersJoined: 6,
      image: "https://placeholder.svg"
    },
  ];
  
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Отфильтрованные проекты
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Уникальные категории для фильтра
  const categories = [...new Set(allProjects.map(project => project.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Наши походы</h1>
          
          {/* Фильтры */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Поиск походов..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Список походов */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500 mb-4">Походы не найдены</p>
              <Button onClick={() => {setSearchQuery(""); setCategoryFilter("all");}}>
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
