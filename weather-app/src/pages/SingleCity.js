import React, { useState } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const url = "http://api.openweathermap.org/data/2.5/weather?id=";
const api = process.env.REACT_APP_KEY;
const units = "&units=imperial";

const SingleCity = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCity() {
      try {
        const response = await fetch(`${url}${id}${api}${units}`);
        const data = await response.json();
        if (data.weather) {
          const { description: info } = data.weather[0];
          const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
          const { sunrise, sunset } = data.sys;
          const weather = {
            info,
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity,
            clouds: data.clouds.all,
            sunrise,
            sunset,
            name: data.name,
            timezone: data.timezone,
          };
          setCity(weather);
        } else {
          setCity(null);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getCity();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!city) {
    return <h2 className="weather">No weather to display</h2>;
  }
  const {
    info,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    clouds,
    sunrise,
    sunset,
    name,
    timezone,
  } = city;

  function convertUnixTime(unix, timezone) {
    const remainderMinutes = (timezone % 3600) / 3600;
    const timezoneHours =
      timezone < 0
        ? timezone / 3600 + remainderMinutes
        : timezone / 3600 - remainderMinutes;

    const milliseconds = unix * 1000;
    const time = new Date(milliseconds);
    let localTimeHours = time.getUTCHours() + timezoneHours;

    if (localTimeHours > 24) {
      localTimeHours = localTimeHours - 24;
    } else if (localTimeHours < 0) {
      localTimeHours = localTimeHours * -1 + 12;
    }

    let timezoneMin = remainderMinutes * 60;
    timezoneMin =
      timezone > 0
        ? time.getUTCMinutes() + timezoneMin
        : time.getUTCMinutes() - timezoneMin;

    timezoneMin = timezoneMin < 10 ? "0" + timezoneMin : timezoneMin;
    return `${localTimeHours}:${timezoneMin}`;
  }
  return (
    <section className="weather-section">
      <h2 className="city-title">{name}</h2>
      <div className="weather-info">
        <p>
          <span className="city-data">Description : </span>
          {info}
        </p>
        <p>
          <span className="city-data">Temperature : </span>
          {temp} F
        </p>
        <p>
          <span className="city-data">Feels like : </span>
          {feels_like} F
        </p>
        <p>
          <span className="city-data">Highest : </span>
          {temp_max} F
        </p>
        <p>
          <span className="city-data">Lowest : </span>
          {temp_min} F
        </p>
        <p>
          <span className="city-data">Humidity : </span>
          {humidity} %
        </p>
        <p>
          <span className="city-data">Cloudiness : </span>
          {clouds} %
        </p>
        <p>
          <span className="city-data">Sunrise : </span>
          {convertUnixTime(sunrise, timezone)} AM
        </p>
        <p>
          <span className="city-data">Sunset : </span>
          {convertUnixTime(sunset, timezone)} PM
        </p>
      </div>
    </section>
  );
};

export default SingleCity;
