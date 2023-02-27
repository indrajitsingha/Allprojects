import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaSearch } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Galleryapp = () => {
  const [data, setdata] = useState("");
  const [apidata, setapidata] = useState([]);

  const getdata_api = async () => {
    //    for(let pageno=1;pageno<=10;pageno++){

    // }
    var url =
      "https://api.unsplash.com/search/photos?page=1&per_page=100&query=" +
      data +
      "&client_id=PQfiG-xtjKZyuwPGB5Sw7gar5KedOgF7qj8VSo6enN8";
    const response = await axios.get(url);
    console.log(response.data);
    setapidata(response.data.results);
    console.log(apidata);
  };

  const inputform = (event) => {
    const value = event.target.value;
    setdata(value);
  };
  const submitform = (event) => {
    event.preventDefault();
    getdata_api();
  };

  return (
    <div>
      <div className="app min-h-[100vh] w-[100%] bg-[#2C3333]">
        <div className="search h-[20vh] w-[100%] flex items-center justify-center">
          <form
            action=""
            className="h-[100%] w-[100%] flex items-center justify-center"
            onSubmit={submitform}
          >
            <input
              type="text"
              placeholder="search anything...."
              className="text-center text-white searchbox sm:w-[50%] w-[80%] h-[6vh] bg-black  rounded-full relative"
              name="searchname"
              value={data}
              onChange={inputform}
            />
            <button
              type="submit"
              className=" text-[red] h-[6vh] rounded-full p-3  text-[20px] absolute sm:ml-[97vh] ml-[48vh]"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        <div className="photos min-h-[70vh] w-[100%]  flex items-center justify-center flex-wrap ">
          {apidata.length > 0 ? (
            apidata.map((x, index) => {
              return (
                <div
                  className=" h-[45vh] sm:w-[30%] w-[100%] sm:m-5 m-3"
                  key={index}
                >
                  <div className="h-[90%] w-[100%] ">
                    <LazyLoadImage
                      src={x.urls.small}
                      alt=""
                      className="h-[100%] w-[100%]"
                    />
                  </div>

                  <div className="h-[10%] w-[100%] text-center mt-1 flex">
                    <div className=" rounded-full h-[30px] w-[10%]">
                      <img
                        src={x.user.profile_image.small}
                        alt=""
                        className="h-[30px] w-[100%] rounded-full object-contain"
                      />
                    </div>
                    <div className=" text-white w-[90%] text-center">
                      {x.alt_description}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-white text-center text-[50px]">
              Data Not found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Galleryapp;
