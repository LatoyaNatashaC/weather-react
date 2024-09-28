import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
        <img src="/images/logo.png" className="logo" alt="SheCodes Logo" />
      </a>
      <form>
        <input type="search" placeholder="Enter a city.." />
        <button type="Submit">Search</button>
      </form>
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
