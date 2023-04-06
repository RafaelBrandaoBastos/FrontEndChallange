import React, { useEffect, useState } from "react";
import { WeatherImage, WeatherDetails, WeatheTemp, City } from "./Weather.Styled";
import axios from "axios";

function Weather() {
  const [location, setLocation] = useState(false);
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState(false);
  const APIkey = `7e9baf9d3c42b588e4f66011a123a6fb`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;
      let urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
      let urlCity = `http://api.positionstack.com/v1/reverse?access_key=d98a45ec61e6bdccdf661642fd349417&query=${latitude},${longitude}&limit1`;
      axios.get(urlWeather).then((response) => weatherDetails(response.data));
      axios.get(urlCity).then((response) => cityDetails(response.data));
    });
    const weatherDetails = (info) => {
      setIcon(
        `http://openweathermap.org/img/wn/${info.current.weather[0].icon}@2x.png`
      );
      setTemp((info.current.temp - 273).toFixed(0));
      setWeather(true);
      console.log(info);
    };

    const cityDetails = (info) => {
      setCity(info.data[0].locality);
      setStates(info.data[0].region_code);
      setLocation(true);
    };
  }, [location]);

  return (
    <div>
      {!location && !weather ? (
        <div>Carregando cidade e clima...</div>
      ) : (
        <div>
          {" "}
          <City >
            {city} - {states}
          </City >
          <WeatherDetails>
            <WeatherImage src={icon} />
            <WeatheTemp>{temp}°</WeatheTemp>
          </WeatherDetails>
        </div>
      )}
    </div>
  );
}

export default Weather;
