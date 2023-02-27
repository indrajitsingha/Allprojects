import React, { useState, useEffect } from "react";
import "./weatherstyle.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { motion, AnimatePresence, spring } from "framer-motion";

const Weatherapp = () => {
  const [data, setdata] = useState("durgapur");
  const [apidata, setapidata] = useState();

  const weather_info = async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=029280d263c54246bfe73217222112&q=" +
        data +
        "&aqi=no"
    );

    setapidata(response.data);
    console.log(apidata);
  };

  useEffect(() => {
    weather_info();
  }, []);

  const submitform = (e) => {
    e.preventDefault();
    weather_info();
  };

  return (
    <>
      <div className="weather-card">
        <div className="Weather-main-app">
          {apidata ? (
            <motion.div
              className=""
              initial={{ opacity: 0, x: -100, y: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              exit={{ x: -300, opacity: 0 }}
            >
              <div className="weather-image">
                <img src="./img/rain.svg" alt="" className="weather_image" />
              </div>

              <div className="weather-city">
                <h1>
                  {apidata.location.name}, {apidata.location.region}
                </h1>
              </div>

              <div className="weather-rep">
                <div className="temp">
                  temprature : {apidata.current.temp_c}°
                </div>
                <div className="feel">
                  feels like : {apidata.current.feelslike_c}°
                </div>
                <div className="state">
                  Weather State : {apidata.current.condition.text}{" "}
                </div>
              </div>
            </motion.div>
          ) : null}

          <div className="searchweather">
            <form action="" className="weather-form" onSubmit={submitform}>
              <input
                type="text"
                placeholder="search any city for weather report"
                value={data}
                onChange={(e) => setdata(e.target.value)}
              />
              <button type="submit" className="search-city">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weatherapp;
