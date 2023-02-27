import React from "react";
import { useParams } from "react-router-dom";

const Singlepage = () => {
  const { movie_id } = useParams();
  console.log(movie_id);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Singlepage;
