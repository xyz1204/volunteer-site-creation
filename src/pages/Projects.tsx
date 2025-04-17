import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Search } from "lucide-react";

const Projects = () => {
  // Демо данные для проектов
  const allProjects: ProjectCardProps[] = [
    {
      id: "1",
      title: "Уборка городского парка",
      description: "Присоединяйтесь к нам для очищения городского парка от мусора и озеленения территории. Вместе мы сделаем наш город чище и зеленее!",
      date: "15 июня 2024",
      location: "Городской парк",
      category: "Экология",
      volunteersNeeded: 20,
      volunteersJoined: 12,
    },
    {
      id: "2",
      title: "Помощь пожилым людям",
      description: "Поможем пожилым людям с покупками, уборкой и просто приятной беседой. Подарите частичку своего времени тем, кто в этом нуждается.",
      date: "20 июня 2024",
      location: "Дом престарелых",
      category: "Социальная помощь",
      volunteersNeeded: 15,
      volunteersJoined: 5,
    },
    {
      id: "3",
      title: "Благотворительный забег",
      description: "Примите участие в благотворительном забеге для сбора средств на лечение детей. Каждый километр имеет значение!",
      date: "30 июня 2024",
      location: "Центральный стадион",
      category: "Благотворительность",
      volunteersNeeded: 30,
      volunteersJoined: 22,
    },
    {
      id: "4",
      title: "Помощь приюту для животных",
      description: "Приходите помочь в приют для животных: выгул собак, уборка территории, общение с животными.",
      date: "5 июля 2024",
      location: "Приют 'Верный друг'",
      category: "Помощь животным",
      volunteersNeeded: 12,
      volunteersJoined: 8,
    },
    {
      id: "5",
      title: "Посадка деревьев",
      description: "Участвуйте в озеленении города! Мы планируем высадить более 100 деревьев в разных районах.",
      date: "12 июля 2024",
      location: "Сквер Молодёжи",
      category: "Экология",
      volunteersNeeded: 40,
      volunteersJoined: 15,
    },
    {
      id: "6",
      title: "Сбор вещей для нуждающихся",
      description: "Помогите собрать одежду, обувь и игрушки для малообеспеченных семей нашего города.",
      date: "18 июля 2024",
      location: "Торговый центр 'Заря'",
      category: "Социальная помощь",
      volunteersNeeded: 10,
      volunteersJoined: 6,
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
          <h1 className="text-3xl font-bold mb-8">Все проекты</h1>
          
          {/* Фильтры */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Поиск проектов..."
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
          
          {/* Список проектов */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500 mb-4">Проекты не найдены</p>
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
