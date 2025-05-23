import { CalendarIcon, Clock, Cloud, CloudRain, MapPin, Thermometer } from "lucide-react";

export function HeroWeatherCard({ conditions }) {
  return (
    <div className="bg-gray-700/30 backdrop-blur-md border border-white/20 dark:border-gray-700/10 shadow-lg p-6 rounded-lg max-w-[320px] md:min-w-2xl lg:min-w-4xl xl:min-w-6xl sm:min-w-lg grid grid-cols-2 gap-5">
      <div className="text-foreground flex flex-col items-start gap-4 p-3 justify-center">
        <div className="flex items-baseline justify-center">
          <h1 className="text-primary text-6xl md:text-9xl font-semibold flex items-baseline">
            <Thermometer /> {conditions.temp}
            <span className="text-primary text-3xl md:text-6xl">°C</span>
            
          </h1>
        </div>
        <p className="text-lg md:text-xl text-primary text-end">
          {conditions.description}
        </p>
      </div>
      <div className="flex flex-col items-end justify-between gap-4 py-4">
        <div className=" flex items-center gap-2 py-4">
          <MapPin size={24} className="text-primary"/>
          <h3 className="text-primary capitalize font-medium text-lg ">{conditions.city}</h3>
        </div>
        <div className=" flex items-center gap-2 py-4">
          <img src={conditions.img_url} alt="" className="h-8 w-8" />
          <h3 className="text-primary capitalize font-medium text-lg">Raining</h3>
        </div>
        <div className=" flex items-center gap-2 py-4">
          <Clock size={24} className="text-primary"/>
          <h3 className="text-primary capitalize font-medium text-lg">Now</h3>
        </div>
        <div className=" flex items-center gap-2 py-4">
          <h2 className="text-primary"> </h2>
          <div className="flex items-center text-primary gap-2">
            <CalendarIcon />
            <p>{conditions.day}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
