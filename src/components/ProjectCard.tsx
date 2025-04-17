import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  volunteersNeeded: number;
  volunteersJoined: number;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  date,
  location,
  category,
  volunteersNeeded,
  volunteersJoined,
  image = "https://cdn.poehali.dev/files/483e56cc-6903-4eb5-b598-69f37329fdc6.jpg"
}) => {
  const progress = (volunteersJoined / volunteersNeeded) * 100;

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-gray-500">
          <Calendar size={16} />
          {date}
        </CardDescription>
        <CardDescription className="flex items-center gap-2 text-gray-500">
          <MapPin size={16} />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>
        <div className="mt-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Участники</span>
            <span className="text-sm font-medium">{volunteersJoined}/{volunteersNeeded}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/projects/${id}`} className="w-full">
          <Button variant="default" className="w-full">
            Узнать больше
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
