import axios from "axios";
import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Movieapp = () => {
  const [data, setdata] = useState("");
  const [apidata, setapidata] = useState([]);
  const [spinner, setspinner] = useState(false);

  const getdatafromapi = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie?query=" +
        data +
        "&api_key=2956f2a5834dd1e3d80fb631f345b211&language=en-US&page=1&per_page=100&include_adult=false"
    );
    console.log(response);
    setapidata(response.data.results);
  };

  const inputchange = (event) => {
    setdata(event.target.value);
    setspinner(true);
  };

  const formsubmit = (event) => {
    event.preventDefault();
    // console.log(data);
    setspinner(true);
    setTimeout(() => {
      setspinner(false);
    }, 1500);
    getdatafromapi();
  };

  return (
    <div>
      <div className="search">
        <div className="input">
          <form className="form" action="" onSubmit={formsubmit}>
            <input
              className="inputbox"
              type="text"
              placeholder="Search any Movies....."
              onChange={inputchange}
            />
            <button type="submit" className="searchbtn">
              Search{" "}
            </button>
          </form>
        </div>
      </div>

      <div className="showdiv min-h-[80vh]">
        {spinner == true ? (
          <div class="loader"></div>
        ) : (
          apidata.map((x, index) => {
            return (
              <NavLink to={`/movieapp/movieapp/${x.id}`}>
                <motion.div
                  className="display"
                  key={index}
                  initial={{ opacity: 0, x: -100, y: -100 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                >
                  <div className="img">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original/" + x.poster_path
                      }
                      alt="img"
                    />
                  </div>
                  <div className="des">
                    <div className="title text-white">{x.title}</div>
                    <div className="date text-white">{x.release_date}</div>
                  </div>
                </motion.div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Movieapp;
