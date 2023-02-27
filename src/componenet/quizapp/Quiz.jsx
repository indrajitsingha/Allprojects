import React, { useState } from "react";
import { createContext } from "react";
import Quizcard from "./Quizcard";
import Quizcontent from "./Quizcontent";

const Quizcontext = createContext();

const Quiz = () => {
  const [topic, settopic] = useState(null);
  const [qdiffi, setqdiff] = useState("Easy");

  function setsub(sub) {
    settopic(sub);
  }

  const difficulty = (diff) => {
    setqdiff(diff);
  };

  return (
    <>
      <Quizcontext.Provider value={{ setsub, topic, difficulty, qdiffi }}>
        {topic == null ? <Quizcard /> : <Quizcontent />}
      </Quizcontext.Provider>
    </>
  );
};

export default Quiz;
export { Quizcontext };
