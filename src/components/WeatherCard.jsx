import { Clock, CloudDrizzle, Thermometer } from "lucide-react";
export function WeatherCard({ conditions }) {
  return (
    <div className="text-primary bg-gray-600/70 backdrop-blur-sm rounded-lg group  shadow-xs overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={"/weather/" + conditions["main"].toString().toLowerCase()+ ".jpg"}
          alt={conditions.main}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock />
            <p className="text-lg">{conditions.time}</p>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer />
            <p className="text-lg">{conditions.temp + "°C"} </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={conditions.img_url} alt="" className="h-8 w-8" />
            <p className="text-lg">{conditions.main}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm">{conditions.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
