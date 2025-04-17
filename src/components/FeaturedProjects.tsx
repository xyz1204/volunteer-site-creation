import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const FeaturedProjects = () => {
  // Демо данные для проектов
  const projects: ProjectCardProps[] = [
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
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Актуальные проекты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите проект, который вам интересен, и станьте частью команды неравнодушных людей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
