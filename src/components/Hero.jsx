import { Menu, Search, ArrowDown, Locate } from "lucide-react";
import { HeroWeatherCard } from "./HeroWeatherCard";
import { cn } from "../lib/utils";
import { getWeatherData } from "../services/api";

import { Cloud } from "lucide-react";
import { useEffect, useState } from "react";
const condition = {
  id: 1,
  time: "0:00",
  main: "main",
  description: "description",
  temp: 30,
  icon: <Cloud />,
  day: new Date().getDate(),
  img_url: "https://openweathermap.org/img/wn/04n@2x.png",
  city: "city",
};

export function Hero() {
  const [location,setLocation] = useState('Location Loading....')
  useEffect(() => {
    async function loadData() {
      try {
        const weatherData = await getWeatherData(-0.1277, 51.5073);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <section
        id="hero"
        className="mt-6 text-primary z-40 flex flex-col justify-center items-center min-h-screen mx-auto gap-10 "
      >
        <div
          className={cn(
            "px-6  py-4 rounded-lg bg-gray-700/30 backdrop-blur-md border",
            " border-white/20 flex flex-wrap gap-4 items-center justify-center",
            "max-w-[320px] md:min-w-2xl lg:min-w-4xl xl:min-w-6xl sm:min-w-lg"
          )}
        >
          <form className="flex items-center justify-center gap-4 ">
            <input
              name="search"
              type="text"
              className="px-5 py-2 rounded-lg ring-1 ring-white focus:outline-0 text-sm text-primary font-medium"
              placeholder=" Search City....."
            />
            <button
              type="submit"
              className="text-gray-700 card-hover bg-card p-3 rounded-lg"
            >
              <Search />
            </button>
          </form>

          <div className="text-gray-700 card-hover bg-card p-3 rounded-lg mx-3 flex items-center gap-4">
            <p className="text-gray-700 font-medium text-glow">
              Get back to my Location
            </p>
            <Locate className="text-gray-700 text-glow" />
          </div>
        </div>

        <HeroWeatherCard conditions={condition} />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transform flex flex-col items-center justify-center">
          <span className="text-sm text-gray-700 mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </section>
    </>
  );
}
