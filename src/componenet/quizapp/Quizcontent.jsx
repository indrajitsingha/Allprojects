import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Quiz.css";
import { Quizcontext } from "./Quiz";

let count = 0;
let time_percent = 0;

const Quizcontent = () => {
  const { topic, qdiffi } = useContext(Quizcontext);
  const [holddata, setholddata] = useState();
  const [score, setscore] = useState([]);
  const [counter, setcounter] = useState(0);
  const [color, setcolor] = useState(0);
  const [sec, setsec] = useState(25);

  const submitquestion = () => {
    document.getElementById("modal").classList.add("show-modal");
  };

  const changequestion = () => {
    setcounter(counter + 1);
    console.log(holddata);
    setcolor(0);
    setsec(25);
  };

  function closem() {
    document.getElementById("modal").classList.remove("show-modal");
    setcounter(0);
    setscore([]);
  }

  const ansmatch = (ans, id, correctans) => {
    if (ans == correctans) {
      let ans = "correct";
      setscore((oldscore) => [...oldscore, { id, ans }]);
    }
  };

  const changequiz = () => {
    count = count + 1;
    setcounter(0);
    setscore([]);
    setsec(25);
  };

  useEffect(() => {
    const timmer = setTimeout(() => {
      if (sec == 0) {
        setsec(25);
        setcounter(counter + 1);
        time_percent = 0 + "%";
      } else {
        setsec(sec - 1);
        time_percent = (sec * 100) / 25 + "%";
      }
    }, 1000);

    return () => {
      clearTimeout(timmer);
    };
  }, [sec]);

  console.log(time_percent);
  useEffect(() => {
    const getquestion = async () => {
      const response = await axios.get(
        `https://quizapi.io/api/v1/questions?apiKey=qqeIYKbKU6yW3KcoO95CQGcXmKmt5hlnPDzgBzQ7&difficulty=${qdiffi}&limit=10&tags=${topic}`
      );
      setholddata(response.data);
    };
    getquestion();
  }, [count]);

  return (
    <>
      <div className="quiz_title">
        Take a quiz in <b className="text-[#FFB100]">&nbsp; {topic}</b>
        <button
          className="submitbtn rounded hover:border-[FFB100] transition delay-700 duration-300 ease-in-out  "
          onClick={changequiz}
        >
          Nextquiz
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="timer ">
        <div className="timer-counter"> {sec} sec </div>
      </div>

      <div className="main-quiz ">
        {holddata
          ? holddata.slice(counter, counter + 1).map((data) => {
              let correctans = " ";
              if (data.correct_answers.answer_a_correct === "true") {
                correctans = "answer_a";
              }
              if (data.correct_answers.answer_b_correct === "true") {
                correctans = "answer_b";
              }
              if (data.correct_answers.answer_c_correct === "true") {
                correctans = "answer_c";
              }
              if (data.correct_answers.answer_d_correct === "true") {
                correctans = "answer_d";
              }
              return (
                <div className="quiz-card rounded" key={data.id}>
                  <div className="quiz-upper">
                    <div class="h-[2%] relative w-[100%] rounded-full overflow-hidden">
                      <div
                        class=" h-full bg-yellow-400 sm:bg-yellow-400 absolute"
                        style={{ width: time_percent }}
                      ></div>
                    </div>

                    <div className="quiz-que ">
                      Q {counter + 1}: {data.question}
                    </div>
                    <div className="quiz-ans">
                      <div
                        className={`ans ${
                          color === 1 ? "bg-[crimson]" : "bg-indigo-600"
                        } `}
                        id="ans"
                        onClick={() =>
                          ansmatch("answer_a", data.id, correctans)
                        }
                        onClickCapture={() => setcolor(1)}
                      >
                        {data.answers.answer_a}
                      </div>
                      <div
                        className={`ans ${
                          color === 2 ? "bg-[crimson]" : "bg-indigo-600"
                        } `}
                        id="ans"
                        onClick={() =>
                          ansmatch("answer_b", data.id, correctans)
                        }
                        onClickCapture={() => setcolor(2)}
                      >
                        {data.answers.answer_b}
                      </div>
                      {data.answers.answer_d ? (
                        <div
                          className={`ans  ${
                            color === 3 ? "bg-[crimson]" : "bg-indigo-600"
                          } `}
                          id="ans"
                          onClick={() =>
                            ansmatch("answer_c", data.id, correctans)
                          }
                          onClickCapture={() => setcolor(3)}
                        >
                          {data.answers.answer_c}
                        </div>
                      ) : null}
                      {data.answers.answer_d ? (
                        <div
                          className={`ans  ${
                            color === 4 ? "bg-[crimson]" : "bg-indigo-600"
                          } `}
                          id="ans"
                          onClick={() =>
                            ansmatch("answer_d", data.id, correctans)
                          }
                          onClickCapture={() => setcolor(4)}
                        >
                          {data.answers.answer_d}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {holddata[9].id === data.id ? (
                    <div className="submit-btn ">
                      <button
                        className="submitbtn rounded hover:border-[FFB100] animate-bounce delay-100"
                        onClick={submitquestion}
                      >
                        Submit
                        <BsFillArrowRightCircleFill />
                      </button>

                      <div className="modal" id="modal">
                        <div className="modal-content">
                          <div className="container-image">
                            <div className="number">
                              <b>{score.length}</b>{" "}
                            </div>
                          </div>
                          <div className="container-des">
                            Hello, Your Score &nbsp;{" "}
                            <b className="text-[crimson]"> {score.length} </b>{" "}
                            &nbsp; out of 10
                          </div>
                          <div className="backbutton">
                            <button onClick={closem}>
                              <AiFillCloseCircle />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="submit-btn ">
                      <button
                        className="submitbtn rounded hover:border-[FFB100] animate-bounce delay-100"
                        onClick={changequestion}
                      >
                        <BsFillArrowRightCircleFill />
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Quizcontent;
