import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">О нас</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
              <p className="text-gray-700 mb-4">
                Мы стремимся объединить активных и неравнодушных людей, готовых вместе решать социальные и экологические проблемы. 
                Наша организация создает возможности для эффективного добровольческого участия в различных инициативах.
              </p>
              <p className="text-gray-700">
                Мы верим, что каждый человек может внести свой вклад в улучшение мира вокруг нас, 
                и наша задача — помочь волонтерам найти свое место в общественно полезной деятельности.
              </p>
            </div>
            <div className="relative aspect-video">
              <img 
                src="/placeholder.svg" 
                alt="Наша команда волонтёров" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-primary">Открытость</h3>
                <p className="text-gray-700">
                  Мы ценим прозрачность во всех аспектах нашей работы и открыты для новых идей и участников.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-primary">Сотрудничество</h3>
                <p className="text-gray-700">
                  Мы верим в силу совместной работы и поддерживаем дух сотрудничества во всех наших проектах.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-primary">Уважение</h3>
                <p className="text-gray-700">
                  Мы уважаем индивидуальность каждого волонтера и благополучателя наших проектов.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Анна Петрова", role: "Директор", image: "/placeholder.svg" },
                { name: "Иван Сергеев", role: "Координатор проектов", image: "/placeholder.svg" },
                { name: "Мария Иванова", role: "Менеджер по работе с волонтёрами", image: "/placeholder.svg" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
