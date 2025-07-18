import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Search({ updateInfo }) {
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "7679bb8cacacf3c220f70814cc73f20d";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        minTemp: jsonResponse.main.temp_min,
        maxTemp: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setcity(event.target.value);
    if (error) seterror(false);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setcity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <TextField
          id="outlined-basic"
          label="Enter City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{ marginRight: 2, width: "300px" }}
        />
        <Button variant="contained" type="submit" endIcon={<SearchIcon />}>
          Search
        </Button>
      </form>

      {error && (
        <div className="error-message">
          ❗ No such city found. Please check the name and try again.
        </div>
      )}
    </>
  );
}
