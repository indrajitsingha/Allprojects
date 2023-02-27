import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

const Getsepecific = () => {
  const goBack = () => {};
  //https://api.themoviedb.org/3/movie/245692?api_key=2956f2a5834dd1e3d80fb631f345b211&language=en-US

  const [state, setstate] = useState([]);
  const { movie_id } = useParams();

  const iddata = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "?api_key=2956f2a5834dd1e3d80fb631f345b211&language=en-US"
    );

    setstate(response.data);
    console.log(response);
  };
  useEffect(() => {
    iddata();
  }, [movie_id]);

  return (
    <div className="min-h-[100vh] w-[100%] flex justify-center items-center ">
      <div
        className="show h-[80%] w-[60%] flex flex-col justify-center items-center "
        key={state.id}
      >
        <div className="id  h-[10%] text-black m-1">
          {" "}
          <h1>ID : {state.id}</h1>
        </div>
        <div className="h-[70vh]">
          <img
            src={"https://image.tmdb.org/t/p/original/" + state.poster_path}
            alt=""
            className="h-[100%] object-cover"
          />
        </div>
        <div className=" h-[10%] text-black m-1">
          Movie Name : {state.original_title}
        </div>
        <div className=" h-[10%] text-black m-1">{state.overview}</div>
        <div className="back">
          <button
            className="bg-black p-2 h-[50px] w-[150px] hover:bg-[crimson] rounded"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </div>

      {/* <NavLink to='/movieapp' >hello</NavLink> */}
    </div>
  );
};

export default Getsepecific;
