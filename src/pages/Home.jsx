import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Forecast } from "../components/Forecast";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import {
  getLocationById,
  getWeatherCondition,
  getWeatherData,
  parseWeatherData,
} from "../services/api";
function Home() {
  const [currentWeather, setCurrentWeather] = useState("clear");
  const bgImg = `url(/weather/${currentWeather}.jpg)`;
  const [weatherForecast,setWeatherForecast] = useState([])

  useEffect(() => {
    async function loadLocation() {
      try {
        const currentLocation = await getLocationById();
        localStorage.setItem(
          "current Location data",
          JSON.stringify(currentLocation)
        );
        localStorage.setItem("current city", currentLocation.city);
        localStorage.setItem("current longitude", currentLocation.lon);
        localStorage.setItem("current latitude", currentLocation.lat);
      } catch (error) {
        console.error(error);
      }
    }
    const currentLon = localStorage.getItem("current longitude");
    const currentLat = localStorage.getItem("current latitude");
    async function loadCurrentLocationWeather() {
      const weatherData = await getWeatherData(currentLon, currentLat);
      const parsedData = await parseWeatherData(weatherData,13)
      const weatherCondition = getWeatherCondition(parsedData[8]);
      console.log("data",parsedData[8])
      console.log("data type",typeof(parsedData[0]))
      console.log(weatherCondition)
      setWeatherForecast(parsedData.slice(1))
      setCurrentWeather(weatherCondition)
    }
    loadCurrentLocationWeather();
    loadLocation();
  }, []);
  return (
    <>
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: bgImg }}
      >
        <NavBar />
        <Hero />
        <Forecast forecast={weatherForecast} />
        <Footer />
      </div>
    </>
  );
}

export default Home;
