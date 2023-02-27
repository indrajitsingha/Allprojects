import React, { useEffect, useState } from "react";
import axios from "axios";

const Quotes = () => {
  const [state, setstate] = useState();
  const [dep, setdep] = useState(0);

  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((data) => setstate(data.data[generateRandomInteger(1000)]));
  }, [dep]);

  const getQuotes = () => {
    setdep(dep + 1);
  };
  console.log(state);
  return (
    <>
      <h1 className="text-center">RANDOM Quotes GENERATOR</h1>
      <div className="main h-[90vh] w-[100%] flex flex-col justify-center items-center">
        <div className="card h-[75vh] sm:w-[50%] w-[90%] bg-[crimson] flex flex-col justify-center items-center">
          {state ? (
            <div className="user-content text-white h-[70%] w-[100%] flex flex-col justify-evenly items-center">
              <div className="content text-center   text-[30px] animate-bounce delay-150 ">
                {state.text}
              </div>
              <div className="sb text-[18px] ">
                Author Name :
                {state.author === null ? "No author" : state.author}{" "}
              </div>
            </div>
          ) : (
            <h1>loading</h1>
          )}

          <div />

          <div className="text-[25px] h-[20%] w-[100%] flex justify-around items-center">
            <button
              className="bg-black text-white pl-3 p-1 pr-3 rounded hover:bg-[#3CCF4E]  "
              onClick={getQuotes}
            >
              GetQuotes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
