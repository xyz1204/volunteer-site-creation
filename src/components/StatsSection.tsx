import { LucideHeart, Users, Calendar, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: "1500+",
      label: "Волонтёров",
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      value: "250+",
      label: "Проектов",
    },
    {
      icon: <LucideHeart className="w-8 h-8 text-primary" />,
      value: "10000+",
      label: "Часов помощи",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      value: "50+",
      label: "Партнёров",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Наши достижения</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Благодаря нашим волонтёрам мы смогли оказать помощь тысячам людей и реализовать сотни проектов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 text-accent">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
