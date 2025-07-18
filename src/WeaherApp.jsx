import { useState } from "react";
import InfoBox from "./infoBox";
import Search from "./SearchBox";

export default function WeatherApp() {
  const [weather, setWeather] = useState({
    city: "Mumbai",
    feelsLike: 32.56,
    maxTemp: 28.53,
    minTemp: 28.53,
    temp: 28.53,
    weather: "broken clouds",
  });

  const updateInfo = (newInfo) => {
    setWeather(newInfo);
  };

  return (
    <div className="weather-container">
  <h2 className="heading">React Weather App</h2>

      <Search updateInfo={updateInfo} />
      <InfoBox weatherInfo={weather} />
    </div>
  );
}
