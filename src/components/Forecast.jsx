import { cn } from "../lib/utils";
import { WeatherCard } from "./WeatherCard";
import { Cloud } from "lucide-react";

const conditioCard = [
    {
      id: 1,
      time: "0:00",
      main: "main",
      description: "description",
      temp: 30,
      icon: <Cloud />,
      day: new Date().getDate(),
      img_url: "/weather/mist.jpg",
      city: "city",
    },
    {
      id: 1,
      time: "0:00",
      main: "main",
      description: "description",
      temp: 30,
      icon: <Cloud />,
      day: new Date().getDate(),
      img_url: "/weather/mist.jpg",
      city: "city",
    },
    {
      id: 1,
      time: "0:00",
      main: "main",
      description: "description",
      temp: 30,
      icon: <Cloud />,
      day: new Date().getDate(),
      img_url: "/weather/mist.jpg",
      city: "city",
    },
    {
      id: 1,
      time: "0:00",
      main: "main",
      description: "description",
      temp: 30,
      icon: <Cloud />,
      day: new Date().getDate(),
      img_url: "/weather/mist.jpg",
      city: "city",
    },
    {
      id: 1,
      time: "0:00",
      main: "main",
      description: "description",
      temp: 30,
      icon: <Cloud />,
      day: new Date().getDate(),
      img_url: "/weather/mist.jpg",
      city: "city",
    },
  ];
export function Forecast({forecast}) {
  return (
    <section className="container py-24 px-6 relative">
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          "max-w-[320px] md:min-w-2xl lg:min-w-4xl xl:min-w-6xl sm:min-w-lg",
          "gap-4 mx-auto"
        )}
      >
        {forecast.map((condition,key) => (
            <WeatherCard key={key} conditions={condition}/>
        ))}
        
      </div>
    </section>
  );
}
