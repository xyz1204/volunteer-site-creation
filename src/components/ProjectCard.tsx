import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  volunteersNeeded: number;
  volunteersJoined: number;
  imageUrl?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  date,
  location,
  category,
  volunteersNeeded,
  volunteersJoined,
  imageUrl = "/placeholder.svg"
}: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-transform hover:shadow-md">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3">{category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-sm">
          <MapPin size={14} /> {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        <p className="text-sm line-clamp-3 mb-3">{description}</p>
        <div className="flex items-center gap-2 text-sm">
          <Users size={14} />
          <span>
            {volunteersJoined} из {volunteersNeeded} волонтёров присоединились
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/projects/${id}`} className="w-full">
          <Button className="w-full">Подробнее</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
