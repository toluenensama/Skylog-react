import axios from "axios";
const api_key = import.meta.env.VITE_API_KEY;


export const getLocationById = async () => {
  const location = await axios.get("http://ip-api.com/json");

  return { lon: location.data.lon, lat: location.data.lat, city: location.data.city };
};

const formatDate = (input) => {
  const date = new Date(input.replace(" ", "T"));
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  return `${month} ${day}`;
};

const formatHour = (input) => {
  const date = new Date(input.replace(" ", "T"));
  return date
    .toLocaleString("en-US", { hour: "numeric", hour12: true })
    .toLowerCase();
};

export const getLocationByCity = async (city) => {
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${city}&format=json`,
    { headers: { "User-Agent": "WeatherMan" } }
  );
  const location = response[0];
  return {
    lon: location["lon"],
    lat: location["lat"],
    city: location["display_name"],
  };
};

export const getWeatherData = async (lon, lat) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast`,
    {
      params: {
        lat: lat,
        lon: lon,
        appid: api_key,
      },
    }
  );
  return response.data.list;
};

export const parseWeatherData = async (weatherData, num) => {
  const weatherList = [];
  for (let i = 0; i < num; i++) {
    const id = weatherData[i]["weather"][0]["id"];
    const main = weatherData[i]["weather"][0]["main"];
    const description = weatherData[i]["weather"][0]["description"];
    const temp = Math.floor(weatherData[i]["main"]["temp"] - 273);
    const icon = weatherData[i]["weather"][0]["icon"];
    const img_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const day = formatDate(weatherData[i]["dt_txt"]);
    const hour = formatHour(weatherData[i]["dt_txt"]);

    const weather = {
      id: id,
      time: hour,
      main: main,
      description: description,
      temp: temp,
      icon: icon,
      day: day,
      img_url: img_url,
    };
    weatherList.push(weather);
  }
  return weatherList;
};



export const getHourDifference = (input) => {
  const getTime = new Date(input.replace(" ", "T"));
  const now = new Date();
  const timeDiff = now - getTime;
  return Math.floor(timeDiff/24) % 24;

}


export const getWeatherCondition = (weatherData) => {
  return weatherData["main"].toString().toLowerCase();
}


