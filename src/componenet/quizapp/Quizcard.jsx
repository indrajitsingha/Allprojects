import React, { useState } from "react";
import "./Quiz.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Quizcontext } from "./Quiz";

const Quizcard = () => {
  const { setsub, difficulty } = useContext(Quizcontext);
  return (
    <>
      <div className="quiz_title">
        Take a quiz in <b className="text-[#FFB100]">&nbsp; Technologies </b>
      </div>

      <div className="topic-cards">
        <motion.div
          className="topic-card"
          onClick={() => setsub("HTML")}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="topic-image">
            <img src="https://img.icons8.com/color/512/html-5.png" alt="" />
          </div>
          <div className="topic-des">
            <div className="heading">HTML</div>
            <div className="main-des">Click to Start quiz in Html</div>
          </div>
          <div className="diff-btn">
            <button onClick={() => difficulty("Easy")}>Easy</button>
            <button onClick={() => difficulty("Hard")}>Hard</button>
          </div>
        </motion.div>

        <motion.div
          className="topic-card"
          onClick={() => setsub("MySQL")}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="topic-image">
            <img
              src="https://img.icons8.com/external-flat-icons-vectorslab/512/external-Share-Database-network-and-communication-flat-icons-vectorslab.png"
              alt=""
            />
          </div>
          <div className="topic-des">
            <div className="heading">MY SQL</div>
            <div className="main-des">Click to Start quiz in MY-SQL</div>
          </div>
          <div className="diff-btn">
            <button onClick={() => difficulty("Easy")}>Easy</button>
            <button onClick={() => difficulty("Hard")}>Hard</button>
          </div>
        </motion.div>

        <motion.div
          className="topic-card"
          onClick={() => setsub("JavaScript")}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="topic-image">
            <img src="https://img.icons8.com/color/512/javascript.png" alt="" />
          </div>
          <div className="topic-des">
            <div className="heading">Javascript</div>
            <div className="main-des">Click to Start quiz in Javascript</div>
          </div>
          <div className="diff-btn">
            <button onClick={() => difficulty("Easy")}>Easy</button>
            <button onClick={() => difficulty("Hard")}>Hard</button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Quizcard;
