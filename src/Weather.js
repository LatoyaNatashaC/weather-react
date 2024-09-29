import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    console.log(response.data);
    alert(response.data.temperature.current);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  return (
    <div className="Weather">
      <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
        <img src="/images/logo.png" className="logo" alt="SheCodes Logo" />
      </a>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9 ">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control search-input"
              onChange={updateCity}
            />
          </div>
          <div className="col-3 p-0">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      "Search.."
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/LatoyaNatashaC"
          target="_blank"
          rel="noreferrer"
        >
          Latoya Natasha Campbell
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/LatoyaNatashaC"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://latoyas-weather-react-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
